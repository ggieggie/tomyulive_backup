import { faqs } from "@/lib/site";
export function FaqList({ limit }: { limit?: number }) {
  return (
    <div className="faq-list">
      {faqs.slice(0, limit).map((f) => (
        <details key={f.q}>
          <summary>
            <span className="question-mark">Q</span>
            <span>{f.q}</span>
            <span className="faq-plus" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <span>A</span>
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
