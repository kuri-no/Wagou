import type { Metadata } from 'next';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import Card from '@/components/news/Card';
import Pager from '@/components/news/Pager';
import TermList from '@/components/news/TermList';
import { getPostList } from '@/lib/microcms';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from './page.module.scss';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: '日々のこと',
  description: '茶舗 和合の日々の出来事をお届けする、お知らせ一覧ページです。',
};

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
  const { contents: newsList, totalCount } = await getPostList<NewsItem>(
    'news',
    9,
    1,
    { orders: '-publishedAt' },
  );

  const totalPages = Math.ceil(totalCount / 9);

  return (
    <>
      <Hero>
        <Heading label="日々のこと" tagName="h1" />
      </Hero>

      <Content>
        <TermList />

        <div className={styles.archive}>
          {newsList.map(news => (
            <Card
              key={news.id}
              src={news.thumbnail.url}
              id={news.id}
              title={news.title}
              date={formatDate(news.publishedAt ?? news.createdAt)}
              dateTime={formatDate(
                news.publishedAt ?? news.createdAt,
                'YYYY-MM-DD',
              )}
              category={news.category.name}
            />
          ))}
        </div>

        <Pager currentPage={1} totalPages={totalPages} basePath="/news" />

        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
