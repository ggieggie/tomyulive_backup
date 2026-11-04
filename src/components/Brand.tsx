import Link from "next/link";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="tomyu-live ホーム">
      <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="20" />
        <path d="M16 13.2v13.6a1.2 1.2 0 0 0 1.9 1l10-6.8a1.2 1.2 0 0 0 0-2l-10-6.8a1.2 1.2 0 0 0-1.9 1Z" />
      </svg>
      <span>tomyu-live</span>
    </Link>
  );
}
