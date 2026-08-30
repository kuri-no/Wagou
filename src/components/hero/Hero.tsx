import Content from '@/components/layout/Content';
import styles from './Hero.module.scss';

export default function Hero({ children }) {
  return (
    <Content>
      <div className={styles.hero}>
        {children}
      </div>
    </Content>
  );
}
