import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: {
    default: "tomyu-live｜あなたらしさが、ライブになる。",
    template: "%s｜tomyu-live",
  },
  description:
    "あなたの好き、おしゃべり、いつもの笑顔が、誰かの楽しみになる。Pococha特化のライバー事務所トミュライブ。未経験からの配信を、担当マネージャーがサポートします。",
  openGraph: {
    title: "tomyu-live｜あなたらしさが、ライブになる。",
    description:
      "Pocochaに特化したライバー事務所。次にワクワクするのは、あなたの番。",
    type: "website",
    locale: "ja_JP",
  },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Gyazo や ColorZilla などの拡張機能が html / body に属性を足すため、この2つだけ属性の違いを警告しない
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/ZenKakuGothicNew-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ZenKakuGothicNew-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body id="top" suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          本文へスキップ
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
