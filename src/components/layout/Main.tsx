import styles from './Main.module.scss';

export type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}
