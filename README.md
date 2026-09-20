# WAGOU

Next.jsで制作されているコーポーレートサイトです。
フロントはNext.js、CMSはmicroCMSを連携しています。

## 主な技術スタック

- Next.js
- TypeScript
- CSS Modules(SCSS)
- GSAP
- SSGForm
- microCMS
- Vercel

## セットアップ

```bash
npm install
```

## 開発サーバー起動

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

## ディレクトリ構成

```
├── .env                ... 環境定数
├── public/             ... 静的ファイル
├── src/
│   ├── app/            ... App Router（ページ・レイアウト・ルーティング）
│   ├── assets/         ... 画像やフォント等のアセット
│   ├── components/     ... UIコンポーネント群
│   ├── hooks/          ... カスタムフック（React再利用ロジック）
│   ├── icons/          ... SVGアイコン
│   ├── lib/            ... ライブラリ・API連携
│   ├── scss/           ... SCSSグローバル・共通スタイル
│   ├── types/          ... 型定義
│   ├── utils/          ... ユーティリティ関数
```

## スクリプト

- `npm run dev` ... 開発サーバー起動
- `npm run build` ... 本番ビルド
- `npm run icons` ... アイコン変換
- `npm run typed-scss-modules` ... SCSS型生成

## レンダリング戦略

- `about`、`reservation`（フォーム）など更新頻度が低いページ ... SSG
- TOP、`news` 配下（一覧・詳細・カテゴリ・ページネーション）
  ... ISR + オンデマンドISR
  - 時間経過型ISR（`revalidate`）を保険にしつつ、microCMSのWebhookを
    トリガーにしたオンデマンドISR（`revalidatePath`/`revalidateTag`）で
    記事の公開・更新・削除を即時反映します。
  - 下書きプレビューは `/preview/news?contentId=...&draftKey=...`
    （microCMS管理画面の「プレビュー」ボタンから直接アクセス）で行います。

## 環境変数

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_TITLE`
- `MICROCMS_API_KEY`
- `MICROCMS_SERVICE_DOMAIN`
- `NEXT_PUBLIC_SSG_FORM`
- `MICROCMS_BYPASS_TOKEN`
- `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD`（任意。両方設定するとサイト
  全体にBasic認証がかかります）

`NEXT_PUBLIC_` が付く値はブラウザに公開されるため、秘密情報は含めないでください。

## Basic認証

`BASIC_AUTH_USER`・`BASIC_AUTH_PASSWORD` を両方設定すると、サイト全体に
Basic認証がかかります（公開前の作業中アクセス制限用）。ただし以下は
認証対象から除外されます。

- `/api` ... microCMSのWebhook（オンデマンドISR）を通すため
- `/preview` ... microCMSのプレビュー機能を通すため
- `_next/static`・`_next/image`・`favicon.ico` ... 静的アセット

## 開発時の注意

- TypeScript/TSX を優先し、React は関数コンポーネントで実装します。
- クライアント機能が必要なコンポーネントだけに `'use client'` を付けます。
- import は可能な範囲で `@/` エイリアスを使い、Biome の import 整理に従います。
- 既存 API を不用意に変更せず、props には明示的な型を付けます。
- 内部リンクは `next/link`、最適化対象の画像は原則 `next/image` を使います。
- Biome の設定（スペース 2 個、セミコロンあり、JavaScript/TypeScript は
  シングルクォート、1 行 80 文字）を優先します。
