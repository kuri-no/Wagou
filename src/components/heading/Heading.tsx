'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import iconHeading from '@/assets/common/icon-heading.png';
import { ScaleIn } from '@/hooks/animation';
import styles from './Heading.module.scss';

export type HeadingProps = {
  label: string;
  tagName?: 'h1' | 'h2';
};

export default function Heading({
  label,
  tagName: TagName = 'h2',
}: HeadingProps) {
  useEffect(() => {
    ScaleIn();
  }, []);

  return (
    <div className={styles.heading}>
      <div className={styles.icon} data-scale-in>
        <Image
          src={iconHeading}
          alt=""
          width={100}
          height={38}
        />
      </div>
      <TagName className={styles.label}>{label}</TagName>
    </div>
  );
}
