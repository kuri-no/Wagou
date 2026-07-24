"use client";

import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import Image from "next/image";
import ButtonOutline from "@/components/ui/ButtonOutline";
import styles from "./Error.module.css";

export default function Error() {
  return (
    <>
      <PageFirstView
        subText="Error"
        mainText="システムエラー"
        textAlign="isCenter"
      />
      <OneColumn>
        <div className={styles.pageThanks}>
          <p className={styles.lead}>Error</p>
          <p className={styles.text}>
            現在システムでエラーが発生しております。
            <br />
            しばらくしてからもう一度アクセスしていただくか、
            <br />
            「support@example.com」までご連絡ください。
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