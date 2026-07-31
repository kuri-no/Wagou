# WAGOU

Next.jsで制作されているコーポーレートサイトです。
フロントはNext.js、CMSはmicroCMSを連携しています。

## 主な技術スタック

- Next.js
- TypeScript
- GSAP
- SCSS
- microCMS
・Vercel

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
│   ├── assets/         ... 画像やフォント等のアセット
│   ├── components/     ... UIコンポーネント群
│   ├── icons/          ... SVGアイコン
│   ├── layouts/        ... レイアウト
│   ├── libs/            ... ライブラリ・API連携
│   ├── pages/          ... ページルーティング
│   ├── scss/           ... SCSSグローバル・共通スタイル
│   ├── types/          ... 型定義
│   ├── utils/          ... ユーティリティ関数
└── └── middleware.ts   ... Astro middleware設定／ISRキャッシュの設定
```

## スクリプト

- `npm run dev` ... 開発サーバー起動
- `npm run build` ... 本番ビルド
- `npm run icons` ... アイコン変換
- `npm run typed-scss-modules` ... SCSS型生成

## 開発時の注意
