import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LineButton } from "@/components/LineButton";
import { steps } from "@/lib/site";
export const metadata: Metadata = { title: "配信のはじめ方" };
export default function FlowPage() {
  return (
    <>
      <PageHeader
        title="はじめての配信まで、一緒に。"
        subtitle="LINEで相談して、納得してからスタート。あなたの一歩をサポートします。"
      />
      <section className="section">
        <div className="prose-content">
          <ol className="flow-list">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-number">0{i + 1}</span>
                <div>
                  <h2>{s.title}</h2>
                  <p>{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="center-action">
            <p>
              話を聞いてみたい、だけでも大丈夫。
              <br />
              まずは公式LINEで、気軽にご相談ください。
            </p>
            <LineButton>LINEで最初の一歩を</LineButton>
          </div>
        </div>
      </section>
    </>
  );
}
