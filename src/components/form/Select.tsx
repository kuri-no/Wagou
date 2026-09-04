import styles from './Select.module.scss';

type SelectProps = {
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  options: string[];
};

export default function Select({
  id,
  name,
  placeholder,
  required = false,
  options,
}: SelectProps) {
  return (
    <select
      id={id}
      name={name}
      className={styles.select}
      defaultValue={placeholder ? '' : undefined}
      required={required}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
