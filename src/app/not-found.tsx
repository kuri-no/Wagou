import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import Image from "next/image";
import ButtonOutline from "@/components/ui/ButtonOutline";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <PageFirstView
        subText="Not Found"
        mainText="404"
        textAlign="isCenter"
      />
      <OneColumn>
        <div className={styles.pageThanks}>
          <p className={styles.lead}>Not Found</p>
          <p className={styles.text}>
            申し訳ございませんが、ページが存在しません。
          </p>
          <Image
            src="/thanks.png"
            alt="Thank you!"
            width="320"
            height="160"
            loading="lazy"
            decoding="async"
            className={styles.image}
          />
          <div className={styles.button}>
            <ButtonOutline href="/" text="ホームへ戻る" />
          </div>
        </div>
      </OneColumn>
    </>
  );
}