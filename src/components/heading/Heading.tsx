import Image from "next/image";
import styles from "./Heading.module.scss";
import iconHeading from '@/assets/common/icon-heading.png';

export type HeadingProps = {
  label: string;
};

export default function Heading({
  label,
}: HeadingProps) {
  return (
    <div className={styles.heading}>
      <div className={styles.icon}>
        <Image
          src={iconHeading}
          alt=""
          width={100}
          height={38}
        />
      </div>
      <h2 className={styles.label}>{label}</h2>
    </div>
  );
}
