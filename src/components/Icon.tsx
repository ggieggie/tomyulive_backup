const outlines: Record<string, React.ReactNode> = {
  chat: (
    <>
      <path d="M38 29a16 16 0 0 0 2-8C40 11 32 5 23 5S6 11 6 21c0 8 6 15 15 16l-1 7 10-8" />
      <path d="M16 20h.01M24 20h.01M32 20h.01" strokeWidth="4" />
    </>
  ),
  gift: (
    <>
      <path d="M7 23h34v-9H7zM11 23v19h26V23M24 14v28" />
      <path d="M24 14S10 16 13 7s11 7 11 7Zm0 0S38 16 35 7s-11 7-11 7Z" />
    </>
  ),
  spark: (
    <>
      <path d="m24 5 5 14 14 5-14 5-5 14-5-14-14-5 14-5Z" />
      <path d="m39 4 1.5 4.5L45 10l-4.5 1.5L39 16l-1.5-4.5L33 10l4.5-1.5Z" />
    </>
  ),
  mic: (
    <>
      <rect x="17" y="5" width="14" height="24" rx="7" />
      <path d="M11 22a13 13 0 0 0 26 0M24 35v8M17 43h14" />
    </>
  ),
  yen: (
    <>
      <circle cx="24" cy="24" r="19" />
      <path d="m17 13 7 11 7-11M24 24v12M18 26h12M18 31h12" />
    </>
  ),
  rankup: (
    <>
      <path d="M6 42h36" />
      <rect x="9" y="29" width="8" height="13" rx="1.5" />
      <rect x="20" y="20" width="8" height="22" rx="1.5" />
      <rect x="31" y="10" width="8" height="32" rx="1.5" />
    </>
  ),
  transfer: <path d="M8 17h31m-8-8 8 8-8 8M40 31H9m8-8-8 8 8 8" />,
};
export function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  if (name === "arrow")
    return (
      <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 12h15m-6-6 6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "check")
    return (
      <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.14" />
        <path
          d="m7.5 12.3 3 3 6-6.3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (name === "heart")
    return (
      <svg
        className={className}
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 21S2 15 2 8.5C2 2.8 9 1 12 6c3-5 10-3.2 10 2.5C22 15 12 21 12 21Z" />
      </svg>
    );
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {outlines[name] ?? outlines.spark}
    </svg>
  );
}
