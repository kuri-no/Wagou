import { notFound } from 'next/navigation';
import Content from '@/components/layout/Content';
import Article from '@/components/news/Article';
import SideBar from '@/components/news/SideBar';
import { getPostDetail, getPostList } from '@/lib/microcms';
import type { NewsItem } from '@/types/News';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

type PreviewNewsProps = {
  searchParams: Promise<{ contentId?: string; draftKey?: string }>;
};

export default async function PreviewNews({
  searchParams,
}: PreviewNewsProps) {
  const { contentId, draftKey } = await searchParams;

  if (!contentId || !draftKey) {
    notFound();
  }

  const post = await getPostDetail<NewsItem>('news', contentId, {
    draftKey,
  });

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

  return (
    <Content variant="narrow">
      <div className={styles.body}>
        <Article post={post} />

        <SideBar recentPosts={recentPosts} />
      </div>
    </Content>
  );
}
