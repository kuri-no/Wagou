'use client';

import { useState } from 'react';
import styles from './Menu.module.scss';

export default function Menu() {
  return (
    <button type="button" className={styles.trigger}>
      <div className={styles.bars}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </button>
  );
}
