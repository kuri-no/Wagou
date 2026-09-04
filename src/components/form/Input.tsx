import styles from './Input.module.scss';

type InputProps = {
  type: 'text' | 'email' | 'tel';
  id: string;
  name: string;
  autoComplete: string;
  required?: boolean;
};

export default function Input({
  type,
  id,
  name,
  autoComplete,
  required = false,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={styles.input}
      autoComplete={autoComplete}
      required={required}
    />
  );
}
