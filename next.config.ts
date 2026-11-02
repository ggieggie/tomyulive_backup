import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // 旧サイトと同じく末尾に「/」を付けた URL（例: /column/348/）で表示する
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
    rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } },
  },
};
export default nextConfig;
