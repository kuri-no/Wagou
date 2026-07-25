"use client";

type HamburgerIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function HamburgerIcon({
  isOpen = false,
  onClick,
}: HamburgerIconProps) {
  return (
    <button
      id="js-hamburger"
      className={`${styles.hamburger} ${isOpen && styles.isOpen}`}
      type="button"
      aria-label="メニューを開閉"
      onClick={onClick}
    >
      <span className={styles.bar1}></span>
      <span className={styles.bar2}></span>
      <span className={styles.bar3}></span>
    </button>

    <style lang="scss">
      .hamburger {
  display: inline-block;
  width: 25px;
  height: 21px;
  background: transparent;
  border: none;
  box-shadow: none;
  vertical-align: top;
  cursor: pointer;
  position: relative;
}

.bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 3px;
  border-radius: 13px;
  background: blue;
  position: absolute;
  inset: 0;
  margin: auto;
  transition: rotate 0.3s, translate 0.3s;
}

.bar1 {
  translate: 0 -9px;

  .isOpen & {
    translate: 0;
    rotate: 45deg;
  }
}

.bar2 {
  .isOpen & {
    opacity: 0;
  }
}

.bar3 {
  translate: 0 9px;

  .isOpen & {
    translate: 0;
    rotate: -45deg;
  }
}
    </style>
  );
}
