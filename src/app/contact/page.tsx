import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { LineButton } from "@/components/LineButton";
import { Phrases } from "@/components/Phrases";
import { Icon } from "@/components/Icon";
export const metadata: Metadata = { title: "お問い合わせ" };
export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="お問い合わせ"
        eyebrow="Contact"
        title={"まずは、\n気軽に|お話ししよう。"}
        subtitle="ご応募・ご質問は、|トミュライブの公式LINEで受け付けています。"
      />
      <section className="section">
        <div className="narrow">
          <div className="contact-card">
            <p className="eyebrow">Let’s talk</p>
            <h2 className="section-title">
              <Phrases text="「私にもできる？」|から、|どうぞ。" />
            </h2>
            <p className="lead">
              <Phrases
                text={"ライバー診断や所属のご相談、|サポートについての質問も。\n下のボタンから友だち追加して、|メッセージをお送りください。"}
              />
            </p>
            <ul className="topic-chips">
              <li>未経験からの配信</li>
              <li>移籍について</li>
              <li>報酬・サポート</li>
            </ul>
            <LineButton>公式LINEで相談する</LineButton>
            <p className="note">
              <Phrases text="LINEが別タブで開きます。|友だち追加後、|トーク画面から|お問い合わせください。" />
            </p>
          </div>
          <div className="center-action">
            <Link className="text-link" href="/faq">
              よくある質問も見てみる
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
