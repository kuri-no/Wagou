import Link from 'next/link';
import styles from './TermList.module.scss';

export default function TermList() {
  return (
    <ul className={styles.termList}>
      <li>
        <Link href="" className={styles.link}>
          コラム
        </Link>
      </li>
      <li>
        <Link href="" className={styles.link}>
          イベント
        </Link>
      </li>
      <li>
        <Link href="" className={styles.link}>
          農園
        </Link>
      </li>
    </ul>
  );
}
