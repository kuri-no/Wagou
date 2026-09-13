import Image from "next/image";
import styles from "./Heading.module.scss";
import iconHeading from '@/assets/common/icon-heading.png';

export type HeadingProps = {
  label: string;
  tagName?: 'h1' | 'h2';
};

export default function Heading({
  label,
  tagName: TagName = 'h2',
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
      <TagName className={styles.label}>{label}</TagName>
    </div>
  );
}
