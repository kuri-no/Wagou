import styles from './Content.module.scss';

export type ContentProps = {
  children: React.ReactNode;
  variant?: 'narrow' | 'tight';
};

export default function Content({ children, variant }: ContentProps) {
  return (
    <div className={`${styles.content} ${variant ? styles[variant] : ''}`}>
      {children}
    </div>
  );
}
