'use client';

import styles from './HamburgerIcon.module.scss';

type HamburgerIconProps = {
  menuOpen: boolean;
  onClick: () => void;
};

export default function HamburgerIcon({
  menuOpen,
  onClick,
}: HamburgerIconProps) {
  return (
    <button
      type="button"
      className={`${styles.trigger} ${menuOpen ? styles.menuOpen : ''}`}
      aria-expanded={menuOpen}
      aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
      aria-controls="menu"
      onClick={onClick}
    >
      <div className={styles.bars}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </button>
  );
}
