import styles from "./NewsSection.module.css";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import NewsCard from "@/components/ui/NewsCard";
import { stripHtmlTags } from "@/utils/string";
import { formatDate } from "@/utils/date";
import { client } from "@/lib/microcms";
import ButtonTailwind from "@/components/ui/ButtonTailwind";

// お知らせ記事の型定義
type Props = {
  id?: string;
  title: string;
  contents?: string;
  eyecatch?: { url: string; width: number; height: number };
  category?: { id: string; name: string }[];
  tags?: { id: string; name: string }[];
  publishedAt: string;
};

// microCMSからブログ記事を取得
async function getNewsPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: "news", // 'news'はmicroCMSのエンドポイント名
    queries: {
      fields: "id,title,contents,eyecatch,category,tags,publishedAt", // 表示するコンテンツを取得
      limit: 3, // 最新の3件を取得
      orders: "-publishedAt",
    },
  });
  return data.contents;
}

export default async function NewsSection() {
  const posts = await getNewsPosts();

  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <Heading subText="microCMS" mainText="お知らせ" textAlign="isCenter" />
        {posts.length === 0 ? (
          <p className={styles.textNotFound}>記事が存在しません。</p>
        ) : (
          <div className={styles.cards}>
            {posts.map((post) => {
              return (
                <div className={styles.card} key={post.id}>
                  <NewsCard
                    src={post.eyecatch?.url ?? "/thumbnail0.jpg"}
                    id={parseInt(post.id)}
                    title={post.title}
                    excerpt={stripHtmlTags(post?.contents ?? "")}
                    date={formatDate(post.publishedAt)}
                    categories={
                      post?.category.map((category) => {
                        return {
                          id: parseInt(category.id),
                          name: category.name,
                        };
                      }) ?? []
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className={styles.button}>
          <ButtonTailwind href="/news/" text="すべてのお知らせを見る" />
        </div>
      </div>
    </div>
  );
}
