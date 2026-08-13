import '@/scss/reset.scss';
import '@/scss/global.scss';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
