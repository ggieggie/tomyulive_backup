import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Phrases } from "@/components/Phrases";
import { Icon } from "@/components/Icon";
import { jpDate } from "@/components/LegacyArticle";
import { columns } from "@/content/legacy";
export const metadata: Metadata = { title: "コラム" };
export default function ColumnListPage() {
  return (
    <>
      <PageHeader
        label="コラム"
        eyebrow="Column"
        title="コラム"
        subtitle="配信やお手続きに役立つ記事をまとめています。"
      />
      <section className="section">
        <ul className="narrow column-list">
          {columns.map((c) => (
            <li key={c.path}>
              <Link href={c.path} className="column-card">
                <time dateTime={c.published}>{jpDate(c.published)}</time>
                <h2>
                  <Phrases text={c.heading} />
                </h2>
                <p>{c.description}</p>
                <span className="resource-arrow">
                  <Icon name="arrow" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
