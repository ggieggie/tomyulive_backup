import { LineButton } from "./LineButton";
import { Phrases } from "./Phrases";
export function JoinSection() {
  return (
    <section className="join">
      <div className="join-card">
        <p className="join-kicker">
          <Phrases text="ちょっと気になる。|その気持ちが、はじまり。" />
        </p>
        <h2>
          <Phrases text="次にワクワク|するのは、" />
          <span className="line">
            <span className="join-marker">
              あなたの番。
              <svg
                viewBox="0 0 400 24"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M7 15C102 5 250 5 392 12M24 21C143 12 262 14 370 18" />
              </svg>
            </span>
          </span>
        </h2>
        <p>
          <Phrases text="「私にもできる？」からで大丈夫。|まずはLINEで、お話ししませんか。" />
        </p>
        <LineButton className="is-light">LINEでライバー診断・相談</LineButton>
        <small>友だち追加でスタート／相談・初期費用は無料</small>
      </div>
    </section>
  );
}
