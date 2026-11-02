import Link from "next/link";
import { Phrases } from "./Phrases";
export function PageHeader({
  label,
  eyebrow,
  title,
  subtitle,
}: {
  label: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav className="breadcrumbs" aria-label="現在地">
          <Link href="/">ホーム</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{label}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          <Phrases text={title} />
        </h1>
        {subtitle && (
          <p className="page-hero-lead">
            <Phrases text={subtitle} />
          </p>
        )}
      </div>
    </section>
  );
}
