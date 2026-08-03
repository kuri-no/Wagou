import styles from "./page.module.scss";
import Button from '@/components/button/Button';
import Heading from '@/components/heading/Heading';
import Image from "next/image";
import phMv1 from '@/assets/home/ph-mv_1.jpg';
import phMv1Md from '@/assets/home/ph-mv_1--md.jpg';

export default function Home() {
  return (
    <>
      <Button href="#" text="導入事例をすべて見る" />
      <Heading subText="Feature" mainText="3つの特徴" />
      <div className={styles.icon}></div>

      <p className={styles.text}>テスト</p>
      p

      <picture>
        <source media="(max-width: 768px)" srcSet={phMv1Md.src} />
        <Image
          src={phMv1}
          className={styles.profileImage}
          alt=""
          width={1684}
          height={1684}
        />
      </picture>
    </>
  );
}
