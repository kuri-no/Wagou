import styles from './Input.module.scss';

type InputProps = {
  id?: string;
  type: string;
  name: string;
  required?: boolean;
};

export default function Input({
  id = '',
  type,
  name,
  ...restOfProps
}: InputProps) {
  return (
    <input
      className={styles.input}
      id={id}
      type={type}
      name={name}
      {...restOfProps}
    />
  );
}
