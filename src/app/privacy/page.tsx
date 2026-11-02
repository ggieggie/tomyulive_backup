import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="プライバシーポリシー" />
      <section className="section">
        <div className="mx-auto max-w-3xl">
          <p className="text-foreground/90 leading-relaxed">
            トミュライブ（tomyu-live、以下「当事務所」）は、個人情報保護の重要性を認識し、以下の方針に基づき個人情報を適切に取り扱います。
          </p>
          <h3 className="font-bold text-lg mt-8 mb-3">1. 収集する情報</h3>
          <p className="text-foreground/90 leading-relaxed">
            お問い合わせや面談の際、お名前・メールアドレス・電話番号等をご提供いただくことがあります。
          </p>
          <h3 className="font-bold text-lg mt-8 mb-3">2. 利用目的</h3>
          <p className="text-foreground/90 leading-relaxed">
            ご提供いただいた情報は、面談日程調整・ご連絡・ご案内にのみ利用し、それ以外の目的には使用いたしません。
          </p>
          <h3 className="font-bold text-lg mt-8 mb-3">3. 第三者提供</h3>
          <p className="text-foreground/90 leading-relaxed">
            法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供することはありません。
          </p>
          <h3 className="font-bold text-lg mt-8 mb-3">4. お問い合わせ窓口</h3>
          <p className="text-foreground/90 leading-relaxed">
            個人情報の取り扱いに関するお問い合わせは、公式LINEよりご連絡ください。
          </p>
        </div>
      </section>
    </>
  );
}
