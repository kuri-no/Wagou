import Image from 'next/image';
import Link from 'next/link';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from './Article.module.scss';

type ArticleProps = {
  post: NewsItem;
};

export default function Article({ post }: ArticleProps) {
  const publishedDate = post.publishedAt ?? post.createdAt;

  return (
    <article className={styles.article}>
      <div className={styles.thumbnail}>
        <Image
          src={post.thumbnail.url}
          alt=""
          width={600}
          height={400}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className={styles.meta}>
        <Link
          href={`/news/category/${post.category.slug}/`}
          className={styles.tag}
        >
          {post.category.name}
        </Link>
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
  );
}
