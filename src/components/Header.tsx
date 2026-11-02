"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "./Brand";
import { Icon } from "./Icon";
import { LineButton } from "./LineButton";
const nav = [
  ["/about", "トミュライブとは"],
  ["/benefits", "サポート・特典"],
  ["/flow", "はじめ方"],
  ["/faq", "よくある質問"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {nav.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <LineButton className="is-small header-cta">ライバー募集中</LineButton>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="モバイルナビゲーション"
        >
          {[...nav, ["/recruit", "ライバー募集について"]].map(
            ([href, label]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
                <Icon name="arrow" />
              </Link>
            ),
          )}
          <LineButton />
        </nav>
      )}
    </header>
  );
}
