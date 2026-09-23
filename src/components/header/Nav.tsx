'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import { navList } from '@/constants/navigation';
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
        {navList.map(({ title, path }) => (
          <li key={path} className={styles.item}>
            <Link
              href={path}
              scroll={path.includes('#') ? false : undefined}
              className={styles.link}
              onClick={e => handleNavClick(e, path)}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
