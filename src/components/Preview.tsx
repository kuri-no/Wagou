import { notFound } from 'next/navigation';
import Content from '@/components/layout/Content';
import Article from '@/components/news/Article';
import { getPostDetail } from '@/lib/microcms';
import type { NewsItem } from '@/types/News';

type PreviewProps = {
  previewType: 'news';
  contentId: string;
  draftKey: string;
};

export default async function Preview({
  previewType,
  contentId,
  draftKey,
}: PreviewProps) {
  const post = await getPostDetail<NewsItem>(previewType, contentId, {
    draftKey,
  });

  if (!post) {
    notFound();
  }

  return (
    <Content variant="narrow">
      <Article post={post} />
    </Content>
  );
}
