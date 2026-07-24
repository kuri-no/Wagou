import styles from "./Radio.module.css";

type RadioProps = {
  items: {
    value: string;
    text: string;
    cheked?: boolean;
  }[];
  name: string;
  required?: boolean;
};

export default function Radio({ name, items, ...restOfProps }: RadioProps) {
  return (
    <div className={styles.radio}>
      {items.map((item) => {
        return (
          <label className={styles.item} key={item.value}>
            <input
              className={styles.input}
              type="radio"
              name={name}
              value={item.value}
              defaultChecked={item.cheked}
              {...restOfProps}
            />
            <span className={styles.text}>{item.text}</span>
          </label>
        );
      })}
    </div>
  );
}
