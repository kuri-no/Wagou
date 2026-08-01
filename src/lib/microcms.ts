import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const getPostDetail = async <T>(
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  try {
    return await client.getListDetail<T>({
      endpoint,
      contentId,
      queries,
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes('404')) {
      return null;
    }
    throw error;
  }
};

export const getAllPost = async <T>(
  endpoint: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getAllContents<T>({
    endpoint,
    queries,
  });
};

const defaultPerPage = 10;

export const getPostList = async <T>(
  endpoint: string,
  limit: number,
  page?: number,
  queries?: Omit<MicroCMSQueries, 'limit' | 'offset'>,
) => {
  const pageNum = limit ? limit : defaultPerPage;

  return await client.getList<T>({
    endpoint,
    queries: {
      limit: pageNum,
      offset: page ? (page - 1) * pageNum : 0,
      ...queries,
    },
  });
};
