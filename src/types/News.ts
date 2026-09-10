import type {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
} from 'microcms-js-sdk';
import type { CategoryItem } from '@/types/Category';

export type NewsItemField = {
  title: string;
  body: string;
  thumbnail: MicroCMSImage;
  category: CategoryItem;
};

export type NewsItem = NewsItemField &
  MicroCMSContentId &
  Pick<MicroCMSDate, 'createdAt' | 'publishedAt' | 'updatedAt'>;
