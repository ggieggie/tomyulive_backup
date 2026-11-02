import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
export default function NotFound() {
  return (
    <>
      <PageHeader
        title="ページが見つかりませんでした。"
        subtitle="URLが変更されたか、ページが移動した可能性があります。"
      />
      <section className="section center-action">
        <Link href="/" className="btn-primary">
          ホームに戻る
        </Link>
      </section>
    </>
  );
}
