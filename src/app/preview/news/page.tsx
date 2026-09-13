import { notFound } from 'next/navigation';
import Preview from '@/components/Preview';

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

  return <Preview previewType="news" contentId={contentId} draftKey={draftKey} />;
}
