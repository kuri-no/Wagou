import Image from 'next/image';
import logoBg from '@/assets/common/logo-bg.png';
import Button from '@/components/button/Button';
import Heading from '@/components/heading/Heading';
import Content from '@/components/layout/Content';
import Card from '@/components/news/Card';
import { getPostList } from '@/lib/microcms';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from './News.module.scss';

export default async function News() {
  const { contents: newsList } = await getPostList<NewsItem>('news', 3, 1, {
    orders: '-publishedAt',
  });

  return (
    <div className={styles.news}>
      <Content>
        <Heading label="日々のこと" />
        <div className={styles.body}>
          {newsList.map(news => (
            <Card
              key={news.id}
              src={news.thumbnail.url}
              id={news.id}
              title={news.title}
              date={formatDate(news.publishedAt ?? news.createdAt)}
              dateTime={formatDate(
                news.publishedAt ?? news.createdAt,
                'YYYY-MM-DD',
              )}
              category={news.category.name}
              tagName="h3"
            />
          ))}
        </div>
        <Button href="/news/" text="一覧へ" center />
      </Content>
      <div className={styles.bg}>
        <Image src={logoBg} alt="" width={614} height={614} loading="lazy" />
      </div>
    </div>
  );
}
