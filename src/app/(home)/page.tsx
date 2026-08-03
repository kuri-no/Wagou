import styles from "./page.module.scss";
import Button from '@/components/button/Button';
import Heading from '@/components/heading/Heading';

export default function Home() {
  return (
    <>
      <Button href="#" text="導入事例をすべて見る" />
      <Heading subText="Feature" mainText="3つの特徴" />
      <div className={styles.icon}></div>
    </>
  );
}
