import Image from 'next/image';
import icon1 from '@/assets/common/icon_1.png';
import Button from '@/components/button/Button';
import Heading from '@/components/heading/Heading';
import Hero from '@/components/hero/Hero';
import Content from '@/components/layout/Content';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <>
      <Hero>
        <Heading label="404" />
      </Hero>

      <Content variant="tight">
        <div className={styles.notFound}>
          <p className={styles.label}>ページが見つかりませんでした</p>
          <div className={styles.detail}>
            <p>
              お探しのページは移動もしくは
              <br />
              削除された可能性があります。
            </p>
            <p>トップページから再度お探しください。</p>
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
