import Link from 'next/link';
import styles from './Pager.module.scss';

export default function Pager() {
  return (
    <div className={styles.pager}>
      <Link
        href=""
        className={`${styles.item} ${styles.arrow} ${styles.prev}`}
        aria-label="前のページ"
      ></Link>
      <div className={`${styles.item} ${styles.current}`}>1</div>
      <Link href="" className={styles.item}>
        2
      </Link>
      <Link href="" className={styles.item}>
        3
      </Link>
      <Link href="" className={styles.item}>
        4
      </Link>
      <Link href="" className={styles.item}>
        5
      </Link>
      <Link
        href=""
        className={`${styles.item} ${styles.arrow} ${styles.next}`}
        aria-label="次のページ"
      ></Link>
    </div>
  );
}
