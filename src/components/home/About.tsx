import Image from 'next/image';
import icon2 from '@/assets/common/icon_2.png';
import img1 from '@/assets/top/img_1.png';
import img2 from '@/assets/top/img_2.png';
import img3 from '@/assets/top/img_3.png';
import img4 from '@/assets/top/img_4.png';
import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.body}>
        <h2 className={styles.title}>和み合う、茶舗和合</h2>
        <div className={styles.lead}>
          <p>
            こもださんの農園では、
            <br />
            真菰、米、お茶の栽培を行っています。
            <br />
            知多半島の海風と太陽のめぐみを有効活用し、
            <br />
            人と自然と植物、
            <br className="_md" />
            すべてが調和するように農業をしています。
            <br />
            そして、仲間たちが惜しみなく
            <br className="_md" />
            心と手をかけてくれるからこそ、
            <br />
            植物の本来もつ力を信頼し、
            <br className="_md" />
            それを活かすことができています。
          </p>
          <p>
            互いに無理しすぎることなく、助け合う心、
            <br className="_md" />
            分け合う心を大切に、
            <br />
            ちきゅうであそぶように農園をしています。
            <br />
            こうしてうまれた一杯のお茶を、
            <br />
            おもてなしの心とともにお届けしたい。
            <br />
            茶舗 和合は、日常から離れ、ほっとゆっくりひとやすみ。
          </p>
          <p>
            からだとこころを清め、調える、お茶所です。
            <br />
            あなたの大切な今日という日の、
            <br />
            なごみのひとときと
            <br />
            なりますように。
          </p>
        </div>
        <div className={styles.icon} data-scale-in>
          <Image src={icon2} alt="" width={190} height={142} loading="lazy" />
        </div>
      </div>
      <div className={`${styles.deco} ${styles.deco_1}`}>
        <Image src={img1} alt="" width={556} height={610} loading="lazy" />
      </div>
      <div className={`${styles.deco} ${styles.deco_2}`}>
        <Image src={img2} alt="" width={639} height={645} loading="lazy" />
      </div>
      <div className={`${styles.deco} ${styles.deco_3}`}>
        <Image src={img3} alt="" width={516} height={653} loading="lazy" />
      </div>
      <div className={`${styles.deco} ${styles.deco_4}`}>
        <Image src={img4} alt="" width={597} height={652} loading="lazy" />
      </div>
    </div>
  );
}
