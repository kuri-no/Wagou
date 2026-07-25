"use client";

import HamburgerIcon from "@/components/header/HamburgerIcon";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className={`${styles.header} ${isOpen && styles.isOpen}`}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Flow Meister"
            width="228"
            height="32"
          />
        </Link>

        <div className={styles.content}>
          <nav className={styles.nav}>
            <ul className={styles.lists}>
              <li className={styles.list}>
                <Link href="/" className={styles.link}>
                  ホーム
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/news/" className={styles.link}>
                  お知らせ
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/service/" className={styles.link}>
                  サービス
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.info}>
            <div className={styles.tel}>
              <p className={styles.number}>TEL: xx-xxxx-xxxxx</p>
              <p className={styles.hours}>営業時間: 9:00〜18:00</p>
            </div>
            <Link href="/contact/" className={styles.button}>
              お問い合わせ
            </Link>
          </div>

          <div className={styles.hamburger}>
            <HamburgerIcon isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </header>

    <style lang="scss">
      .header {
  width: 100%;
  padding: 12px 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &.isOpen {
    height: 100dvh;
    background: rgba(59, 130, 246, 0.4);
  }

  @media (width >= 768px) {
    padding: 16px 20px;
  }
}

.container {
  width: 100%;
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 0;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 5px 15px -3px rgba(96, 165, 250, 0.15), 0px -5px 6px -4px rgba(96, 165, 250, 0.1);
  position: relative;

  @media (width >= 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 10px 40px;
    border-radius: 40px;
  }
}

.logo {
  display: block;
  width: 170px;

  @media (width >= 768px) {
    width: 228px;
  }
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  height: 0;
  max-height: calc(100dvh - 64px - 16px * 2); /* ヘッダーの高さ + 上下の余白 */
  padding-inline: 24px;
  overflow: hidden;
  transition: height 0.3s, padding-block 0.3s;

  @media (width >= 1024px) {
    margin-left: auto;
    flex-direction: row;
    gap: 44px;
    height: auto;
    max-height: initial;
    padding-inline: 0;
    overflow: auto;
    transition: none;
  }

  .isOpen & {
    height: auto;
    padding-block: 40px 24px;
    overflow: auto;
  }
}

.nav {
}

.lists {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  @media (width >= 1024px) {
    flex-direction: row;
  }
}

.list {
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
}

.link {
  transition: color 0.3s;

  @media (any-hover: hover) {
    &:hover {
      color: blue;
    }
  }
}

.info {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media (width >= 1024px) {
    flex-direction: row;
  }
}

.tel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (width >= 1024px) {
    align-items: flex-start;
  }
}

.number {
  color: blue;
  font-weight: 700;
}

.hours {
  color: blue;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.8;
}

.button {
  display: flex;
  padding: 9px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid blue;
  border-radius: 32px;
  background: blue;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  line-height: normal;
  text-align: left;
  transition: background-color 0.3s, color 0.3s;

  @media (any-hover: hover) {
    &:hover {
      background-color: #fff;
      color: blue;
    }
  }
}

.hamburger {
  position: absolute;
  top: 17.5px;
  right: 24px;

  @media (width >= 768px) {
    top: 21.75px;
    right: 24px;
  }

  @media (width >= 1024px) {
    display: none;
  }
}
    </style>
  );
}
