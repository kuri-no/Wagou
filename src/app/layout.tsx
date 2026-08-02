import { Noto_Serif } from "next/font/google";
import "@/scss/uaplus.scss";
import "@/scss/global.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const notoSerif = Noto_Serif({
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Flow Meister",
    default: "Flow Meister",
  },
  description:
    "直感的な操作性とリアルタイム共有で、業務効率を最大化。情報の断絶をなくし、チーム全員が同じゴールを目指せます。",
  openGraph: {
    title: "Flow Meister",
    description:
      "直感的な操作性とリアルタイム共有で、業務効率を最大化。情報の断絶をなくし、チーム全員が同じゴールを目指せます。",
    images: ["/ogp.jpg"],
    siteName: "Flow Meister",
    url: "/",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${notoSerif.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
