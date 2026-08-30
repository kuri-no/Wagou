import Image from 'next/image';
import Link from 'next/link';
import img1 from '@/assets/common/img_1.jpg';
import img2 from '@/assets/common/img_2.jpg';
import dummy1 from '@/assets/news/dummy_1.jpg';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Content from '@/components/layout/Content';
import styles from './page.module.scss';

const BreadcrumbItems = [
  {
    href: '/',
    text: 'トップページ',
  },
  {
    href: '/news/',
    text: '日々のこと',
  },
  {
    href: '/news/1/',
    text: '日本茶との出会い',
  },
];

export default function News() {
  return (
    <Content variant='narrow'>
      <div className={styles.article}>
        <article className={styles.body}>
          <div className={styles.thumbnail}>
            <Image
              src={dummy1}
              alt=""
              width={600}
              height={400}
              loading="lazy"
            />
          </div>
          <div className={styles.meta}>
            <p className={styles.category}>COLAM</p>
            <time className={styles.date}>2024.6.6</time>
          </div>
          <h1>日本茶との出会い。</h1>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
          </p>
          <h2>見出し２</h2>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
          </p>
          <div className={styles.image}>
            <Image src={img1} alt="" width={600} height={400} loading="lazy" />
          </div>
          <h3>見出し3</h3>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
          </p>
        </article>
        <aside className={styles.sideBar}>
          <Link href="/reservation/" className={styles.banner}>
            <Image
              src={img2}
              alt="予約フォームバナー"
              width={300}
              height={183}
              loading="lazy"
            />
          </Link>
          <div className={styles.recommend}>
            <h2 className={styles.label}>最近の投稿</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/news/1/" className={styles.link}>
                  <time className={styles.date}>2024/6/6</time>
                  <p className={styles.title}>日本茶との出会い</p>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/news/1/" className={styles.link}>
                  <time className={styles.date}>2024/6/6</time>
                  <p className={styles.title}>日本茶との出会い</p>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/news/1/" className={styles.link}>
                  <time className={styles.date}>2024/6/6</time>
                  <p className={styles.title}>日本茶との出会い</p>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/news/1/" className={styles.link}>
                  <time className={styles.date}>2024/6/6</time>
                  <p className={styles.title}>日本茶との出会い</p>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/news/1/" className={styles.link}>
                  <time className={styles.date}>2024/6/6</time>
                  <p className={styles.title}>日本茶との出会い</p>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <Breadcrumb items={BreadcrumbItems} />
    </Content>
  );
}
