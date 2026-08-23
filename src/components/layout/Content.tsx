import styles from './Content.module.scss';

export type ContentProps = {
  children: React.ReactNode;
  variant?: 'narrow' | 'tight';
  className?: string;
};

export default function Content({
  children,
  variant,
  className,
}: ContentProps) {
  return (
    <div
      className={`${styles.content} ${variant ? styles[variant] : ''} ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
