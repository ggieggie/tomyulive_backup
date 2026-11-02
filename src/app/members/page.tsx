import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
export const metadata: Metadata = {
  title: "所属ライバーの方へ",
  robots: { index: false, follow: false },
};
export default function MembersPage() {
  return (
    <>
      <PageHeader
        title="所属ライバーの方へ"
        subtitle="配信準備やお手続きでお困りのときは、担当マネージャーへご連絡ください。"
      />
      <section className="section">
        <div className="prose-content">
          <Link href="/manual" className="resource-link">
            <div>
              <h2>マニュアル・手続きのご案内</h2>
              <p>配信前の準備、契約や貸与についてのご案内はこちら。</p>
            </div>
            <Icon name="arrow" />
          </Link>
          <Link href="/contact" className="resource-link">
            <div>
              <h2>お問い合わせ</h2>
              <p>連絡先が分からないときは、公式LINEへ。</p>
            </div>
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}
