'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MouseEvent } from 'react';
import useScroll from '@/hooks/useScroll';
import styles from './Nav.module.scss';

type NavProps = {
  onLinkClick?: () => void;
};

export default function Nav({ onLinkClick }: NavProps) {
  const pathname = usePathname();
  const { scrollToHash } = useScroll();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    onLinkClick?.();

    const [path, hash] = href.split('#');
    if (!hash || path !== pathname) return;

    const target = document.getElementById(hash);
    if (!target) return;

    e.preventDefault();
    scrollToHash(hash);
  };

  return (
    <nav id="menu" className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            href="/about/"
            className={styles.link}
            onClick={(e) => handleClick(e, '/about/')}
          >
            和合について
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/#anc_1"
            scroll={false}
            className={styles.link}
            onClick={(e) => handleClick(e, '/#anc_1')}
          >
            おしながき
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/news/"
            className={styles.link}
            onClick={(e) => handleClick(e, '/news/')}
          >
            日々のこと
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/#anc_2"
            scroll={false}
            className={styles.link}
            onClick={(e) => handleClick(e, '/#anc_2')}
          >
            アクセス
          </Link>
        </li>
      </ul>
    </nav>
  );
}
