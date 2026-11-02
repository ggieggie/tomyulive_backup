import Link from "next/link";
import { Brand } from "./Brand";
import { Icon } from "./Icon";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div>
            <Brand />
            <p className="footer-tagline">その「好き」が、誰かの毎日に。</p>
            <p className="footer-sub">Pocochaに特化したライバー事務所</p>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            <Link href="/about">トミュライブとは</Link>
            <Link href="/benefits">サポート・特典</Link>
            <Link href="/flow">はじめ方</Link>
            <Link href="/faq">よくある質問</Link>
            <Link href="/recruit">ライバー募集</Link>
            <Link href="/contact">お問い合わせ</Link>
            <Link href="/members">所属ライバーの方へ</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <small>© 2026 tomyu-live</small>
          <div className="footer-legal">
            <Link href="/privacy">プライバシーポリシー</Link>
            <Link href="/terms">利用規約</Link>
          </div>
          <a className="to-top" href="#top" aria-label="ページの先頭へ戻る">
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </footer>
  );
}
