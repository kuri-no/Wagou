import { notFound, redirect } from 'next/navigation';
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
import styles from '../../../../page.module.scss';

const PER_PAGE = 9;

type NewsCategoryPageProps = {
  params: Promise<{ slug: string; page: string }>;
};

export async function generateStaticParams() {
  const categories = await getAllPost<CategoryItem>('category', {
    fields: 'id,slug',
  });

  const params: { slug: string; page: string }[] = [];

  for (const category of categories) {
    const { totalCount } = await getPostList<NewsItem>('news', PER_PAGE, 1, {
      filters: `category[equals]${category.id}`,
    });
    const totalPages = Math.ceil(totalCount / PER_PAGE);

    for (let page = 2; page <= totalPages; page++) {
      params.push({ slug: category.slug, page: String(page) });
    }
  }

  return params;
}

export default async function NewsCategoryPage({
  params,
}: NewsCategoryPageProps) {
  const { slug, page } = await params;
  const currentPage = Number(page);

  if (!Number.isInteger(currentPage) || currentPage < 1) {
    notFound();
  }
  if (currentPage === 1) {
    redirect(`/news/category/${slug}/`);
  }

  const [category] = await getAllPost<CategoryItem>('category', {
    filters: `slug[equals]${slug}`,
  });

  if (!category) {
    notFound();
  }

  const { contents: newsList, totalCount } = await getPostList<NewsItem>(
    'news',
    PER_PAGE,
    currentPage,
    {
      orders: '-publishedAt',
      filters: `category[equals]${category.id}`,
    },
  );

  if (newsList.length === 0) {
    notFound();
  }

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
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={`/news/category/${category.slug}`}
        />

        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
