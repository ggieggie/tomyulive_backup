# Usage: python3 -I convert_legacy.py <backup-root> <project-root> <report-json>
# Converts the old WordPress (SWELL) pages into clean HTML for the new site,
# copies their images into public/, and checks that no text was lost.
import hashlib
import html
import json
import os
import re
import shutil
import sys
from html.parser import HTMLParser
from urllib.parse import unquote, urljoin, urlparse

backup, project, report_path = sys.argv[1:4]

# (old URL path without slashes, content file name)
PAGES = [
    ("talk", "talk"),
    ("before-streaming", "before-streaming"),
    ("contract", "contract"),
    ("rental", "rental"),
    ("manual-list", "manual-list"),
    ("column/348", "column-348"),
    ("column/511", "column-511"),
    ("column/614", "column-614"),
    ("column/620", "column-620"),
    ("column/657", "column-657"),
]
# The operating company is トミュタ合同会社. "株式会社めちゃのび" was auto-renamed to
# "株式会社tomyu-live" on the old static site; both become the real company name.
TEXT_REPLACE = [
    ("株式会社めちゃのび", "トミュタ合同会社"),
    ("株式会社tomyu-live", "トミュタ合同会社"),
    ("カブシキガイシャメチャノビ", "トミュタゴウドウガイシャ"),
]
VOID = {"img", "br", "hr", "source", "input", "meta", "link", "wbr"}
SKIP_CLASSES = {"__label", "p-toc", "p-blogCard__excerpt", "c-balloon__shapes"}
SITE = "https://tomyulive.com"


class Node:
    def __init__(self, tag, attrs=None, parent=None):
        self.tag, self.attrs, self.parent, self.children = tag, dict(attrs or {}), parent, []

    @property
    def cls(self):
        return (self.attrs.get("class") or "").split()

    def text(self):
        return "".join(c if isinstance(c, str) else c.text() for c in self.children)


class Tree(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("root")
        self.cur = self.root

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.children.append(n)
        if tag not in VOID:
            self.cur = n

    def handle_startendtag(self, tag, attrs):
        self.cur.children.append(Node(tag, attrs, self.cur))

    def handle_endtag(self, tag):
        n = self.cur
        while n is not self.root and n.tag != tag:
            n = n.parent
        if n is not self.root:
            self.cur = n.parent

    def handle_data(self, data):
        self.cur.children.append(data)


def find(node, pred):
    if isinstance(node, str):
        return None
    if pred(node):
        return node
    for c in node.children:
        r = find(c, pred)
        if r:
            return r
    return None


def esc(s):
    return html.escape(s, quote=False)


def replace_text(s):
    for old, new in TEXT_REPLACE:
        s = s.replace(old, new)
    return s


class Converter:
    def __init__(self, page, slug):
        self.page, self.slug = page, slug
        self.base = f"{SITE}/{page}/"
        self.toc, self.images, self.skipped, self.links = [], {}, [], []
        self.unhandled = {}
        self.h2 = self.h3 = 0
        self.in_accordion = 0
        self.context = ["記事"]

    # ---------- urls ----------
    def site_path(self, href):
        """Map an old link to the new site's URL (internal) or keep it (external)."""
        if "px.a8.net" in href:
            return None  # replaced by the visible URL in inline()
        u = urlparse(urljoin(self.base, href))
        if u.netloc and u.netloc != "tomyulive.com":
            return href
        path = re.sub(r"index\.html$", "", unquote(u.path))
        return path + (("#" + u.fragment) if u.fragment else "")

    def asset(self, src):
        """Copy an image from the backup into public/<page>/ and return its new URL."""
        u = urlparse(urljoin(self.base, src))
        if u.netloc != "tomyulive.com":
            return None
        rel = unquote(u.path).lstrip("/")
        source = os.path.join(backup, rel)
        if not os.path.exists(source):
            source = os.path.join(backup, u.path.lstrip("/"))
        if not os.path.exists(source):
            raise FileNotFoundError(rel)
        name = os.path.basename(rel)
        if not re.fullmatch(r"[A-Za-z0-9._-]+", name):
            ext = os.path.splitext(name)[1].lower()
            name = "u-" + hashlib.sha1(rel.encode()).hexdigest()[:10] + ext
        dest_dir = os.path.join(project, "public", self.page)
        os.makedirs(dest_dir, exist_ok=True)
        shutil.copyfile(source, os.path.join(dest_dir, name))
        self.images[name] = rel
        return f"/{self.page}/{name}"

    # ---------- inline ----------
    def inline(self, node):
        out = []
        for c in node.children:
            if isinstance(c, str):
                out.append(esc(replace_text(re.sub(r"\s+", " ", c))))
                continue
            tag, cls = c.tag, c.cls
            if set(cls) & SKIP_CLASSES:
                continue
            if tag == "br":
                out.append("<br>")
            elif tag in ("strong", "b"):
                inner = self.inline(c)
                out.append(f"<strong>{inner}</strong>" if inner.strip() else inner)
            elif tag in ("em", "i"):
                out.append(f"<em>{self.inline(c)}</em>")
            elif tag == "span" and "swl-marker" in cls:
                out.append(f"<mark>{self.inline(c)}</mark>")
            elif tag == "span" and "swl-inline-color" in cls:
                tone = next((k[8:-6] for k in cls if re.fullmatch(r"has-swl-deep-0\d-color", k)), "")
                tone = f" tone-{tone}" if tone else ""
                out.append(f'<span class="em{tone}">{self.inline(c)}</span>')
            elif tag == "a":
                label = self.inline(c)
                href = c.attrs.get("href", "")
                if not label.strip() or not href:
                    continue
                if "px.a8.net" in href:
                    text = re.sub(r"<[^>]+>", "", label).strip()
                    target = text if text.startswith("https://biz.moneyforward.com") else "https://biz.moneyforward.com/"
                else:
                    target = self.site_path(href)
                self.links.append(target)
                external = target.startswith("http")
                attrs = ' target="_blank" rel="noopener noreferrer"' if external else ""
                out.append(f'<a href="{html.escape(target)}"{attrs}>{label}</a>')
            elif tag == "img":
                self.unhandled["inline-img"] = self.unhandled.get("inline-img", 0) + 1
            elif tag in ("ul", "ol"):
                out.append(self.block(c))
            elif tag == "span" and "swl-fz" in cls:
                size = "fz-l" if {"u-fz-l", "u-fz-xl"} & set(cls) else "fz-s" if {"u-fz-s", "u-fz-xs"} & set(cls) else ""
                inner = self.inline(c)
                out.append(f'<span class="{size}">{inner}</span>' if size else inner)
            else:
                self.note(c)
                out.append(self.inline(c))
        return "".join(out)

    def note(self, node):
        for c in node.cls:
            self.unhandled[c] = self.unhandled.get(c, 0) + 1

    # ---------- blocks ----------
    def blocks(self, node):
        return "".join(self.block(c) for c in node.children)

    def figure(self, node):
        img = find(node, lambda n: n.tag == "img")
        if not img:
            return ""
        url = img.attrs.get("data-src") or img.attrs.get("src", "")
        if "googleusercontent.com" in url:
            self.skipped.append(self.context[-1])
            return ""
        src = self.asset(url)
        w, h = img.attrs.get("width"), img.attrs.get("height")
        styles = []
        for prop in ("width", "aspect-ratio", "object-fit"):
            m = re.search(rf"(?:^|;)\s*{prop}\s*:\s*([^;]+)", img.attrs.get("style", ""))
            if m and m.group(1).strip() != "auto":
                styles.append(f"{prop}:{m.group(1).strip()}")
        style = f' style="{";".join(styles)}"' if styles else ""
        size = f' width="{w}" height="{h}"' if w and h else ""
        mods = " is-shadow" if "is-style-shadow" in node.cls else ""
        mods += " is-xs" if "size_xs" in node.cls else ""
        alt = html.escape(f"{self.context[-1]}の画像")
        cap = find(node, lambda n: n.tag == "figcaption")
        caption = f"<figcaption>{self.inline(cap).strip()}</figcaption>" if cap else ""
        return f'<figure class="shot{mods}"><img src="{src}" alt="{alt}"{size}{style} loading="lazy" decoding="async">{caption}</figure>'

    def heading(self, c):
        text = replace_text(re.sub(r"\s+", " ", c.text()).strip())
        self.context.append(text)
        if c.tag == "h4":
            return f"<h4>{self.inline(c)}</h4>"
        if c.tag == "h2":
            self.h2 += 1
            self.h3 = 0
            hid = f"s{self.h2}"
        else:
            self.h3 += 1
            hid = f"s{self.h2}-{self.h3}"
        # headings inside a closed accordion cannot be reached from the table of contents
        if not self.in_accordion:
            self.toc.append({"id": hid, "level": int(c.tag[1]), "text": text})
        return f'<{c.tag} id="{hid}">{self.inline(c)}</{c.tag}>'

    def steps(self, c, item_cls, title_cls, body_cls):
        items = []
        for it in c.children:
            if isinstance(it, str) or item_cls not in it.cls:
                continue
            title = find(it, lambda n: title_cls in n.cls)
            body = find(it, lambda n: body_cls in n.cls)
            if title:
                self.context.append(replace_text(re.sub(r"\s+", " ", title.text()).strip())[:40])
            title_html = self.inline(title).strip() if title else ""
            items.append(f'<li><p class="step-title">{title_html}</p>{self.blocks(body) if body else ""}</li>')
        return f'<ol class="step-list">{"".join(items)}</ol>'

    def table(self, c):
        table = find(c, lambda n: n.tag == "table")
        rows = []
        for tr in iter_nodes(table):
            if tr.tag != "tr":
                continue
            cells = "".join(
                f"<{td.tag}>{self.inline(td).strip()}</{td.tag}>"
                for td in tr.children
                if not isinstance(td, str) and td.tag in ("th", "td")
            )
            rows.append(f"<tr>{cells}</tr>")
        mods = ""
        if "is-all-centered" in c.cls:
            mods += " is-centered"
        if "is-thead-centered" in c.cls:
            mods += " is-thead-centered"
        if "is-all-centered--va" in c.cls:
            mods += " is-va-middle"
        cap = find(c, lambda n: n.tag == "figcaption")
        caption = f'<p class="table-caption">{self.inline(cap).strip()}</p>' if cap else ""
        return f'<div class="table-wrap{mods}"><table>{"".join(rows)}</table></div>{caption}'

    def block(self, c):
        if isinstance(c, str):
            return ""
        tag, cls = c.tag, c.cls
        if set(cls) & SKIP_CLASSES:
            return ""
        if tag in ("h2", "h3", "h4"):
            return self.heading(c)
        if tag == "img":
            wrap = Node("figure", {"class": "wp-block-image"})
            wrap.children = [c]
            return self.figure(wrap)
        if tag == "p":
            inner = self.inline(c).strip()
            inner = re.sub(r"(<br>\s*)+$", "", inner)
            if not inner:
                return ""
            boxes = [
                ("is-style-icon_announce", "announce"), ("is-style-big_icon_check", "check"),
                ("is-style-big_icon_caution", "caution"), ("is-style-big_icon_point", "point"),
                ("is-style-icon_good", "good"), ("is-style-icon_book", "book"),
                ("is-style-big_icon_good", "good"), ("is-style-big_icon_memo", "memo"),
            ]
            kind = next((k for key, k in boxes if key in cls), None)
            if kind:
                return f'<p class="box box-{kind}">{inner}</p>'
            if "has-border" in cls:
                frame = {"-border01": "frame-soft", "-border02": "frame", "-border03": "dashed"}
                kind = next((v for k, v in frame.items() if k in cls), "frame")
                return f'<p class="box box-{kind}">{inner}</p>'
            return f"<p>{inner}</p>"
        if tag == "pre":
            inner = self.inline(c).strip()
            return f'<p class="box box-memo">{inner}</p>' if inner else ""
        if tag in ("ul", "ol"):
            items = "".join(
                f"<li>{self.inline(li).strip()}</li>"
                for li in c.children
                if not isinstance(li, str) and li.tag == "li"
            )
            if "is-style-num_circle" in cls or tag == "ol":
                return f'<ol class="list-num">{items}</ol>'
            kind = "check" if "is-style-check_list" in cls else "good" if "is-style-good_list" in cls else "dot"
            return f'<ul class="list-{kind}">{items}</ul>'
        if tag == "figure" and "wp-block-image" in cls:
            return self.figure(c)
        if tag == "figure" and "wp-block-table" in cls:
            return self.table(c)
        if tag == "figure" and "is-provider-youtube" in cls:
            frame = find(c, lambda n: n.tag == "iframe")
            vid = re.search(r"/embed/([A-Za-z0-9_-]+)", frame.attrs.get("src", "")).group(1)
            title = html.escape(frame.attrs.get("title", "YouTube動画"))
            self.links.append(f"https://www.youtube.com/watch?v={vid}")
            return (
                f'<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/{vid}" title="{title}" '
                'loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" '
                'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
            )
        if tag == "figure" and "is-type-wp-embed" in cls:
            a = find(c, lambda n: n.tag == "a" and "p-blogCard__title" in n.cls)
            label = find(c, lambda n: "p-blogCard__caption" in n.cls)
            target = self.site_path(a.attrs.get("href", ""))
            self.links.append(target)
            return (
                f'<a class="link-card" href="{html.escape(target)}">'
                f'<span class="link-card-label">{esc(label.text().strip()) if label else "あわせて読みたい"}</span>'
                f'<strong class="link-card-title">{esc(replace_text(a.text().strip()))}</strong></a>'
            )
        if tag == "div" and "ark-block-step" in cls:
            return self.steps(c, "ark-block-step__item", "ark-block-step__title", "ark-block-step__body")
        if tag == "div" and "swell-block-step" in cls:
            return self.steps(c, "swell-block-step__item", "swell-block-step__title", "swell-block-step__body")
        if tag == "div" and "swell-block-capbox" in cls:
            ttl = find(c, lambda n: "cap_box_ttl" in n.cls)
            content = find(c, lambda n: "cap_box_content" in n.cls)
            return (
                f'<div class="capbox"><p class="capbox-title">{esc(replace_text(ttl.text().strip())) if ttl else ""}</p>'
                f'<div class="capbox-body">{self.blocks(content) if content else ""}</div></div>'
            )
        if tag == "div" and "swell-block-balloon" in cls:
            bln = find(c, lambda n: "c-balloon" in n.cls)
            icon = find(c, lambda n: n.tag == "img" and "c-balloon__iconImg" in n.cls)
            name = find(c, lambda n: "c-balloon__iconName" in n.cls)
            text = find(c, lambda n: "c-balloon__text" in n.cls)
            side = "right" if bln and "-bln-right" in bln.cls else "left"
            icon_html = ""
            if icon:
                src = self.asset(icon.attrs.get("src", ""))
                icon_html = f'<img class="balloon-icon" src="{src}" alt="" width="80" height="80" loading="lazy" decoding="async">'
            name_html = f'<span class="balloon-name">{esc(name.text().strip())}</span>' if name else ""
            return (
                f'<div class="balloon is-{side}"><div class="balloon-who">{icon_html}{name_html}</div>'
                f'<div class="balloon-body">{self.blocks(text) if text else ""}</div></div>'
            )
        if tag == "div" and "swell-block-accordion" in cls:
            items = []
            for it in c.children:
                if isinstance(it, str) or it.tag != "details":
                    continue
                label = find(it, lambda n: "swell-block-accordion__label" in n.cls)
                body = find(it, lambda n: "swell-block-accordion__body" in n.cls)
                self.in_accordion += 1
                inner = self.blocks(body) if body else ""
                self.in_accordion -= 1
                items.append(
                    f'<details class="accordion"><summary>{self.inline(label).strip() if label else ""}</summary>'
                    f'<div class="accordion-body">{inner}</div></details>'
                )
            return "".join(items)
        if tag == "dl" and "swell-block-faq" in cls:
            items = []
            for it in c.children:
                if isinstance(it, str) or "swell-block-faq__item" not in it.cls:
                    continue
                q = find(it, lambda n: n.tag == "dt")
                a = find(it, lambda n: n.tag == "dd")
                items.append(f'<div class="qa-item"><dt>{self.inline(q).strip() if q else ""}</dt><dd>{self.blocks(a) if a else ""}</dd></div>')
            return f'<dl class="qa">{"".join(items)}</dl>'
        if tag == "div" and "wp-block-columns" in cls:
            cols = [self.blocks(col) for col in c.children if not isinstance(col, str) and "wp-block-column" in col.cls]
            cols = [x for x in cols if x.strip()]
            if not cols:
                return ""
            if len(cols) == 1:
                return cols[0]
            return '<div class="cols">' + "".join(f'<div class="col">{x}</div>' for x in cols) + "</div>"
        if tag == "div" and "wp-block-group" in cls:
            inner = find(c, lambda n: "wp-block-group__inner-container" in n.cls) or c
            content = self.blocks(inner)
            for key, kind in (("is-style-big_icon_memo", "memo"), ("is-style-big_icon_good", "good"),
                              ("is-style-big_icon_point", "point"), ("is-style-big_icon_caution", "caution"),
                              ("is-style-icon_announce", "announce")):
                if key in cls:
                    return f'<div class="box box-{kind}">{content}</div>'
            if "has-border" in cls:
                return f'<div class="box box-frame">{content}</div>'
            return content
        if tag in ("div", "section", "figure"):
            self.note(c)
            return self.blocks(c)
        if tag in ("hr",):
            return "<hr>"
        self.note(c)
        return ""


def iter_nodes(n):
    for c in n.children:
        if not isinstance(c, str):
            yield c
            yield from iter_nodes(c)


def visible_text(node):
    """Text a reader sees in the original article, minus parts we drop on purpose."""
    if isinstance(node, str):
        return node
    if set(node.cls) & SKIP_CLASSES or node.tag in ("script", "style"):
        return ""
    return "".join(visible_text(c) for c in node.children)


def norm(s):
    return re.sub(r"\s+", "", html.unescape(s))


report = []
for page, slug in PAGES:
    t = Tree()
    t.feed(open(os.path.join(backup, page, "index.html"), encoding="utf-8").read())
    body = find(t.root, lambda n: n.tag == "div" and "post_content" in n.cls)
    conv = Converter(page, slug)
    out = conv.blocks(body)
    out_dir = os.path.join(project, "src", "content", "legacy")
    os.makedirs(out_dir, exist_ok=True)
    open(os.path.join(out_dir, f"{slug}.html"), "w", encoding="utf-8").write(out + "\n")
    json.dump(conv.toc, open(os.path.join(out_dir, f"{slug}.toc.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    before = norm(replace_text(visible_text(body)))
    after = norm(re.sub(r"<[^>]+>", "", out))
    report.append({
        "page": page, "slug": slug, "chars": len(after), "text_identical": before == after,
        "diff_hint": "" if before == after else first_diff if (first_diff := next(
            (f"{before[max(0,i-20):i+30]} ⇔ {after[max(0,i-20):i+30]}" for i in range(min(len(before), len(after))) if before[i] != after[i]),
            f"length {len(before)} vs {len(after)}")) else "",
        "images": len(conv.images), "skipped_google": conv.skipped, "toc": len(conv.toc),
        "internal_links": sorted({l for l in conv.links if l and not l.startswith("http")}),
        "external_links": sorted({l for l in conv.links if l and l.startswith("http")}),
        "unhandled": conv.unhandled,
    })
json.dump(report, open(report_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for r in report:
    flag = "OK " if r["text_identical"] else "DIFF"
    print(f"{flag} {r['page']:<18} chars={r['chars']:<5} images={r['images']:<3} toc={r['toc']:<3} google_skipped={len(r['skipped_google'])} unhandled={r['unhandled'] or '-'}")
    if not r["text_identical"]:
        print("     ", r["diff_hint"])
