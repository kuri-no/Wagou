import Link from 'next/link';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav id="menu" className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/about/" className={styles.link}>
            和合について
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/#anc_1" className={styles.link}>
            おしながき
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/news/" className={styles.link}>
            日々のこと
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/#anc_2" className={styles.link}>
            アクセス
          </Link>
        </li>
      </ul>
    </nav>
  );
}
