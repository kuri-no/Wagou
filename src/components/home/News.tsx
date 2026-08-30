import Image from 'next/image';
import logoBg from '@/assets/common/logo-bg.png';
import dummy1 from '@/assets/news/dummy_1.jpg';
import dummy2 from '@/assets/news/dummy_2.jpg';
import dummy3 from '@/assets/news/dummy_3.jpg';
import Button from '@/components/button/Button';
import NewsCard from '@/components/card/NewsCard';
import Heading from '@/components/heading/Heading';
import Content from '@/components/layout/Content';
import styles from './News.module.scss';

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
];

export default function News() {
  return (
    <div className={styles.news}>
      <Content>
        <Heading label="日々のこと" />
        <div className={styles.body}>
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
        <Button href="/news/" text="一覧へ" center />
      </Content>
      <div className={styles.bg}>
        <Image src={logoBg} alt="" width={614} height={614} loading="lazy" />
      </div>
    </div>
  );
}
