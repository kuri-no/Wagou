// export const dynamic = "force-static";

import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Link from "next/link";
import Image from "next/image";
import styles from "./Post.module.css";
import { getPost } from "@/lib/wordpress";
import { formatDate } from "@/utils/date";
import { stripHtmlTags } from "@/utils/string";
import { FeaturedMedia, Term } from "@/types/wordpress";
import Breadcrumb from "@/components/layout/Breadcrumb";
import type { Metadata } from "next";
import { defaultOpenGrapth, siteName } from "@/lib/metadata";
import { notFound } from 'next/navigation';

type NewsProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: NewsProps): Promise<Metadata> {
  const { id } = await params;

  const post = await getPost(parseInt(id));
  const featuredmedia = (post?._embedded?.["wp:featuredmedia"]?.[0] ?? {
    source_url: "/thumbnail0.jpg",
  }) as FeaturedMedia;

  return {
    title: post.title.rendered,
    description: stripHtmlTags(post.excerpt.rendered),
    openGraph: {
      ...defaultOpenGrapth,
      title: `${post.title.rendered} | ${siteName}`,
      url: `/news/${id}/`,
      images: [featuredmedia.source_url],
      type: "article",
    },
  };
}

export default async function News({ params }: NewsProps) {
  const { id } = await params;
  const post = await getPost(parseInt(id));

  if (!post) {
    notFound();
  }

  const categories = (post?._embedded?.["wp:term"]?.[0] ?? []) as Term[];
  const featuredmedia = (post?._embedded?.["wp:featuredmedia"]?.[0] ?? {
    source_url: "/thumbnail0.jpg",
  }) as FeaturedMedia;

  const BreadcrumbItems = [
    {
      href: "/",
      text: "ホーム",
    },
    {
      href: "/news/",
      text: "お知らせ",
    },
    {
      href: `/news/${id}/`,
      text: post.title.rendered,
    },
  ];

  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />
      <TwoColumn>
        <div className={styles.pagePost}>
          <h2 className={styles.title}>{post.title.rendered}</h2>
          <div className={styles.meta}>
            <p className={styles.date}>{formatDate(post.date)}</p>
            <div className={styles.categories}>
              {categories.map((category) => {
                return (
                  <Link
                    key={category.id}
                    className={styles.category}
                    href={`/news/category/${category.id}`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <Image
            className={styles.thumbnail}
            src={featuredmedia.source_url}
            alt=""
            width="700"
            height="377"
          />
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          <div className={styles.pagination}>
            <div className={styles.list}>
              <Link href="/news/" className={styles.listButton}>
                記事一覧
              </Link>
            </div>
          </div>
        </div>
      </TwoColumn>
      <Breadcrumb items={BreadcrumbItems} />
    </>
  );
}
