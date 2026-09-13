import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

type CardProps = {
  src: string | StaticImageData;
  id: string;
  title: string;
  date: string;
  dateTime: string;
  category: string;
  tagName?: 'h2' | 'h3';
};

export default function Card({
  src,
  id,
  title,
  date,
  dateTime,
  category,
  tagName: TagName = 'h2',
}: CardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/news/${id}/`} className={styles.inner}>
        <div className={styles.thumbnail}>
          <Image src={src} alt="" width={364} height={242} loading="lazy" />
        </div>
        <div className={styles.meta}>
          <p className={styles.tag}>{category}</p>
          <time className={styles.date} dateTime={dateTime}>
            {date}
          </time>
          <TagName className={styles.title}>{title}</TagName>
        </div>
      </Link>
    </article>
  );
}
