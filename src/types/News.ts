import type { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';

export type NewsItemField = {
  title: string;
  body: string;
};

export type NewsItem = NewsItemField &
  MicroCMSContentId &
  Pick<MicroCMSDate, 'createdAt' | 'publishedAt' | 'updatedAt'>;
