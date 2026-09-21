import Content from '@/components/layout/Content';
import styles from './Hero.module.scss';

export type HeroProps = {
  children: React.ReactNode;
};

export default function Hero({ children }: HeroProps) {
  return (
    <Content>
      <div className={styles.hero}>
        {children}
      </div>
    </Content>
  );
}
