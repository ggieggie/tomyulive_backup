import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FaqList } from "@/components/FaqList";
import { JoinSection } from "@/components/JoinSection";
export const metadata: Metadata = { title: "よくある質問" };
export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="気になること、聞いてみよう。"
        subtitle="配信や所属について、よくいただくご質問にお答えします。"
      />
      <section className="section">
        <div className="prose-content">
          <FaqList />
        </div>
      </section>
      <JoinSection />
    </>
  );
}
