import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import styles from "../../News.module.css";
import Link from "next/link";
import NewsCard from "@/components/ui/NewsCard";
import { stripHtmlTags } from "@/utils/string";
import { formatDate } from "@/utils/date";
import { getCategoryPosts, getCategoryFromId, getCategoryTotalPages } from "@/lib/wordpress";
import { FeaturedMedia, Term } from "@/types/wordpress";
import Breadcrumb from "@/components/layout/Breadcrumb";
import type { Metadata } from 'next';
import { defaultOpenGrapth, siteName } from "@/lib/metadata";
import { notFound } from 'next/navigation';

type NewsProps = {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: NewsProps): Promise<Metadata> {
  const { id } = await params;
  
  const currentCategoryId = parseInt(id);
  const categry= await getCategoryFromId(currentCategoryId);

  return {
    title: `「${categry.name}」の記事`,
    description: `「${categry.name}」の記事一覧ページです。`,
    openGraph: {
      ...defaultOpenGrapth,
      title: `「${categry.name}」の記事 | ${siteName}`,
      url: `/news/category/${id}/`,
    },
  };
}

export default async function News({ params }: NewsProps) {
  const { id } = await params;
  const currentCategoryId = parseInt(id);
  const perPage = 9;
  const currentPage = 1;
  const posts = await getCategoryPosts(currentCategoryId, perPage);
  const categry= await getCategoryFromId(currentCategoryId);
  const totalPages= await getCategoryTotalPages(currentCategoryId, perPage);

  if (posts.length === 0) {
    notFound();
  }

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
      href: `/news/category/${id}/`,
      text: categry.name,
    },
  ]

  return (
    <>
      <PageFirstView subText="News" mainText="お知らせ" textAlign="isCenter" />
      <TwoColumn>
        <div className={styles.news}>
          <p className={styles.title}>{`「${categry.name}」の記事`}</p>
          <div className={styles.cards}>
            {posts.map((post) => {
              const featuredmedia = (post?._embedded?.[
                "wp:featuredmedia"
              ]?.[0] ?? { source_url: "/thumbnail0.jpg" }) as FeaturedMedia;
              const categories = (post?._embedded?.["wp:term"]?.[0] ??
                []) as Term[];
              return (
                <div className={styles.card} key={post.id}>
                  <NewsCard
                    src={featuredmedia.source_url}
                    id={post.id}
                    title={post.title.rendered}
                    excerpt={stripHtmlTags(post.excerpt.rendered)}
                    date={formatDate(post.date)}
                    categories={categories.map((category) => {
                      return { id: category.id, name: category.name };
                    })}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.pagenation}>
            <div className={styles.numbers}>
              {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;
                return (
                  <Link
                    key={pageNumber}
                    className={`${styles.number} ${currentPage === pageNumber && styles.isCurrent}`}
                    href={`/news/category/${currentCategoryId}/page/${pageNumber}/`}
                  >
                    {pageNumber}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </TwoColumn>
      <Breadcrumb items={BreadcrumbItems} />
    </>
  );
}
