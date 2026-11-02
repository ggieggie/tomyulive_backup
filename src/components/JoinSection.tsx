import { LineButton } from "./LineButton";
export function JoinSection() {
  return (
    <section className="join-section">
      <div className="join-inner">
        <span className="join-doodle" aria-hidden="true">
          Hello!
        </span>
        <p className="join-intro">ちょっと気になる。その気持ちが、はじまり。</p>
        <h2>
          次にワクワクするのは、
          <br />
          あなたの番。
        </h2>
        <p>
          「私にもできる？」からで大丈夫。
          <br className="mobile-only" />
          まずはLINEで、お話ししませんか。
        </p>
        <LineButton>LINEでライバー診断・相談</LineButton>
        <small>友だち追加でスタート / 相談・初期費用は無料</small>
        <span className="join-star" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}
