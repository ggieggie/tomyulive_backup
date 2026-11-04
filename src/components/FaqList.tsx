import { faqs } from "@/lib/site";
export function FaqList({ limit }: { limit?: number }) {
  return (
    <div className="faq-list">
      {faqs.slice(0, limit).map((f) => (
        <details className="faq-item" key={f.q}>
          <summary>
            <span className="faq-q" aria-hidden="true">
              Q
            </span>
            <span>{f.q}</span>
            <span className="faq-toggle" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <span className="faq-a" aria-hidden="true">
              A
            </span>
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
