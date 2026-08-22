'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import useScroll from '@/hooks/useScroll';
import styles from './Nav.module.scss';

type NavProps = {
  onLinkClick?: () => void;
};

export default function Nav({ onLinkClick }: NavProps) {
  const { handleAnchorClick } = useScroll();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    onLinkClick?.();
    handleAnchorClick(e, href);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            href="/about/"
            className={styles.link}
            onClick={e => handleNavClick(e, '/about/')}
          >
            和合について
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/#anc_1"
            scroll={false}
            className={styles.link}
            onClick={e => handleNavClick(e, '/#anc_1')}
          >
            おしながき
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/news/"
            className={styles.link}
            onClick={e => handleNavClick(e, '/news/')}
          >
            日々のこと
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/#anc_2"
            scroll={false}
            className={styles.link}
            onClick={e => handleNavClick(e, '/#anc_2')}
          >
            アクセス
          </Link>
        </li>
      </ul>
    </nav>
  );
}
