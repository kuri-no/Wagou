import Link from 'next/link';
import styles from './Button.module.scss';

type ButtonProps = {
  href?: string;
  text: string;
  variant?: 'outline';
  center?: boolean;
  blank?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export default function Button({
  href,
  text,
  variant,
  center,
  blank,
  className,
  type = 'button',
  onClick,
}: ButtonProps) {
  const buttonClassName = `${styles.button} ${variant ? styles[variant] : ''} ${center ? styles.center : ''} ${className ?? ''}`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClassName}
        {...(blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {text}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
}
