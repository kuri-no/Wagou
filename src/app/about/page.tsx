import type { Metadata } from 'next';
import Image from 'next/image';
import img1 from '@/assets/common/img_1.jpg';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: '和合について',
  description: '茶舗 和合の理念や真菰・米・お茶の栽培について紹介します。',
};

const BreadcrumbItems = [
  {
    href: '/',
    text: 'トップページ',
  },
  {
    href: '/about/',
    text: '和合について',
  },
];

export default function About() {
  return (
    <>
      <Hero>
        <Heading label="和合について" tagName="h1" />
      </Hero>

      <Content variant="tight">
        <div className={styles.about}>
          <p className={styles.lead}>
            茶舗
            和合は、急須の街・常滑のやきもの散歩道にある、小さな日本茶のティースタンドです。
            <br />
            私たちは知多半島の自然のなかで、お茶やお米、真菰を育てています。
            <br />
            土に触れ、植物と向き合い、その恵みをいただく。
            <br />
            そして、一杯のお茶を通して、人と人が同じ時間を分かち合う。
            <br />
            そんな日々の営みを大切にしています。
          </p>
          <h2>ひとやすみ、和み合う</h2>
          <p>
            「和合」という名前には、お茶を囲み、人と人とが「和み合う」場所でありたいという想いを込めています。
          </p>
          <p>
            忙しい毎日のなかで、ほんの少し立ち止まる。
            <br />
            急須から立ちのぼる香りを感じ、ゆっくりと一煎のお茶を味わう。
          </p>
          <p>
            ひとりで静かに過ごす時間も、誰かと語らう時間も、それぞれに心地よいものになるように。
            <br />
            一杯のお茶が、日常のなかの小さな「ひとやすみ」になればと考えています。
          </p>
          <div className={styles.image}>
            <Image src={img1} alt="" width={600} height={400} loading="lazy" />
          </div>
          <h3>急須の街・常滑から</h3>
          <p>
            常滑は、古くからやきものとともに暮らしが育まれてきた街です。
            <br />
            和合では、この土地で日本茶の文化をもう一度育てていきたいという想いから、常滑にも茶畑をつくり始めました。
          </p>
          <p>
            常滑の大地でお茶を育て、その茶葉を丁寧にお茶にして、常滑焼の急須で淹れる。
          </p>
          <p>
            畑から一杯のお茶になるまで、そのすべてがこの土地とつながっている。
            <br />
            そんなお茶を皆さまにお届けできる日を楽しみに、植物と向き合いながら、一歩ずつ歩んでいます。
          </p>
        </div>

        <Breadcrumb items={BreadcrumbItems} />
      </Content>
    </>
  );
}
