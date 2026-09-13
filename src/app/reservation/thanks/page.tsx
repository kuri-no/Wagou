import Image from 'next/image';
import icon1 from '@/assets/common/icon_1.png';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import styles from './page.module.scss';

const BreadcrumbItems = [
  {
    href: '/',
    text: 'トップページ',
  },
  {
    href: '/reservation/',
    text: 'ご予約フォーム',
  },
  {
    href: '/reservation/thanks/',
    text: 'ご予約完了ページ',
  },
];

export default function Thanks() {
  return (
    <>
      <Hero>
        <Heading label="ご予約フォーム" tagName="h1" />
      </Hero>

      <Content variant="tight">
        <div className={styles.thanks}>
          <p className={styles.label}>ご予約申請完了いたしました。</p>
          <div className={styles.detail}>
            <p>
              ご入力いただいたメールアドレスに自動返信にて<br />
              お問い合わせ内容をお送りしております。
            </p>
            <p>
              3日以内にご返信させて頂きますので、<br />
              今しばらくお待ちくださいませ。
            </p>
          </div>
          <div className={styles.icon}>
            <Image src={icon1} alt="" width={200} height={131} loading="lazy" />
          </div>
        </div>

        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
