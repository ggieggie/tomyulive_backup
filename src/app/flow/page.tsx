import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LineButton } from "@/components/LineButton";
import { Phrases } from "@/components/Phrases";
import { steps } from "@/lib/site";
export const metadata: Metadata = { title: "配信のはじめ方" };
export default function FlowPage() {
  return (
    <>
      <PageHeader
        label="はじめ方"
        eyebrow="How to start"
        title={"はじめての|配信まで、\n一緒に。"}
        subtitle="LINEで相談して、納得してからスタート。|あなたの一歩をサポートします。"
      />
      <section className="section">
        <div className="narrow">
          <ol className="timeline">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="timeline-num">0{i + 1}</span>
                <div>
                  <h2>
                    <Phrases text={s.title} />
                  </h2>
                  <p>{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="cta-panel">
            <p>
              <Phrases
                text={"話を聞いてみたい、|だけでも大丈夫。\nまずは公式LINEで、|気軽にご相談ください。"}
              />
            </p>
            <LineButton>LINEで最初の一歩を</LineButton>
          </div>
        </div>
      </section>
    </>
  );
}
