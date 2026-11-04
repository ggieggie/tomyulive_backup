import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { JoinSection } from "@/components/JoinSection";
import { Phrases } from "@/components/Phrases";
import { Icon } from "@/components/Icon";
import { supports } from "@/lib/site";
export const metadata: Metadata = { title: "トミュライブとは" };
export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="トミュライブとは"
        eyebrow="About us"
        title={"あなたらしさを、\n一緒に育てる。"}
        subtitle="Pocochaに特化したライバー事務所、トミュライブです。"
      />
      <section className="section">
        <div className="wrap message">
          <div>
            <p className="eyebrow">Message</p>
            <h2 className="section-title">
              <Phrases text={"特別な才能より、\nあなたの|「好き」から。"} />
            </h2>
          </div>
          <div className="message-body">
            <p>
              おしゃべりが好き。歌うことが好き。誰かとつながる時間が好き。ライブ配信のはじまりは、そんな身近な気持ちでいいと、私たちは考えています。
            </p>
            <p>
              トミュライブは、Pocochaの配信活動をサポートするライバー事務所です。配信アプリの仕組みに合わせた戦略と、ひとりひとりに寄り添うマネジメントで、あなたらしい活動を応援します。
            </p>
            <h3>
              <Phrases text="自分のペースで、|次のステージへ。" />
            </h3>
            <p>
              初配信の準備も、ランクアップに向けた工夫も、ひとりで抱えなくて大丈夫。目標や生活スタイルを聞きながら、担当マネージャーと活動の進め方を考えていきます。
            </p>
          </div>
        </div>
      </section>
      <section className="section is-tint">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Support</p>
              <h2 className="section-title">
                <Phrases text={"あなたの挑戦に、\nこんなサポートを。"} />
              </h2>
            </div>
            <Link className="text-link" href="/benefits">
              サポート・特典をすべて見る
              <Icon name="arrow" />
            </Link>
          </div>
          <ol className="value-list">
            {supports.map((s) => (
              <li className={`is-${s.color}`} key={s.title}>
                <span className="value-icon">
                  <Icon name={s.icon} />
                </span>
                <div>
                  <p className="support-tag">{s.tag}</p>
                  <h3>
                    <Phrases text={s.title} />
                  </h3>
                </div>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <JoinSection />
    </>
  );
}
