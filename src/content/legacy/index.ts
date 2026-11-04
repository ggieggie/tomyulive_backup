// 旧サイト（WordPress）から移したページ。本文は同じフォルダの <slug>.html（scripts で変換したもの）
export type LegacyPage = {
  slug: string;
  path: string;
  // column: 一般公開のコラム / member: 所属ライバー向け / staff: スタッフ用の資料
  kind: "column" | "member" | "staff";
  title: string;
  heading: string;
  label: string;
  description: string;
  published: string;
  modified: string;
  noindex?: boolean;
};
export const legacyPages: LegacyPage[] = [
  {
    slug: "talk",
    path: "/talk/",
    kind: "staff",
    title: "ライバー様ご提案資料（2024年10月1日〜）",
    heading: "ライバー様ご提案資料|（2024年10月1日〜）",
    label: "ライバー様ご提案資料",
    description:
      "本ページは、ライバー様へご提案する内容を記事形式にした資料です。",
    published: "2024-10-06",
    modified: "2025-05-16",
    noindex: true,
  },
  {
    slug: "before-streaming",
    path: "/before-streaming/",
    kind: "staff",
    title: "所属済み、初配信前のライバー面談（2024年12月1日〜）",
    heading: "所属済み、|初配信前の|ライバー面談|（2024年12月1日〜）",
    label: "初配信前のライバー面談",
    description:
      "本ページは、初配信前のライバーさんとの面談でお話しする内容を記事形式にした資料です。",
    published: "2024-09-29",
    modified: "2024-12-28",
    noindex: true,
  },
  {
    slug: "contract",
    path: "/contract/",
    kind: "member",
    title: "電子契約書の締結方法（2024年10月1日〜）",
    heading: "電子契約書の|締結方法|（2024年10月1日〜）",
    label: "電子契約書の締結方法",
    description:
      "弊社では、「マネーフォワード クラウド契約」というサービスを使用し、ライバー様とオンラインで契約書を締結させていただいております。",
    published: "2024-09-29",
    modified: "2024-10-13",
    noindex: true,
  },
  {
    slug: "rental",
    path: "/rental/",
    kind: "staff",
    title: "端末貸与手続き",
    heading: "端末貸与手続き",
    label: "端末貸与手続き",
    description:
      "本記事は、ライバー様へ配信端末を貸与する際の手続きと案内内容を記載したものです。",
    published: "2024-12-22",
    modified: "2024-12-22",
    noindex: true,
  },
  {
    slug: "manual-list",
    path: "/manual-list/",
    kind: "staff",
    title: "電話対応マニュアル総括",
    heading: "電話対応|マニュアル総括",
    label: "電話対応マニュアル総括",
    description: "電話・インタビューには次の種類がございます。",
    published: "2024-10-01",
    modified: "2024-10-13",
    noindex: true,
  },
  {
    slug: "column-348",
    path: "/column/348/",
    kind: "column",
    title: "ライバーの確定申告・請求書の発行手続き",
    heading: "ライバーの確定申告・|請求書の発行手続き",
    label: "確定申告・請求書の手続き",
    description:
      "この記事は、tomyu-live事務所所属のライバー様向けに公開しています。",
    published: "2024-11-17",
    modified: "2024-11-17",
  },
  {
    slug: "column-511",
    path: "/column/511/",
    kind: "column",
    title: "【2024年12月1日〜】ライバー報酬の前借り制度を開始します。",
    heading: "【2024年12月1日〜】|ライバー報酬の|前借り制度を|開始します。",
    label: "ライバー報酬の前借り制度",
    description:
      "ライバー事務所tomyu-liveでは、2024年12月1日より、ライバー様が獲得された報酬を予定日よりも早くお振込する、前借り制度を導入します。",
    published: "2024-11-30",
    modified: "2024-11-30",
  },
  {
    slug: "column-614",
    path: "/column/614/",
    kind: "column",
    title: "ポコチャライバーが初配信前に準備すること",
    heading: "ポコチャライバーが|初配信前に|準備すること",
    label: "初配信前に準備すること",
    description:
      "ポコチャ配信で成功するための要素はある程度解明されています。本記事では、当事務所が把握している初配信に関するノウハウをできる限り記載しました。",
    published: "2025-02-04",
    modified: "2025-05-01",
  },
  {
    slug: "column-620",
    path: "/column/620/",
    kind: "column",
    title: "ポコチャ配信でアイテムがたくさん飛ぶようになるために考えること",
    heading:
      "ポコチャ配信で|アイテムがたくさん|飛ぶようになるために|考えること",
    label: "アイテムがたくさん飛ぶために",
    description:
      "本記事では、ポコチャ配信で成功するために必要な考え方等を記載しています。",
    published: "2025-02-04",
    modified: "2025-02-14",
  },
  {
    slug: "column-657",
    path: "/column/657/",
    kind: "column",
    title: "ポコチャの電話番号認証を0円で突破する方法",
    heading: "ポコチャの|電話番号認証を|0円で突破する方法",
    label: "電話番号認証を0円で突破する方法",
    description:
      "povoを使用し、SIMの利用目的をSMSだけに限定することで負担額0円でSMS認証を突破できます。",
    published: "2025-02-23",
    modified: "2025-02-23",
  },
];
export function getLegacyPage(slug: string) {
  const page = legacyPages.find((p) => p.slug === slug);
  if (!page) throw new Error(`unknown legacy page: ${slug}`);
  return page;
}
// 新しい順（同じ日は記事番号の大きい方が先）
export const columns = legacyPages
  .filter((p) => p.kind === "column")
  .sort(
    (a, b) =>
      b.published.localeCompare(a.published) || b.path.localeCompare(a.path),
  );
