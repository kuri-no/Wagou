import styles from './Textarea.module.scss';

type TextareaProps = {
  id?: string;
  type: string;
  name: string;
  required?: boolean;
};

export default function Textarea({
  id = '',
  name,
  ...restOfProps
}: TextareaProps) {
  return (
    <textarea
      className={styles.textarea}
      id={id}
      name={name}
      {...restOfProps}
    />
  );
}
