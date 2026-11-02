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
      {name === "chat" ? (
        <>
          <path d="M38 29a16 16 0 0 0 2-8C40 11 32 5 23 5S6 11 6 21c0 8 6 15 15 16l-1 7 10-8" />
          <path d="M16 20h.01M24 20h.01M32 20h.01" strokeWidth="4" />
        </>
      ) : name === "gift" ? (
        <>
          <path d="M7 23h34v-9H7zM11 23v19h26V23M24 14v28" />
          <path d="M24 14S10 16 13 7s11 7 11 7Zm0 0S38 16 35 7s-11 7-11 7Z" />
        </>
      ) : (
        <>
          <path d="m24 5 5 14 14 5-14 5-5 14-5-14-14-5 14-5Z" />
          <path d="m39 4 1.5 4.5L45 10l-4.5 1.5L39 16l-1.5-4.5L33 10l4.5-1.5Z" />
        </>
      )}
    </svg>
  );
}
