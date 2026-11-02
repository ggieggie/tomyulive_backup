import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LineButton } from "@/components/LineButton";
import { JoinSection } from "@/components/JoinSection";
import { FaqList } from "@/components/FaqList";
import { steps, supports } from "@/lib/site";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span />
              Pocochaで見つける、新しい自分。
            </p>
            <h1>
              あなたらしさが、
              <br />
              <span className="hero-title-finish">
                ライブになる<span className="title-dot">。</span>
                <svg
                  className="title-underline"
                  viewBox="0 0 400 24"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M7 15C102 5 250 5 392 12M24 21C143 12 262 14 370 18" />
                </svg>
              </span>
            </h1>
            <p className="hero-description">
              好きなこと。何気ないおしゃべり。いつもの笑顔。
              <br />
              そのままのあなたが、誰かの楽しみになる。
              <br />
              トミュライブと、新しい毎日をはじめよう。
            </p>
            <div className="hero-action">
              <span className="hand-note">はじめての一歩、応援します！</span>
              <LineButton />
              <p>
                未経験歓迎<span>·</span>相談無料<span>·</span>スマホからスタート
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-circle" />
            <span className="hero-asterisk" aria-hidden="true">
              ✳
            </span>
            <div className="new-badge">
              その「好き」が、<strong>才能かも！</strong>
              <svg viewBox="0 0 54 26" aria-hidden="true">
                <path d="M3 17Q25 1 48 13m-7-9 9 10-13 5" />
              </svg>
            </div>
            <div className="live-frame">
              <Image
                src="/images/streamer-hero.png"
                alt="ヘッドホンをつけて笑顔で配信する女性のイメージ"
                fill
                sizes="(max-width: 760px) 80vw, 450px"
                priority
                className="streamer-photo"
              />
              <div className="live-top">
                <span className="live-tag">
                  <i />
                  LIVE
                </span>
                <span className="live-tomyu">tomyu-live</span>
                <span className="live-close" aria-hidden="true">
                  ×
                </span>
              </div>
              <div className="live-bottom">
                <span>今日も、おしゃべりしよっ。</span>
                <div>
                  <span className="fake-comment">コメントしてみよう</span>
                  <Icon name="heart" />
                </div>
              </div>
            </div>
            <div className="comment-sticker">
              <span className="comment-avatar">☺</span>
              <div>
                <small>はじめまして！</small>
                <strong>今日も会えてうれしい ♡</strong>
              </div>
              <span className="comment-spark" aria-hidden="true">
                ✧
              </span>
            </div>
            <div className="heart-sticker" aria-hidden="true">
              <Icon name="heart" />
              <span>+1</span>
            </div>
            <span className="photo-note">写真は配信イメージです</span>
            <span className="hero-handwriting" aria-hidden="true">
              Be yourself!
            </span>
          </div>
        </div>
        <div className="hero-bottom">
          <span>自分らしく、夢中になれる毎日へ。</span>
          <a href="#about">
            Scroll to discover <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <div className="brand-ribbon" aria-hidden="true">
        <div>
          Let’s go live! <span>✳</span> Just be you. <span>✳</span> Hello, new
          me! <span>✳</span> Let’s go live! <span>✳</span> Just be you.{" "}
          <span>✳</span>
        </div>
      </div>
      <section className="about-section container" id="about">
        <div className="about-title">
          <span className="section-sign">Hello, tomyu-live!</span>
          <h2>
            画面の向こうに、
            <br />
            あなたを待つ人がいる。
          </h2>
          <div className="mini-speech" aria-hidden="true">
            好きな自分で、
            <br />
            会いにいこう。
          </div>
        </div>
        <div className="about-body">
          <p>
            ライバーは、特別な誰かだけのものじゃない。
            <br />
            「話すのが好き」「歌うのが好き」
            <br />
            そんな小さな「好き」が、はじまりでいい。
          </p>
          <p>
            トミュライブは、Pocochaに特化したライバー事務所。
            <br />
            ひとりひとりの個性に寄り添いながら、
            <br />
            あなたらしい配信を、一緒に育てていきます。
          </p>
          <Link className="text-link" href="/about">
            トミュライブについて
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="support-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-sign">We’ve got your back.</span>
              <h2>
                夢中になれるのは、
                <br />
                安心があるから。
              </h2>
            </div>
            <p>
              はじめての不安も、次の目標も。
              <br />
              がんばるあなたの、いちばん近くに。
            </p>
          </div>
          <div className="support-grid">
            {supports.map((s) => (
              <article className={`support-card ${s.color}`} key={s.title}>
                <div className="support-icon">
                  <Icon name={s.icon} />
                  <span aria-hidden="true">✧</span>
                </div>
                <span className="support-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
          <div className="reward-strip">
            <span className="reward-label">がんばりは、あなたへ。</span>
            <p>
              ライバー報酬の還元率
              <strong>
                100<span>%</span>
              </strong>
            </p>
            <Link href="/benefits" className="text-link">
              サポート・特典を見る
              <Icon name="arrow" />
            </Link>
          </div>
          <p className="section-note">
            ※ボーナス・保証には適用条件があります。最新の条件は公式LINEでご確認ください。
          </p>
        </div>
      </section>
      <section className="possibility-section container">
        <div className="possibility-art" aria-hidden="true">
          <div className="ticket">
            <span>YOUR NEXT STAGE</span>
            <strong>
              好きから、
              <br />
              その先へ。
            </strong>
            <i>✳</i>
            <small>One little step. So many possibilities.</small>
          </div>
          <span className="possibility-heart">♡</span>
        </div>
        <div>
          <span className="section-sign">More possibilities.</span>
          <h2>
            いつもの部屋から、
            <br />
            まだ見ぬステージへ。
          </h2>
          <p>
            おしゃべりから生まれたつながりが、
            <br />
            新しい挑戦のきっかけになることも。
            <br />
            Pocochaには、雑誌掲載や広告出演などを目指せる
            <br className="desktop-only" />
            さまざまなイベントがあります。
          </p>
          <p className="section-note">
            ※イベントの開催内容・参加条件は時期により異なります。
            <br />
            出演・入賞を保証するものではありません。
          </p>
          <Link href="/recruit" className="text-link">
            ライバーという選択肢を知る
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="flow-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-sign">Ready, set, live!</span>
              <h2>
                はじまりは、
                <br />
                LINEの「はじめまして」。
              </h2>
            </div>
            <Link href="/flow" className="text-link">
              はじめ方を詳しく
              <Icon name="arrow" />
            </Link>
          </div>
          <ol className="steps-grid">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="home-faq container">
        <div className="faq-heading">
          <span className="section-sign">Any questions?</span>
          <h2>
            気になること、
            <br />
            聞いてみよう。
          </h2>
          <Link href="/faq" className="text-link">
            よくある質問をすべて見る
            <Icon name="arrow" />
          </Link>
        </div>
        <FaqList limit={4} />
      </section>
      <JoinSection />
    </>
  );
}
