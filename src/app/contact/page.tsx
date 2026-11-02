import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { LineButton } from "@/components/LineButton";
export const metadata: Metadata = { title: "お問い合わせ" };
export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="まずは、気軽にお話ししよう。"
        subtitle="ご応募・ご質問は、トミュライブの公式LINEで受け付けています。"
      />
      <section className="section">
        <div className="prose-content">
          <div className="contact-panel">
            <span className="section-sign">Let’s talk!</span>
            <h2>「私にもできる？」から、どうぞ。</h2>
            <p>
              ライバー診断や所属のご相談、サポートについての質問も。
              <br />
              下のボタンから友だち追加して、メッセージをお送りください。
            </p>
            <div className="contact-topics">
              <span>未経験からの配信</span>
              <span>移籍について</span>
              <span>報酬・サポート</span>
            </div>
            <LineButton>公式LINEで相談する</LineButton>
            <small>
              LINEが別タブで開きます。
              <br />
              友だち追加後、トーク画面からお問い合わせください。
            </small>
          </div>
          <div className="center-action">
            <Link className="text-link" href="/faq">
              よくある質問も見てみる<span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
