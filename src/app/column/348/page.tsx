import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
import toc from "@/content/column-348.toc.json";
export const metadata: Metadata = {
  title: "ライバーの確定申告・請求書の発行手続き",
  description:
    "この記事は、tomyu-live事務所所属のライバー様向けに公開しています。",
};
// 旧サイト（WordPress）の記事本文を変換したもの。文章は旧サイトと同一
const body = readFileSync(
  join(process.cwd(), "src/content/column-348.html"),
  "utf8",
);
export default function Column348Page() {
  return (
    <>
      <PageHeader
        label="確定申告・請求書の手続き"
        eyebrow="For members"
        title="ライバーの確定申告・|請求書の発行手続き"
        subtitle="公開日：2024年11月17日"
      />
      <div className="article-layout">
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
        <article
          className="article"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
      <div className="narrow article-back">
        <Link className="text-link" href="/members">
          所属ライバーの方へ戻る
          <Icon name="arrow" />
        </Link>
      </div>
    </>
  );
}
