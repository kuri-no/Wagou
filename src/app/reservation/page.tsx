import Image from 'next/image';
import logoBg from '@/assets/common/logo-bg.png';
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
];

export default function Reservation() {
  return (
    <>
      <Hero>
        <Heading label="ご予約フォーム" />
      </Hero>

      <Content variant="tight">
        <div className={styles.reservation}>
          <div className={styles.bg}>
            <Image src={logoBg} alt="" width={614} height={614} loading="lazy" />
          </div>
        </div>

        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
