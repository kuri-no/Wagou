import Link from 'next/link';
import styles from './Pager.module.scss';

type PagerProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  range?: number;
};

const hrefFor = (basePath: string, page: number) =>
  page <= 1 ? `${basePath}/` : `${basePath}/page/${page}/`;

export default function Pager({
  currentPage,
  totalPages,
  basePath,
  range = 2,
}: PagerProps) {
  if (totalPages <= 1) return null;

  const maxPages = range * 2 + 1;
  const pageNumbers = Array.from(
    { length: Math.min(maxPages, totalPages) },
    (_, i) => Math.max(1, currentPage - range) + i,
  ).filter(page => page <= totalPages);

  return (
    <nav className={styles.pager} aria-label="ページナビゲーション">
      {currentPage > 1 && (
        <Link
          href={hrefFor(basePath, currentPage - 1)}
          className={`${styles.item} ${styles.arrow} ${styles.prev}`}
          rel="prev"
          aria-label="前のページに戻る"
        />
      )}

      {pageNumbers.map(page =>
        page === currentPage ? (
          <span
            key={page}
            className={`${styles.item} ${styles.current}`}
            aria-current="page"
          >
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={hrefFor(basePath, page)}
            className={styles.item}
            aria-label={`${page}ページ目`}
          >
            {page}
          </Link>
        ),
      )}

      {currentPage < totalPages && (
        <Link
          href={hrefFor(basePath, currentPage + 1)}
          className={`${styles.item} ${styles.arrow} ${styles.next}`}
          rel="next"
          aria-label="次のページに進む"
        />
      )}
    </nav>
  );
}
