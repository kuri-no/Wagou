import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Content from '@/components/layout/Content';
import SideBar from '@/components/news/SideBar';
import { getAllPost, getPostDetail, getPostList } from '@/lib/microcms';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from './page.module.scss';

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

  const publishedDate = post.publishedAt ?? post.createdAt;

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
      <div className={styles.article}>
        <article className={styles.body}>
          {post.thumbnail && (
            <div className={styles.thumbnail}>
              <Image
                src={post.thumbnail.url}
                alt=""
                width={post.thumbnail.width ?? 600}
                height={post.thumbnail.height ?? 400}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          )}
          <div className={styles.meta}>
            {post.category.name && (
              <Link
                href={`/news/category/${post.category.slug}/`}
                className={styles.tag}
              >
                {post.category.name}
              </Link>
            )}
            <time
              className={styles.date}
              dateTime={formatDate(publishedDate, 'YYYY-MM-DD')}
            >
              {formatDate(publishedDate)}
            </time>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>
        <SideBar recentPosts={recentPosts} />
      </div>

      <Breadcrumb items={BreadcrumbItems} />
    </Content>
  );
}
