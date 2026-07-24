import styles from "./Checkbox.module.css";

type CheckboxProps = {
  items: {
    value: string;
    text: string;
    cheked?: boolean;
  }[];
  name: string;
  required?: boolean;
};

export default function Checkbox({
  name,
  items,
  ...restOfProps
}: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      {items.map((item) => {
        return (
          <label className={styles.item} key={item.value}>
            <input
              className={styles.input}
              type="checkbox"
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
