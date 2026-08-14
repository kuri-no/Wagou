'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import bg from '@/assets/common/bg.png';
import iconCv1 from '@/assets/common/icon-cv_1.png';
import iconCv2 from '@/assets/common/icon-cv_2.png';
import logo from '@/assets/common/logo.png';
import HamburgerIcon from '@/components/header/HamburgerIcon';
import Nav from '@/components/header/Nav';
import backSurfaceFixed from '@/utils/backSurfaceFixed';
import styles from './Header.module.scss';

export default function Header() {
  const pathname = usePathname();
  const LogoTagName = pathname === '/' ? 'h1' : 'div';
  const [menuOpen, setMenuOpen] = useState(false);
  const prevPathnameRef = useRef(pathname);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    const next = !menuOpen;
    backSurfaceFixed(next);
    setMenuOpen(next);
  };

  const closeMenu = () => {
    backSurfaceFixed(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (prevPathnameRef.current === pathname) return;
    prevPathnameRef.current = pathname;

    if (menuOpen) closeMenu();
  }, [pathname, menuOpen]);

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
      <div className={styles.inner}>
        <LogoTagName className={styles.logo}>
          <Link href="/" className={styles.link}>
            <Image
              src={logo}
              width={100}
              height={100}
              alt={process.env.NEXT_PUBLIC_SITE_TITLE}
              loading="eager"
              fetchPriority="high"
            />
          </Link>
        </LogoTagName>

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

            <Link href="/reservation/" className={styles.button}>
              <div className={styles.bg}>
                <Image
                  src={iconCv1}
                  width={111}
                  height={146}
                  alt=""
                  loading="lazy"
                />
                <p className={styles.label}>
                  <span className={styles.main}>予約する</span>
                  <span className={styles.sub}>Reserve</span>
                </p>
              </div>
              <div className={styles.icon}>
                <Image
                  src={iconCv2}
                  width={51}
                  height={47}
                  alt=""
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        </div>

        <HamburgerIcon menuOpen={menuOpen} onClick={toggleMenu} />
      </div>
    </header>
  );
}
