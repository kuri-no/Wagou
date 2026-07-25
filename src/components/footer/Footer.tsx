import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.info}>
            <Link href="/" className={styles.logoLink}>
              <Image
                className={styles.logo}
                src="/logo.png"
                alt="Flow Meister"
                width="228"
                height="32"
              />
            </Link>
            <p className={styles.company}>株式会社Flow Meister</p>
            <p className={styles.address}>
              〒000-0000　東京都xxxyyy1-1-1 xxxxxxxxx 3F
            </p>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.lists1}>
              <li className={styles.list}>
                <Link href="/" className={styles.link}>
                  ホーム
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/features" className={styles.link}>
                  特徴
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/services" className={styles.link}>
                  サービス
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/pricing" className={styles.link}>
                  価格
                </Link>
              </li>
            </ul>
            <ul className={styles.lists2}>
              <li className={styles.list}>
                <Link href="/company" className={styles.link}>
                  会社情報
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/news" className={styles.link}>
                  お知らせ
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/blog" className={styles.link}>
                  ブログ
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/faq" className={styles.link}>
                  よくある質問
                </Link>
              </li>
            </ul>
            <ul className={styles.lists3}>
              <li className={styles.list}>
                <Link href="/contact" className={styles.link}>
                  お問い合わせ
                </Link>
              </li>
              <li className={styles.list}>
                <Link href="/privacy" className={styles.link}>
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p className={styles.copyright}>© xxxxxxxxxx. All Rights Reserved.</p>
    </footer>

    <style lang="scss">
      .footer {
  background: #fff;
  padding: 10px 20px 20px 20px;
}

.container {
}

.main {
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 40px;

  @media (width >= 768px) {
    padding: 40px 80px;
    flex-direction: row;
  }
}

.info {
}

.logoLink {
  transition: opacity 0.3s;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.6;
    }
  }
}

.logo {
  display: block;
  width: 198px;

  @media (width >= 768px) {
    width: 228px;
  }
}

.company,
.address {
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.8;
}

.company {
  margin-top: 32px;

  @media (width >= 768px) {
    margin-top: 40px;
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 56px;

  @media (width >= 768px) {
    gap: 48px;
  }
}

.lists1,
.lists2,
.lists3 {
  display: grid;
  gap: 16px;
  align-content: start; /* 上に寄せる */
}

.list {
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.8;

  @media (width >= 768px) {
    font-size: 18px;
  }
}

.link {
  transition: color 0.3s;

  @media (any-hover: hover) {
    &:hover {
      color: blue;
    }
  }
}

.copyright {
  color: #f5f5f5;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.8;
  text-align: center;
}

    </style>
  );
}
