import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LineButton } from "@/components/LineButton";
import { JoinSection } from "@/components/JoinSection";
import { FaqList } from "@/components/FaqList";
import { Phrases } from "@/components/Phrases";
import { facts, steps, supports } from "@/lib/site";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <p className="hero-kicker">
              <span className="live-dot" aria-hidden="true" />
              Pococha特化のライバー事務所
            </p>
            <h1 className="hero-title">
              <span className="line">あなたらしさが、</span>
              <span className="line">
                <span className="hero-marker">
                  ライブになる。
                  <svg
                    viewBox="0 0 400 24"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M7 15C102 5 250 5 392 12M24 21C143 12 262 14 370 18" />
                  </svg>
                </span>
              </span>
            </h1>
            <p className="hero-lead">
              <Phrases
                text={
                  "好きなこと。|何気ないおしゃべり。|いつもの笑顔。\nそのままのあなたが、|誰かの楽しみになる。\nトミュライブと、|新しい毎日をはじめよう。"
                }
              />
            </p>
            <div className="hero-actions">
              <LineButton />
              <a className="text-link" href="#support">
                サポート内容を見る
                <Icon name="arrow" />
              </a>
            </div>
            <ul className="hero-points">
              {["未経験歓迎", "相談無料", "スマホからスタート"].map((p) => (
                <li key={p}>
                  <Icon name="check" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-visual">
            <div className="hero-arch">
              <Image
                src="/images/streamer-hero.jpg"
                alt="ヘッドホンをつけて笑顔で配信する女性のイメージ"
                fill
                sizes="(max-width: 960px) 86vw, 460px"
                loading="eager"
                fetchPriority="high"
              />
              <span className="live-badge">
                <span className="live-dot" aria-hidden="true" />
                LIVE
              </span>
            </div>
            <p className="hero-sticker">
              その「好き」が、<strong>才能かも！</strong>
            </p>
            <div className="hero-comment" aria-hidden="true">
              <span className="comment-avatar">
                <Icon name="heart" />
              </span>
              <span>
                <small>はじめまして！</small>
                <strong>今日も会えてうれしい</strong>
              </span>
            </div>
            <p className="photo-note">写真は配信イメージです</p>
          </div>
        </div>
      </section>
      <section className="facts" aria-label="トミュライブの特徴">
        <ul className="wrap facts-list">
          {facts.map((f) => (
            <li key={f.value}>
              <span className="fact-value">
                {f.value}
                {f.unit && <small>{f.unit}</small>}
                {f.mark && <sup>※</sup>}
              </span>
              <span className="fact-label">
                <Phrases text={f.label} />
              </span>
            </li>
          ))}
        </ul>
      </section>
      <p className="wrap note facts-note">
        <Phrases text="※還元の対象となる報酬の範囲やお支払い方法は、|所属前にご説明します。" />
      </p>
      <section className="wrap intro" id="about">
        <div>
          <p className="eyebrow">About us</p>
          <h2 className="section-title">
            <Phrases text={"画面の向こうに、\nあなたを|待つ人がいる。"} />
          </h2>
        </div>
        <div className="intro-body">
          <p className="lead">ライバーは、特別な誰かだけのものじゃない。</p>
          <ul className="like-tags" aria-label="はじまりの「好き」の例">
            <li>話すのが好き</li>
            <li>歌うのが好き</li>
            <li>誰かとつながるのが好き</li>
          </ul>
          <p className="lead">そんな小さな「好き」が、はじまりでいい。</p>
          <p>
            トミュライブは、Pocochaに特化したライバー事務所。ひとりひとりの個性に寄り添いながら、あなたらしい配信を、一緒に育てていきます。
          </p>
          <Link className="text-link" href="/about">
            トミュライブについて
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="support" id="support">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Support</p>
              <h2 className="section-title">
                <Phrases text={"夢中になれるのは、\n安心があるから。"} />
              </h2>
            </div>
            <p className="lead">
              <Phrases
                text={"はじめての不安も、|次の目標も。\nがんばるあなたの、|いちばん近くに。"}
              />
            </p>
          </div>
          <ol className="support-list">
            {supports.map((s, i) => (
              <li className={`support-card is-${s.color}`} key={s.title}>
                <div className="support-card-top">
                  <span className="support-num">0{i + 1}</span>
                  <Icon name={s.icon} />
                </div>
                <div className="support-card-body">
                  <p className="support-tag">{s.tag}</p>
                  <h3>
                    <Phrases text={s.title} />
                  </h3>
                  <p>{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="support-foot">
            <p className="note">
              <Phrases text="※ボーナス・保証には適用条件があります。|最新の条件は公式LINEでご確認ください。" />
            </p>
            <Link className="text-link" href="/benefits">
              サポート・特典をすべて見る
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <section className="wrap stage">
        <div className="stage-art" aria-hidden="true">
          <div className="ticket">
            <span className="ticket-label">YOUR NEXT STAGE</span>
            <strong>
              <Phrases text={"好きから、\nその先へ。"} />
            </strong>
            <small>One little step. So many possibilities.</small>
            <Icon name="spark" className="ticket-spark" />
          </div>
        </div>
        <div className="stage-copy">
          <p className="eyebrow">Your stage</p>
          <h2 className="section-title">
            <Phrases text={"いつもの部屋から、\nまだ見ぬ|ステージへ。"} />
          </h2>
          <p className="lead">
            <Phrases
              text={
                "おしゃべりから生まれたつながりが、|新しい挑戦のきっかけになることも。\nPocochaには、|雑誌掲載や広告出演などを目指せる|さまざまなイベントがあります。"
              }
            />
          </p>
          <p className="note">
            <Phrases text="※イベントの開催内容・参加条件は時期により異なります。|出演・入賞を保証するものではありません。" />
          </p>
          <Link className="text-link" href="/recruit">
            ライバーという選択肢を知る
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="start-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">How to start</p>
              <h2 className="section-title">
                <Phrases text={"はじまりは、\nLINEの|「はじめまして」。"} />
              </h2>
            </div>
            <Link className="text-link" href="/flow">
              はじめ方を詳しく
              <Icon name="arrow" />
            </Link>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-num">0{i + 1}</span>
                <h3>
                  <Phrases text={s.title} />
                </h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="wrap faq-preview">
        <div className="faq-head">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">
            <Phrases text={"気になること、\n聞いてみよう。"} />
          </h2>
          <Link className="text-link" href="/faq">
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
