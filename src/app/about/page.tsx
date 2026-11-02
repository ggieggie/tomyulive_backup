import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { JoinSection } from "@/components/JoinSection";
import { supports } from "@/lib/site";
import { Icon } from "@/components/Icon";
export const metadata: Metadata = { title: "トミュライブとは" };
export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="あなたらしさを、一緒に育てる。"
        subtitle="Pocochaに特化したライバー事務所、トミュライブです。"
      />
      <section className="section">
        <div className="prose-content">
          <span className="section-sign">Hello, tomyu-live!</span>
          <h2>
            特別な才能より、
            <br />
            あなたの「好き」から。
          </h2>
          <p>
            おしゃべりが好き。歌うことが好き。誰かとつながる時間が好き。ライブ配信のはじまりは、そんな身近な気持ちでいいと、私たちは考えています。
          </p>
          <p>
            トミュライブは、Pocochaの配信活動をサポートするライバー事務所です。配信アプリの仕組みに合わせた戦略と、ひとりひとりに寄り添うマネジメントで、あなたらしい活動を応援します。
          </p>
          <h2>自分のペースで、次のステージへ。</h2>
          <p>
            初配信の準備も、ランクアップに向けた工夫も、ひとりで抱えなくて大丈夫。目標や生活スタイルを聞きながら、担当マネージャーと活動の進め方を考えていきます。
          </p>
        </div>
      </section>
      <section className="support-section">
        <div className="container">
          <div className="section-heading">
            <h2>
              あなたの挑戦に、
              <br />
              こんなサポートを。
            </h2>
          </div>
          <div className="support-grid">
            {supports.map((s) => (
              <article className={`support-card ${s.color}`} key={s.title}>
                <div className="support-icon">
                  <Icon name={s.icon} />
                </div>
                <span className="support-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <JoinSection />
    </>
  );
}
