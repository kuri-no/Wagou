import { M_PLUS_1, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/layout/CtaSection";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const mplus1p = M_PLUS_1({
  weight: ["400", "500", "700", "800"],
  variable: "--font-m-plus-1p",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
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
      <body className={`${mplus1p.variable} ${montserrat.variable}`}>
        <Header />
        {children}
        <CtaSection />
        <Footer />
      </body>
    </html>
  );
}
