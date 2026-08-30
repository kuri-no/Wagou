import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

type BreadcrumbProps = {
  items: {
    href: string;
    text: string;
  }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <ol className={styles.breadcrumb}>
      {items.map(item => {
        return (
          <li className={styles.item} key={item.href}>
            <Link href={item.href} className={styles.link}>
              {item.text}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
