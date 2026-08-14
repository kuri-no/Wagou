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

## 開発時の注意
