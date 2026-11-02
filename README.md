# tomyu-live

Pocochaに特化したライバー事務所「トミュライブ（tomyu-live）」のリニューアルサイトです。

## 起動

```sh
cd /Users/veggie/Desktop/tomyulive
npm install
npm run dev
```

http://localhost:3000 で確認できます。依存関係がインストール済みなら `npm install` は不要です。

## 本番用ビルド

```sh
npm run build
npm run start
```

日本語は Zen Kaku Gothic New、英字のアクセントは Barlow Condensed を同梱して使用します。ビルド時・閲覧時ともに外部のフォント配信へのアクセスは不要です。ライセンスは `public/fonts/` に同梱しています。

## 編集する場所

- `src/app/page.tsx`: トップページ
- `src/app/globals.css`: フォント、カラー、余白、文字、レスポンシブ表示（スタイルはこの1ファイルにまとめています）
- `src/lib/site.ts`: 公式LINEのURL、黄色い帯の要点、FAQ、サポート内容、所属フロー
- `src/components/`: ヘッダー、フッター、CTAなどの共通部品
- `src/app/`: 事務所紹介・特典・募集・FAQなど、各下層ページ
- `public/images/streamer-hero.png`: 新規生成した配信イメージ写真
- `src/app/column/348/page.tsx`: 旧サイトから移した記事「ライバーの確定申告・請求書の発行手続き」（URL は旧サイトと同じ `/column/348/`）。本文は `src/content/column-348.html`、画像は `public/column/348/`

旧サイトと同じ URL を保つため、URL の末尾は `/` 付きにそろえています（`next.config.ts` の `trailingSlash: true`）。

見出しなどの文言で、`\n` は必ず改行する位置、`|` は幅が足りないときだけ改行してよい位置です（`src/components/Phrases.tsx`）。スマホで単語の途中で折り返さないよう、文言を変えるときは文節の区切りに `|` を入れてください。

## 引き継ぎ

引き継ぎ時点のソースと設定は `/Users/veggie/Desktop/tomyulive_handover_backup/before-codex-20261016.tar.gz` に保管しています。元サイトのバックアップ `/Users/veggie/Desktop/tomyulive_backup` は変更していません。

公式LINEのURLと、報酬還元・マネージャー制・所属フローの情報は元サイトのバックアップを参照しました。現行の制度や規約を更新する場合は、運営側で確認した内容を反映してください。

お問い合わせは元サイトで使われていた公式LINEへ誘導します。送信されないダミーフォームと未接続のログイン画面は、実際に利用できる案内に置き換えています。会員認証、独自の問い合わせ受付サーバーは実装していません。

写真は実在する所属ライバーの紹介ではなく、AI生成の配信イメージです。使用した組み込みimagegenのプロンプトは `docs/image-prompt.txt` に記録しています。
