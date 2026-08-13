import Link from 'next/link';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav id="menu" className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/about/">和合について</Link>
        </li>
        <li className={styles.item}>
          <Link href="#anc_1">おしながき</Link>
        </li>
        <li className={styles.item}>
          <Link href="/news/">日々のこと</Link>
        </li>
        <li className={styles.item}>
          <Link href="#anc_2">アクセス</Link>
        </li>
      </ul>
    </nav>
  );
}
