import '@/scss/reset.scss';
import '@/scss/global.scss';
import SiteEffects from '@/app/_components/SiteEffects';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
