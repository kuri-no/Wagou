import styles from './Label.module.scss';

type LabelProps = {
  htmlFor: string;
  text: string;
  required?: boolean;
};

export default function Label({ htmlFor, text, required = true }: LabelProps) {
  const tagText = required ? '必須' : '任意';
  const tagClass = required ? styles.isRequired : styles.isOptional;

  return (
    <div className={styles.label}>
      <label htmlFor={htmlFor} className={styles.text}>
        {text}
      </label>
      <span className={`${styles.tag} ${tagClass}`}>{tagText}</span>
    </div>
  );
}
