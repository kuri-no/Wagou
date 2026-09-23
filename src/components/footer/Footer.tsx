'use client';

import Image from 'next/image';
import Link from 'next/link';
import bg from '@/assets/common/bg.png';
import logo from '@/assets/common/logo.png';
import Content from '@/components/layout/Content';
import { navList } from '@/constants/navigation';
import useScroll from '@/hooks/useScroll';
import styles from './footer.module.scss';

export default function Footer() {
  const { handleAnchorClick } = useScroll();

  return (
    <footer className={styles.footer}>
      <div className={styles.bg}>
        <Image src={bg} alt="" width={1440} height={542} loading="lazy" />
      </div>
      <Content>
        <div className={styles.body}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logo}
              width={130}
              height={130}
              alt={process.env.NEXT_PUBLIC_SITE_TITLE}
              loading="lazy"
            />
          </Link>
          <div className={styles.company}>
            <p className={styles.main}>茶舗和合</p>
            <p className={styles.sub}>愛知県常滑市栄町6丁目166</p>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {navList.map(({ title, path }) => (
                <li key={path} className={styles.item}>
                  <Link
                    href={path}
                    scroll={path.includes('#') ? false : undefined}
                    className={styles.link}
                    onClick={e => handleAnchorClick(e, path)}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className={styles.copyright}>© 2026 Wagou</p>
        </div>
      </Content>
    </footer>
  );
}
