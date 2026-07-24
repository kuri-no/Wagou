import styles from "./OneColumn.module.css";

type OneColumnProps = {
  isSlim?: boolean;
  children: React.ReactNode;
};

export default function OneColumn({
  children,
  isSlim = false,
}: OneColumnProps) {
  return (
    <div className={styles.oneColumn}>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={`${styles.content} ${isSlim && styles.isSlim}`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
