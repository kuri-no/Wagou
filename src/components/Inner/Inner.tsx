import styles from './Inner.module.scss';

export type InnerProps = {
  children: React.ReactNode;
  variant?: 'narrow' | 'tight';
};

export default function Inner({ children, variant }: InnerProps) {
  return (
    <div className={`${styles.inner} ${variant ? styles[variant] : ''}`}>
      {children}
    </div>
  );
}
