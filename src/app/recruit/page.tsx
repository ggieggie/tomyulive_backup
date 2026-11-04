import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { JoinSection } from "@/components/JoinSection";
import { Phrases } from "@/components/Phrases";
export const metadata: Metadata = { title: "ライバー募集" };
const rows = [
  ["配信アプリ", "Pococha（ポコチャ）"],
  ["配信経験", "はじめての方も、経験のある方もご相談ください。"],
  ["配信の場所", "ご自宅など、インターネットにつながる配信環境から。"],
  ["初期費用・契約料", "かかりません。"],
  ["報酬・特典", "報酬還元やボーナス制度について、所属前にご説明します。"],
  [
    "活動の進め方",
    "担当マネージャーと、配信スタイルや目標を相談して決めます。",
  ],
  ["応募方法", "公式LINEからライバー診断・ご相談をお申し込みください。"],
];
export default function RecruitPage() {
  return (
    <>
      <PageHeader
        label="ライバー募集"
        eyebrow="Recruit"
        title={"あなたの|「好き」を、\nライブに。"}
        subtitle="おしゃべりも、歌も、あなたらしさも。|トミュライブで、次の一歩を。"
      />
      <section className="section">
        <div className="wrap recruit">
          <div className="recruit-intro">
            <p className="eyebrow">Your story starts here</p>
            <h2 className="section-title">
              <Phrases text={"ライバーという、\n新しい選択肢。"} />
            </h2>
            <p className="lead">
              「ライブ配信に興味がある」「自分の可能性を広げたい」。その気持ちを、まずは聞かせてください。所属のことも、活動のことも、LINEでご案内します。
            </p>
          </div>
          <div>
            <dl className="spec">
              {rows.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="note spec-note">
              ※所属条件・アプリの利用条件・各種制度の適用条件は、ご相談時にご確認ください。他事務所に所属中の方は、現在のご契約状況をお知らせください。
            </p>
          </div>
        </div>
      </section>
      <JoinSection />
    </>
  );
}
