import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
import { LineButton } from "@/components/LineButton";
import { Phrases } from "@/components/Phrases";
export const metadata: Metadata = {
  title: "マニュアル・手続き",
  robots: { index: false, follow: false },
};
export default function ManualPage() {
  return (
    <>
      <PageHeader
        label="マニュアル・手続き"
        eyebrow="Manual"
        title="マニュアル・|手続きのご案内"
        subtitle="所属ライバーの方へ。|必要なご案内は、|担当マネージャーからお送りします。"
      />
      <section className="section">
        <div className="narrow resource-list">
          <Link href="/column/348/" className="resource-link">
            <div>
              <h2>
                <Phrases text="ライバーの確定申告・|請求書の発行手続き" />
              </h2>
              <p>
                マネーフォワードでの開業手続きと、毎月の請求書の作り方を解説しています。
              </p>
            </div>
            <span className="resource-arrow">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link href="/contract/" className="resource-link">
            <div>
              <h2>
                <Phrases text="電子契約書の|締結方法" />
              </h2>
              <p>
                マネーフォワード クラウド契約で届いた契約書を、オンラインで締結する手順です。
              </p>
            </div>
            <span className="resource-arrow">
              <Icon name="arrow" />
            </span>
          </Link>
          <div className="info-card">
            <h2>
              <Phrases text="担当マネージャーに|ご相談ください" />
            </h2>
            <p>
              初配信の準備、契約のお手続き、端末の貸与、報酬の受け取りなどは、担当マネージャーとのトークからご連絡ください。最新の手順や対象条件をご案内します。
            </p>
          </div>
          <div className="cta-panel">
            <p>
              <Phrases
                text={"担当者への連絡先が|分からない場合は、\n公式LINEで|「所属ライバーです」と|お伝えください。"}
              />
            </p>
            <LineButton>公式LINEを開く</LineButton>
          </div>
        </div>
      </section>
    </>
  );
}
