import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
export const metadata: Metadata = {
  title: "プライバシーポリシー",
};
export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="プライバシーポリシー"
        eyebrow="Privacy policy"
        title="プライバシー|ポリシー"
      />
      <article className="legal">
        <p>
          トミュライブ（tomyu-live、以下「当事務所」）は、個人情報保護の重要性を認識し、以下の方針に基づき個人情報を適切に取り扱います。
        </p>
        <h2>1. 収集する情報</h2>
        <p>
          お問い合わせや面談の際、お名前・メールアドレス・電話番号等をご提供いただくことがあります。
        </p>
        <h2>2. 利用目的</h2>
        <p>
          ご提供いただいた情報は、面談日程調整・ご連絡・ご案内にのみ利用し、それ以外の目的には使用いたしません。
        </p>
        <h2>3. 第三者提供</h2>
        <p>
          法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供することはありません。
        </p>
        <h2>4. お問い合わせ窓口</h2>
        <p>
          個人情報の取り扱いに関するお問い合わせは、公式LINEよりご連絡ください。
        </p>
      </article>
    </>
  );
}
