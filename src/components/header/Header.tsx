'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import bg from '@/assets/common/bg.png';
import logo from '@/assets/common/logo.png';
import Cv from '@/components/header/Cv';
import HamburgerIcon from '@/components/header/HamburgerIcon';
import Nav from '@/components/header/Nav';
import backSurfaceFixed from '@/utils/backSurfaceFixed';
import styles from './Header.module.scss';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const prevPathnameRef = useRef(pathname);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    const next = !menuOpen;
    backSurfaceFixed(next);
    setMenuOpen(next);
  };

  const closeMenu = useCallback(() => {
    backSurfaceFixed(false);
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (prevPathnameRef.current === pathname) return;
    prevPathnameRef.current = pathname;

    if (!menuOpen) return;

    closeMenu();
    window.scrollTo(0, 0);
  }, [pathname, menuOpen, closeMenu]);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const setHeaderHeight = (height: number) => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${height}px`,
      );
    };

    setHeaderHeight(header.scrollHeight);

    const observer = new ResizeObserver(([entry]) => {
      setHeaderHeight(entry.contentRect.height);
    });
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}
    >
      <div id="backdrop" aria-hidden={!menuOpen} onClick={closeMenu}></div>
      <div className={styles.inner}>
        {pathname !== '/' && (
          <Link href="/" className={styles.logo}>
            <Image
              src={logo}
              width={100}
              height={100}
              alt={process.env.NEXT_PUBLIC_SITE_TITLE}
              loading="eager"
              fetchPriority="high"
            />
          </Link>
        )}

        <div className={styles.body}>
          <div className={styles.bg}>
            <Image src={bg} alt="" loading="lazy" />
          </div>
          <div className={styles.content}>
            <div className={styles.menuLogo}>
              <Link href="/">
                <Image
                  src={logo}
                  width={130}
                  height={130}
                  alt={process.env.NEXT_PUBLIC_SITE_TITLE}
                  loading="lazy"
                />
              </Link>
            </div>

            <Nav onLinkClick={closeMenu} />

            <Cv />
          </div>
        </div>

        <HamburgerIcon menuOpen={menuOpen} onClick={toggleMenu} />
      </div>
    </header>
  );
}
