import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
export default function NotFound() {
  return (
    <>
      <PageHeader
        label="ページが見つかりません"
        eyebrow="404"
        title="ページが|見つかり|ませんでした。"
        subtitle="URLが変更されたか、|ページが移動した可能性があります。"
      />
      <section className="section center-action">
        <Link href="/" className="button">
          ホームに戻る
          <Icon name="arrow" />
        </Link>
      </section>
    </>
  );
}
