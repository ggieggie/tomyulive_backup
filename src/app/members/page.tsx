import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
import { Phrases } from "@/components/Phrases";
export const metadata: Metadata = {
  title: "所属ライバーの方へ",
  robots: { index: false, follow: false },
};
const links = [
  {
    href: "/manual",
    title: "マニュアル・|手続きのご案内",
    text: "配信前の準備、契約や貸与についてのご案内はこちら。",
  },
  {
    href: "/contact",
    title: "お問い合わせ",
    text: "連絡先が分からないときは、公式LINEへ。",
  },
];
export default function MembersPage() {
  return (
    <>
      <PageHeader
        label="所属ライバーの方へ"
        eyebrow="For members"
        title="所属ライバーの|方へ"
        subtitle="配信準備やお手続きでお困りのときは、|担当マネージャーへご連絡ください。"
      />
      <section className="section">
        <div className="narrow resource-list">
          {links.map((l) => (
            <Link href={l.href} className="resource-link" key={l.href}>
              <div>
                <h2>
                  <Phrases text={l.title} />
                </h2>
                <p>{l.text}</p>
              </div>
              <span className="resource-arrow">
                <Icon name="arrow" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
