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
python3 -m http.server 3200 --directory out
```

ビルドすると、公開用の静的な HTML が `out/` に書き出されます（`next.config.ts` の `output: "export"`）。この設定では `npm run start` は使えないため、`out/` をそのまま配信して確認します（http://localhost:3200）。

## 公開

`main` ブランチに入ると、GitHub Actions（`.github/workflows/deploy.yml`）がビルドして、`out/` を GitHub Pages（https://tomyulive.com）に公開します。プルリクエストでは、ビルドが通るかだけを確かめます（公開はしません）。

GitHub のリポジトリの Settings → Pages → Build and deployment → Source は「GitHub Actions」にしておく必要があります。「Deploy from a branch」のままだと、ビルド前のソースがそのまま公開されてしまいます。

旧サイトの画像の URL（`/wp-content/uploads/…`）は、外部から使われていても切れないよう `public/wp-content/uploads/` に残しています。

日本語は Zen Kaku Gothic New、英字のアクセントは Barlow Condensed を同梱して使用します。ビルド時・閲覧時ともに外部のフォント配信へのアクセスは不要です。ライセンスは `public/fonts/` に同梱しています。

## 編集する場所

- `src/app/page.tsx`: トップページ
- `src/app/globals.css`: フォント、カラー、余白、文字、レスポンシブ表示（スタイルはこの1ファイルにまとめています）
- `src/lib/site.ts`: 公式LINEのURL、黄色い帯の要点、FAQ、サポート内容、所属フロー
- `src/components/`: ヘッダー、フッター、CTAなどの共通部品
- `src/app/`: 事務所紹介・特典・募集・FAQなど、各下層ページ
- `public/images/streamer-hero.png`: 新規生成した配信イメージ写真の元画像。サイトでは軽くした `streamer-hero.jpg`（幅960px）を表示
- `src/content/legacy/`: 旧サイト（WordPress）から移した10ページ。タイトルや公開日などは `index.ts`、本文は `<slug>.html`、目次は `<slug>.toc.json`、画像はページと同じ URL の `public/` 以下（例: `public/talk/`）

## 旧サイトから移したページ

旧サイトの URL のまま表示しています。URL の末尾は `/` 付きにそろえています（`next.config.ts` の `trailingSlash: true`）。

| URL | ページ | 種類 |
|---|---|---|
| `/talk/` | ライバー様ご提案資料 | スタッフ用（検索エンジンに出さない） |
| `/before-streaming/` | 所属済み、初配信前のライバー面談 | スタッフ用（検索エンジンに出さない） |
| `/rental/` | 端末貸与手続き | スタッフ用（検索エンジンに出さない） |
| `/manual-list/` | 電話対応マニュアル総括 | スタッフ用（検索エンジンに出さない） |
| `/contract/` | 電子契約書の締結方法 | 所属ライバー向け（検索エンジンに出さない） |
| `/column/348/` ほか4本 | コラム | 一般公開（一覧は `/category/column/`） |

スタッフ用のページは、旧サイトと同じくメニューからはリンクしていません。

本文は `scripts/convert_legacy.py` で旧サイトのバックアップから変換したものです。変換の際に、会社名「株式会社めちゃのび」（旧サイトでは自動の置き換えで「株式会社tomyu-live」と表示）を「トミュタ合同会社」に直し、マネーフォワードへのアフィリエイトのリンクを公式サイトへの直接のリンクにしています。作り直すときは次のように実行します（本文と画像が上書きされます）。

```sh
python3 -I scripts/convert_legacy.py /Users/veggie/Desktop/tomyulive_backup . /tmp/legacy-report.json
```

見出しなどの文言で、`\n` は必ず改行する位置、`|` は幅が足りないときだけ改行してよい位置です（`src/components/Phrases.tsx`）。スマホで単語の途中で折り返さないよう、文言を変えるときは文節の区切りに `|` を入れてください。

## 引き継ぎ

引き継ぎ時点のソースと設定は `/Users/veggie/Desktop/tomyulive_handover_backup/before-codex-20261016.tar.gz` に保管しています。元サイトのバックアップ `/Users/veggie/Desktop/tomyulive_backup` は変更していません。

公式LINEのURLと、報酬還元・マネージャー制・所属フローの情報は元サイトのバックアップを参照しました。現行の制度や規約を更新する場合は、運営側で確認した内容を反映してください。

お問い合わせは元サイトで使われていた公式LINEへ誘導します。送信されないダミーフォームと未接続のログイン画面は、実際に利用できる案内に置き換えています。会員認証、独自の問い合わせ受付サーバーは実装していません。

写真は実在する所属ライバーの紹介ではなく、AI生成の配信イメージです。使用した組み込みimagegenのプロンプトは `docs/image-prompt.txt` に記録しています。
