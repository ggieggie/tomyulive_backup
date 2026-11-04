import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // GitHub Pages で公開するため、ビルド時に静的な HTML（out/）として書き出す
  output: "export",
  // 静的書き出しでは画像の自動最適化が使えないため、画像はあらかじめ軽くしたものを置く
  images: { unoptimized: true },
  // 旧サイトと同じく末尾に「/」を付けた URL（例: /column/348/）で表示する
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
    rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } },
  },
};
export default nextConfig;
