import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './NewsCard.module.scss';

type CardProps = {
  src: string | StaticImageData;
  id: string;
  title: string;
  date: string;
  category: string;
};

export default function Card({ src, id, title, date, category }: CardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/news/${id}/`} className={styles.inner}>
        <div className={styles.thumbnail}>
          <Image src={src} alt="" width={364} height={242} loading="lazy" />
        </div>
        <div className={styles.meta}>
          <p className={styles.tag}>{category}</p>
          <time className={styles.date}>{date}</time>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </Link>
    </article>
  );
}
