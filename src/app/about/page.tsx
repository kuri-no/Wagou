import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';

// import styles from './page.module.scss';

const BreadcrumbItems = [
  {
    href: '/',
    text: 'トップページ',
  },
  {
    href: '/about/',
    text: '和合について',
  },
];

export default function About() {
  return (
    <>
      <Hero>
        <Heading label="和合について" />
      </Hero>

      <Content>
        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
