import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import NewsCard from '@/components/card/NewsCard';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import Pager from '@/components/pager/Pager';
import { getAllPost } from '@/lib/microcms';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from './page.module.scss';

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

export default async function News() {
  const newsList = await getAllPost<NewsItem>('news', {
    orders: '-publishedAt',
  });

  return (
    <>
      <Hero>
        <Heading label="日々のこと" />
      </Hero>

      <Content>
        <div className={styles.archive}>
          {newsList.map(news => (
            <NewsCard
              key={news.id}
              src={news.thumbnail.url}
              id={news.id}
              title={news.title}
              date={formatDate(news.publishedAt ?? news.createdAt)}
              categoryName={news.category?.name}
            />
          ))}
        </div>

        <Pager />

        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
