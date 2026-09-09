import { notFound, redirect } from 'next/navigation';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import NewsCard from '@/components/card/NewsCard';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import Pager from '@/components/pager/Pager';
import { getPostList } from '@/lib/microcms';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from '../../page.module.scss';

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

type NewsPageProps = {
  params: Promise<{ page: string }>;
};

export async function generateStaticParams() {
  const { totalCount } = await getPostList<NewsItem>('news', PER_PAGE, 1);
  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { page } = await params;
  const currentPage = Number(page);

  if (!Number.isInteger(currentPage) || currentPage < 1) {
    notFound();
  }
  if (currentPage === 1) {
    redirect('/news/');
  }

  const { contents: newsList, totalCount } = await getPostList<NewsItem>(
    'news',
    PER_PAGE,
    currentPage,
    { orders: '-publishedAt' },
  );

  if (newsList.length === 0) {
    notFound();
  }

  const totalPages = Math.ceil(totalCount / PER_PAGE);

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

        <Pager
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/news"
        />

        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
