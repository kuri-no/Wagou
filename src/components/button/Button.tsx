import Link from 'next/link';
import styles from './Button.module.scss';

type ButtonProps = {
  href: string;
  text: string;
  variant?: 'outline';
  center?: boolean;
  blank?: boolean;
};

export default function Button({
  href,
  text,
  variant,
  center,
  blank,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${variant ? styles[variant] : ''} ${center ? styles.center : ''}`}
      {...(blank ? { target: '_blank' } : {})}
    >
      {text}
    </Link>
  );
}
