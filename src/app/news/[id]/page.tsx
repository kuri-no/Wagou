import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Content from '@/components/layout/Content';
import Article from '@/components/news/Article';
import SideBar from '@/components/news/SideBar';
import { getAllPost, getPostDetail, getPostList } from '@/lib/microcms';
import type { NewsItem } from '@/types/News';
import styles from './page.module.scss';

export const revalidate = 3600;

type NewsDetailProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPost<NewsItem>('news', { fields: 'id' });

  return posts.map(post => ({ id: post.id }));
}

export default async function News({ params }: NewsDetailProps) {
  const { id } = await params;

  const post = await getPostDetail<NewsItem>('news', id);

  if (!post) {
    notFound();
  }

  const { contents: latestPosts } = await getPostList<NewsItem>('news', 6, 1, {
    orders: '-publishedAt',
    fields: 'id,title,publishedAt,createdAt',
  });
  const recentPosts = latestPosts
    .filter(recent => recent.id !== post.id)
    .slice(0, 5);

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
      href: `/news/${post.id}/`,
      text: post.title,
    },
  ];

  return (
    <Content variant="narrow">
      <div className={styles.body}>
        <Article post={post} />

        <SideBar recentPosts={recentPosts} />
      </div>

      <Breadcrumb items={BreadcrumbItems} />
    </Content>
  );
}
