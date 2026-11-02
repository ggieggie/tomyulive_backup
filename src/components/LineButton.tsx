import { LINE_URL } from "@/lib/site";
import { Icon } from "./Icon";
export function LineButton({
  children = "LINEで気軽に相談する",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`line-button ${className}`}
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="line-mark" aria-hidden="true">
        LINE
      </span>
      <span>{children}</span>
      <Icon name="arrow" />
      <span className="visually-hidden">（新しいタブで開きます）</span>
    </a>
  );
}
