import styles from "./page.module.scss";
import Button from '@/components/button/Button';
import Heading from '@/components/heading/Heading';
// import Image from "next/image";
// import phMv1 from '@/assets/home/ph-mv_1.jpg';
// import phMv1Md from '@/assets/home/ph-mv_1--md.jpg';

export default function Home() {
  return (
    <>
      <Heading label="和合でできること" />

      <Button href="#" text="導入事例をすべて見る" />

      <p className={styles.text}>テスト</p>
      <div className={styles.$1}></div>
      


      {/* <picture>
        <source media="(max-width: 768px)" srcSet={phMv1Md.src} />
        <Image
          src={phMv1}
          className={styles.profileImage}
          alt=""
          width={1684}
          height={1684}
        />
      </picture> */}
    </>
  );
}
