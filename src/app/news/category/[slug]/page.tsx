import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import Card from '@/components/news/Card';
import Pager from '@/components/news/Pager';
import TermList from '@/components/news/TermList';
import { getAllPost, getPostList } from '@/lib/microcms';
import type { CategoryItem } from '@/types/Category';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from '../../page.module.scss';

export const revalidate = 3600;

type NewsCategoryProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const categories = await getAllPost<CategoryItem>('category', {
    fields: 'slug',
  });

  return categories.map(category => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: NewsCategoryProps): Promise<Metadata> {
  const { slug } = await params;

  const [category] = await getAllPost<CategoryItem>('category', {
    filters: `slug[equals]${slug}`,
  });

  if (!category) {
    return {};
  }

  return {
    title: `${category.name}の記事一覧`,
    description: `茶舗 和合の日々の出来事から「${category.name}」に関する記事をまとめた一覧ページです。`,
  };
}

export default async function NewsCategory({ params }: NewsCategoryProps) {
  const { slug } = await params;

  const [category] = await getAllPost<CategoryItem>('category', {
    filters: `slug[equals]${slug}`,
  });

  if (!category) {
    notFound();
  }

  const { contents: newsList, totalCount } = await getPostList<NewsItem>(
    'news',
    9,
    1,
    {
      orders: '-publishedAt',
      filters: `category[equals]${category.id}`,
    },
  );

  const totalPages = Math.ceil(totalCount / 9);

  const BreadcrumbItems = [
    {
      href: '/',
      text: 'トップページ',
    },
    {
      href: '/news/',
      text: '日々のこと',
    },
    {
      href: `/news/category/${category.slug}/`,
      text: category.name,
    },
  ];

  return (
    <>
      <Hero>
        <Heading label={category.name} tagName="h1" />
      </Hero>

      <Content>
        <TermList currentSlug={category.slug} />

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

        <Pager
          currentPage={1}
          totalPages={totalPages}
          basePath={`/news/category/${category.slug}`}
        />

        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
