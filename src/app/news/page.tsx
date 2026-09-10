import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import NewsCard from '@/components/card/NewsCard';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import Pager from '@/components/pager/Pager';
import TermList from '@/components/term/TermList';
import { getPostList } from '@/lib/microcms';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from './page.module.scss';

const PER_PAGE = 9;

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
    PER_PAGE,
    1,
    { orders: '-publishedAt' },
  );

  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <>
      <Hero>
        <Heading label="日々のこと" />
      </Hero>

      <Content>
        <TermList />

        <div className={styles.archive}>
          {newsList.map(news => (
            <NewsCard
              key={news.id}
              src={news.thumbnail.url}
              id={news.id}
              title={news.title}
              date={formatDate(news.publishedAt ?? news.createdAt)}
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
