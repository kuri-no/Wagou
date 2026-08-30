import dummy1 from '@/assets/news/dummy_1.jpg';
import dummy2 from '@/assets/news/dummy_2.jpg';
import dummy3 from '@/assets/news/dummy_3.jpg';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import NewsCard from '@/components/card/NewsCard';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import Pager from '@/components/pager/Pager';
import styles from './page.module.scss';

const dummyItems = [
  {
    src: dummy1,
    id: 1,
    title: '日本茶との出会い。',
    date: '2026.08.10',
    category: [
      {
        id: 1,
        name: 'COLUMN',
      },
    ],
  },
  {
    src: dummy2,
    id: 2,
    title: '言葉を超えて、五感で味わいあう。',
    date: '2026.08.20',
    category: [
      {
        id: 2,
        name: 'EVENTS',
      },
    ],
  },
  {
    src: dummy3,
    id: 3,
    title: 'まちの一つとして、ここにあること。お店を始めて芽生えた思い',
    date: '2026.08.30',
    category: [
      {
        id: 3,
        name: 'FARM',
      },
    ],
  },
  {
    src: dummy1,
    id: 4,
    title: '日本茶との出会い。',
    date: '2026.08.10',
    category: [
      {
        id: 1,
        name: 'COLUMN',
      },
    ],
  },
  {
    src: dummy2,
    id: 5,
    title: '言葉を超えて、五感で味わいあう。',
    date: '2026.08.20',
    category: [
      {
        id: 2,
        name: 'EVENTS',
      },
    ],
  },
  {
    src: dummy3,
    id: 6,
    title: 'まちの一つとして、ここにあること。お店を始めて芽生えた思い',
    date: '2026.08.30',
    category: [
      {
        id: 3,
        name: 'FARM',
      },
    ],
  },
  {
    src: dummy1,
    id: 7,
    title: '日本茶との出会い。',
    date: '2026.08.10',
    category: [
      {
        id: 1,
        name: 'COLUMN',
      },
    ],
  },
  {
    src: dummy2,
    id: 8,
    title: '言葉を超えて、五感で味わいあう。',
    date: '2026.08.20',
    category: [
      {
        id: 2,
        name: 'EVENTS',
      },
    ],
  },
  {
    src: dummy3,
    id: 9,
    title: 'まちの一つとして、ここにあること。お店を始めて芽生えた思い',
    date: '2026.08.30',
    category: [
      {
        id: 3,
        name: 'FARM',
      },
    ],
  },
];

const BreadcrumbItems = [
  {
    href: '/',
    text: 'トップページ',
  },
  {
    href: '/news/',
    text: '日々のこと',
  },
];

export default function News() {
  return (
    <>
      <Hero>
        <Heading label="日々のこと" />
      </Hero>

      <Content>
        <div className={styles.archive}>
          {dummyItems.map(item => (
            <NewsCard
              key={item.id}
              src={item.src}
              id={item.id}
              title={item.title}
              date={item.date}
              category={item.category}
            />
          ))}
        </div>

        <Pager />

        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
