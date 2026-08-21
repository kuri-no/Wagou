'use client';

import Image from 'next/image';
import Link from 'next/link';
import bg from '@/assets/common/bg.png';
import logo from '@/assets/common/logo.png';
import Content from '@/components/layout/Content';
import useScroll from '@/hooks/useScroll';
import styles from './footer.module.scss';

export default function Footer() {
  const { handleAnchorClick } = useScroll();

  return (
    <footer className={styles.footer}>
      <div className={styles.bg}>
        <Image src={bg} width={1440} height={542} alt="" loading="lazy" />
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
              <li className={styles.item}>
                <Link
                  href="/about/"
                  className={styles.link}
                  onClick={e => handleAnchorClick(e, '/about/')}
                >
                  和合について
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  href="/#anc_1"
                  scroll={false}
                  className={styles.link}
                  onClick={e => handleAnchorClick(e, '/#anc_1')}
                >
                  おしながき
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  href="/news/"
                  className={styles.link}
                  onClick={e => handleAnchorClick(e, '/news/')}
                >
                  日々のこと
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  href="/#anc_2"
                  scroll={false}
                  className={styles.link}
                  onClick={e => handleAnchorClick(e, '/#anc_2')}
                >
                  アクセス
                </Link>
              </li>
            </ul>
          </nav>
          <p className={styles.copyright}>© 2026 Wagou</p>
        </div>
      </Content>
    </footer>
  );
}
