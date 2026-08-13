'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import bg from '@/assets/common/bg.png';
import iconCv1 from '@/assets/common/icon-cv_1.png';
import iconCv2 from '@/assets/common/icon-cv_2.png';
import logo from '@/assets/common/logo.png';
import Menu from '@/components/header/Menu';
import Nav from '@/components/header/Nav';
import styles from './Header.module.scss';

export default function Header() {
  const pathname = usePathname();
  const LogoTagName = pathname === '/' ? 'h1' : 'div';

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <LogoTagName className={styles.logo}>
          <Link href="/" className={styles.link}>
            <Image src={logo} alt="茶舗和合のロゴ" width={100} height={100} />
          </Link>
        </LogoTagName>

        <div className={styles.body}>
          <div className={styles.bg}>
            <Image src={bg} alt="" />
          </div>
          <div className={styles.menuLogo}>
            <Link href="/">
              <Image src={logo} alt="" width={130} height={130} />
            </Link>
          </div>

          <Nav />

          <Link href="/reservation/" className={styles.button}>
            <div className={styles.bg}>
              <Image src={iconCv1} alt="" width={111} height={146} />
              <p className={styles.label}>
                <span className={styles.main}>予約する</span>
                <span className={styles.sub}>Reserve</span>
              </p>
            </div>
            <div className={styles.icon}>
              <Image src={iconCv2} alt="" width={51} height={47} />
            </div>
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
}
