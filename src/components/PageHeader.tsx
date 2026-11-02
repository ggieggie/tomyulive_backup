import Link from "next/link";
export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">ホーム</Link>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <span className="page-flower" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}
