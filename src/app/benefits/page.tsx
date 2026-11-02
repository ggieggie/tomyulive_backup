import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { JoinSection } from "@/components/JoinSection";
import { Icon } from "@/components/Icon";
export const metadata: Metadata = { title: "サポート・特典" };
const benefits = [
  {
    icon: "chat",
    title: "担当マネージャー制",
    text: "配信スタイルや目標を相談しながら、活動を進められます。はじめての配信から、次のチャレンジまで伴走します。",
  },
  {
    icon: "spark",
    title: "Pocochaに特化した戦略",
    text: "アプリの仕組みや配信の状況を踏まえて、取り組み方をご提案。次に何をするかを、一緒に考えます。",
  },
  {
    icon: "gift",
    title: "ライバー報酬100%還元",
    text: "ライバーのみなさんへ、配信報酬を100%還元。報酬の対象範囲やお支払いについては、所属前にご確認ください。",
  },
  {
    icon: "gift",
    title: "ランクアップのボーナス",
    text: "目標の達成を応援するボーナス制度があります。対象ランクや達成期限など、適用条件は公式LINEでご案内します。",
  },
  {
    icon: "spark",
    title: "経験者の移籍相談",
    text: "他サービスでの配信経験がある方もご相談ください。移籍ボーナスや保証の対象になるか、活動状況に合わせてご説明します。",
  },
  {
    icon: "chat",
    title: "配信準備のサポート",
    text: "配信環境やアプリの使い方など、気になることを相談できます。必要な準備を、担当マネージャーと確認しましょう。",
  },
];
export default function BenefitsPage() {
  return (
    <>
      <PageHeader
        title="夢中になれる、サポートを。"
        subtitle="はじめての不安から次の目標まで。活動を続けるための安心を、一緒に。"
      />
      <section className="section">
        <div className="container">
          <div className="content-grid">
            {benefits.map((b) => (
              <article className="content-panel" key={b.title}>
                <div className="support-icon">
                  <Icon name={b.icon} />
                </div>
                <h2>{b.title}</h2>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
          <p className="section-note">
            ※各種ボーナス・保証には適用条件があります。金額、対象条件、支給時期など、最新の制度内容は公式LINEでご確認ください。
          </p>
        </div>
      </section>
      <JoinSection />
    </>
  );
}
