import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import img2 from '@/assets/common/img_2.jpg';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Content from '@/components/layout/Content';
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
              <p className={styles.tag}>{post.category.name}</p>
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
        <aside className={styles.sideBar}>
          <Link href="/reservation/" className={styles.banner}>
            <Image
              src={img2}
              alt="予約フォームバナー"
              width={300}
              height={183}
              loading="lazy"
            />
          </Link>
          {recentPosts.length > 0 && (
            <div className={styles.recommend}>
              <h2 className={styles.label}>最近の投稿</h2>
              <ul className={styles.list}>
                {recentPosts.map(recent => (
                  <li className={styles.item} key={recent.id}>
                    <Link href={`/news/${recent.id}/`} className={styles.link}>
                      <time className={styles.date}>
                        {formatDate(
                          recent.publishedAt ?? recent.createdAt,
                          'YYYY/MM/DD',
                        )}
                      </time>
                      <p className={styles.title}>{recent.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <Breadcrumb items={BreadcrumbItems} />
    </Content>
  );
}
