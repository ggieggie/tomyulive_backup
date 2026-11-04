// 「\n」で必ず改行し、「|」は幅が足りないときだけ改行してよい位置にする（単語の途中で折り返さないため）
export function Phrases({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span className="line" key={i}>
          {line.split("|").map((seg, j) => (
            <span className="seg" key={j}>
              {seg}
            </span>
          ))}
        </span>
      ))}
    </>
  );
}
