import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import '@/scss/reset.scss';
import '@/scss/global.scss';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/layout/Main';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const SITE_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE;

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '700'],
  variable: '--font-base',
  subsets: ['latin'],
});

const notoSansJP = Noto_Sans_JP({
  weight: ['700'],
  variable: '--font-notosan',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description:
    '茶舗 和合は、真菰・米・お茶の栽培から手がける日本茶専門店です。旨みたっぷりの煎茶や玉露、まこも茶、和菓子など、心とからだを調えるひとときをお届けします。',
  openGraph: {
    title: SITE_TITLE,
    description:
      '茶舗 和合は、真菰・米・お茶の栽培から手がける日本茶専門店です。旨みたっぷりの煎茶や玉露、まこも茶、和菓子など、心とからだを調えるひとときをお届けします。',
    url: '/',
    siteName: SITE_TITLE,
    images: [{ url: '/ogp.png', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} ${notoSansJP.variable}`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
