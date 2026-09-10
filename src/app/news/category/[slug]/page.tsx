import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import NewsCard from '@/components/card/NewsCard';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import Pager from '@/components/pager/Pager';
import TermList from '@/components/term/TermList';
import { getAllPost, getPostList } from '@/lib/microcms';
import type { CategoryItem } from '@/types/Category';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from '../../page.module.scss';

const PER_PAGE = 9;

type NewsCategoryProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const categories = await getAllPost<CategoryItem>('category', {
    fields: 'slug',
  });

  return categories.map(category => ({ slug: category.slug }));
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
    PER_PAGE,
    1,
    {
      orders: '-publishedAt',
      filters: `category[equals]${category.id}`,
    },
  );

  const totalPages = Math.ceil(totalCount / PER_PAGE);

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
        <Heading label={category.name} />
      </Hero>

      <Content>
        <TermList currentSlug={category.slug} />

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
