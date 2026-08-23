'use client';

import Image, { type StaticImageData } from 'next/image';
import { useId, useRef } from 'react';
import Button from '@/components/button/Button';
import styles from './ModalCard.module.scss';

type ModalCardProps = {
  src: StaticImageData;
  label: string;
  detail: string;
};

export default function ModalCard({ src, label, detail }: ModalCardProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <li className={styles.modal}>
      <div className={styles.head}>
        <div className={styles.thumbnail}>
          <Image
            src={src}
            width={300}
            height={225}
            alt={label}
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.label}>{label}</h3>
        </div>
        <Button
          text="詳細へ"
          className={styles.moreButton}
          onClick={openDialog}
        />
      </div>
      <dialog
        ref={dialogRef}
        className={styles.panel}
        aria-labelledby={titleId}
        onClick={event => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className={styles.inner}>
          <div className={styles.image}>
            <Image
              src={src}
              width={300}
              height={225}
              alt={label}
              loading="lazy"
            />
          </div>
          <p id={titleId} className={styles.label}>
            {label}
          </p>
          <p className={styles.detail}>{detail}</p>
          <Button
            text="閉じる"
            variant="outline"
            className={styles.closeButton}
            onClick={closeDialog}
          />
        </div>
      </dialog>
    </li>
  );
}
