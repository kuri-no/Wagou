import Image from 'next/image';
import Link from 'next/link';
import img2 from '@/assets/common/img_2.jpg';
import type { NewsItem } from '@/types/News';
import { formatDate } from '@/utils/dateFormat';
import styles from './SideBar.module.scss';

type SideBarProps = {
  recentPosts: NewsItem[];
};

export default function SideBar({ recentPosts }: SideBarProps) {
  return (
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
      {recentPosts.length > 0 && (
        <div className={styles.recommend}>
          <p className={styles.label}>最近の投稿</p>
          <ul className={styles.list}>
            {recentPosts.map(recent => (
              <li className={styles.item} key={recent.id}>
                <Link href={`/news/${recent.id}/`} className={styles.link}>
                  <time className={styles.date}>
                    {formatDate(
                      recent.publishedAt ?? recent.createdAt,
                      'YYYY/MM/DD',
                    )}
                  </time>
                  <p className={styles.title}>{recent.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
