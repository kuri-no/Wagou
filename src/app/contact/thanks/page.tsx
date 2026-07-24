import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import Image from "next/image";
import ButtonOutline from "@/components/ui/ButtonOutline";
import styles from "./Thanks.module.css";
import Breadcrumb from "@/components/layout/Breadcrumb";
import type { Metadata } from 'next';
import { defaultOpenGrapth, siteName } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "お問い合わせページです。",
  openGraph: {
    ...defaultOpenGrapth,
    title: `お問い合わせ | ${siteName}`,
    url: "/contact/thanks/",
  },
};

export default function Thanks() {
  const BreadcrumbItems = [
    {
      href: "/",
      text: "ホーム",
    },  
    {
      href: "/contact/",
      text: "お問い合わせ",
    },
  ]
  
  return (
    <>
      <PageFirstView
        subText="Contact"
        mainText="お問い合わせ"
        textAlign="isCenter"
      />
      <OneColumn>
        <div className={styles.pageThanks}>
          <p className={styles.lead}>Thank you!</p>
          <p className={styles.text}>
            お問い合わせありがとうございました。
            <br />
            2～3営業日以内に、担当よりメールにて返信いたしますので、しばらくお待ちください。
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
      <Breadcrumb items={BreadcrumbItems} />
    </>
  );
}
