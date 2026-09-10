import Link from 'next/link';
import { getAllPost } from '@/lib/microcms';
import type { CategoryItem } from '@/types/Category';
import styles from './TermList.module.scss';

type TermListProps = {
  currentSlug?: string;
};

export default async function TermList({ currentSlug }: TermListProps) {
  const categories = await getAllPost<CategoryItem>('category', {
    fields: 'id,name,slug',
    orders: 'createdAt',
  });

  return (
    <ul className={styles.termList}>
      <li>
        <Link
          href="/news/"
          className={`${styles.link}${!currentSlug ? ` ${styles.isCurrent}` : ''}`}
        >
          すべて
        </Link>
      </li>
      {categories.map(category => (
        <li key={category.id}>
          <Link
            href={`/news/category/${category.slug}/`}
            className={`${styles.link}${
              currentSlug === category.slug ? ` ${styles.isCurrent}` : ''
            }`}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
