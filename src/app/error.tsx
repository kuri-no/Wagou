"use client";

import type { Metadata } from 'next';
import Image from 'next/image';
import icon1 from '@/assets/common/icon_1.png';
import Button from '@/components/button/Button';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import styles from './Error.module.scss';

export const metadata: Metadata = {
  title: 'システムエラー',
  description:
    '現在システムでエラーが発生しております。しばらく時間をおいてから、もう一度アクセスしてください。',
};

export default function Error() {
  return (
    <>
      <Hero>
        <Heading label="システムエラー" tagName="h1" />
      </Hero>

      <Content variant="tight">
        <div className={styles.error}>
          <p className={styles.label}>システムエラー</p>
          <div className={styles.detail}>
            <p>
              現在システムでエラーが発生しております。
              <br />
              しばらく時間をおいてから、もう一度アクセスしてください。
            </p>
          </div>
          <Button href="/" text="トップページへ" />
          <div className={styles.icon}>
            <Image src={icon1} alt="" width={200} height={131} loading="lazy" />
          </div>
        </div>
      </Content>
    </>
  );
}
