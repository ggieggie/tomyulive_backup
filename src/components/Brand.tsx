import Link from "next/link";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="tomyu-live ホーム">
      <span className="brand-mark" aria-hidden="true">
        <i />
      </span>
      <span>tomyu-live</span>
    </Link>
  );
}
