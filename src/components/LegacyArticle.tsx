import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { getLegacyPage } from "@/content/legacy";
import { Icon } from "./Icon";
import { PageHeader } from "./PageHeader";
type TocItem = { id: string; level: number; text: string };
const dir = join(process.cwd(), "src/content/legacy");
const eyebrows = { column: "Column", member: "For members", staff: "Manual" };
export function jpDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}
export function legacyMetadata(slug: string): Metadata {
  const page = getLegacyPage(slug);
  return {
    title: page.title,
    description: page.description,
    ...(page.noindex && { robots: { index: false, follow: true } }),
  };
}
export function LegacyArticle({ slug }: { slug: string }) {
  const page = getLegacyPage(slug);
  const body = readFileSync(join(dir, `${slug}.html`), "utf8");
  const toc: TocItem[] = JSON.parse(
    readFileSync(join(dir, `${slug}.toc.json`), "utf8"),
  );
  const dates =
    page.modified === page.published
      ? `公開日：${jpDate(page.published)}`
      : `公開日：${jpDate(page.published)}\n更新日：${jpDate(page.modified)}`;
  const back =
    page.kind === "column"
      ? { href: "/category/column/", label: "コラム一覧へ戻る" }
      : page.kind === "member"
        ? { href: "/manual/", label: "マニュアル・手続きへ戻る" }
        : null;
  const showToc = toc.length >= 3;
  return (
    <>
      <PageHeader
        label={page.label}
        parent={
          page.kind === "column"
            ? { href: "/category/column/", label: "コラム" }
            : undefined
        }
        eyebrow={eyebrows[page.kind]}
        title={page.heading}
        subtitle={dates}
      />
      <div className={`article-layout${showToc ? "" : " no-toc"}`}>
        {showToc && (
          <nav className="toc" aria-label="目次">
            <p className="toc-title">Contents</p>
            <ol>
              {toc.map((t) => (
                <li key={t.id} className={`lv${t.level}`}>
                  <a href={`#${t.id}`}>{t.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <article
          className="article"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
      {back ? (
        <div className="narrow article-back">
          <Link className="text-link" href={back.href}>
            {back.label}
            <Icon name="arrow" />
          </Link>
        </div>
      ) : (
        <div className="article-back" />
      )}
    </>
  );
}
