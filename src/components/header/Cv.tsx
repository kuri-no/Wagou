import Image from 'next/image';
import Link from 'next/link';
import iconCv1 from '@/assets/common/icon-cv_1.png';
import iconCv2 from '@/assets/common/icon-cv_2.png';
import styles from './Cv.module.scss';

export default function Cv() {
  return (
    <Link href="/reservation/" className={styles.cv}>
      <div className={styles.bg}>
        <Image src={iconCv1} width={111} height={146} alt="" loading="lazy" />
        <p className={styles.label}>
          <span className={styles.main}>予約する</span>
          <span className={styles.sub}>Reserve</span>
        </p>
      </div>
      <div className={styles.icon}>
        <Image src={iconCv2} width={51} height={47} alt="" loading="lazy" />
      </div>
    </Link>
  );
}
