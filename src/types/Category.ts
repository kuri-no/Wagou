import type { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';

export type CategoryField = {
  name: string;
  slug: string;
};

export type CategoryItem = CategoryField &
  MicroCMSContentId &
  Pick<MicroCMSDate, 'createdAt' | 'publishedAt' | 'updatedAt'>;
