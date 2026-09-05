import styles from './Input.module.scss';

type InputProps = {
  type: 'text' | 'email' | 'tel' | 'date';
  id: string;
  name: string;
  autoComplete: string;
  min?: string;
  required?: boolean;
};

export default function Input({
  type,
  id,
  name,
  autoComplete,
  min,
  required = false,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={styles.input}
      autoComplete={autoComplete}
      min={min}
      required={required}
    />
  );
}
