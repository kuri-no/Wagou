import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

type BreadcrumbProps = {
  items: {
    href: string;
    text: string;
  }[];
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.text,
      item: new URL(item.href, SITE_URL).toString(),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
    </>
  );
}
