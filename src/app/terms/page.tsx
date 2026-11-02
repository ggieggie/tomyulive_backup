import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "利用規約",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="利用規約" />
      <section className="section">
        <div className="mx-auto max-w-3xl">
          <p className="text-foreground/90 leading-relaxed">
            本利用規約は、トミュライブ（tomyu-live、以下「当事務所」）が運営するウェブサイトをご利用いただくための条件を定めるものです。
          </p>
          <h3 className="font-bold text-lg mt-8 mb-3">第1条（適用）</h3>
          <p className="text-foreground/90 leading-relaxed">
            本利用規約は、当事務所が運営するウェブサイトの利用に関し、利用者と当事務所との間に生じる一切の権利義務関係に適用されます。
          </p>
          <h3 className="font-bold text-lg mt-8 mb-3">第2条（禁止事項）</h3>
          <p className="text-foreground/90 leading-relaxed">
            利用者は、本サイトの利用にあたり、法令違反行為、公序良俗に反する行為、当事務所の運営を妨害する行為等を行ってはなりません。
          </p>
          <h3 className="font-bold text-lg mt-8 mb-3">第3条（免責事項）</h3>
          <p className="text-foreground/90 leading-relaxed">
            当事務所は、本サイトの内容の正確性・完全性について保証するものではなく、利用により生じた損害について一切の責任を負いません。
          </p>
        </div>
      </section>
    </>
  );
}
