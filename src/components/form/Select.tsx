import styles from './Select.module.scss';

type SelectProps = {
  id?: string;
  name: string;
  required?: boolean;
  options: string[];
};

export default function Select({
  id = '',
  name,
  options,
  ...restOfProps
}: SelectProps) {
  return (
    <select className={styles.select} id={id} name={name} {...restOfProps}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
