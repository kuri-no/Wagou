import styles from './Textarea.module.scss';

type TextareaProps = {
  id: string;
  name: string;
  required?: boolean;
};

export default function Textarea({
  id,
  name,
  required = false,
}: TextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      className={styles.textarea}
      required={required}
    />
  );
}
