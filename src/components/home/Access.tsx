import Button from '@/components/button/Button';
import Content from '@/components/layout/Content';
import styles from './Access.module.scss';

export default function Access() {
  return (
    <div id="anc_2" className={styles.access}>
      <Content>
        <div className={styles.body}>
          <div className={styles.map}>
            <iframe
              title="茶舗 和合の地図"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.8310592328153!2d136.8366917757525!3d34.88558837285459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60048768da9f32d9%3A0x8f3f6276902f957f!2z6Iy26IiXIOWSjOWQiA!5e0!3m2!1sja!2sjp!4v1787397109705!5m2!1sja!2sjp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div className={styles.content}>
            <p className={styles.label}>茶舗 和合</p>
            <p className={styles.detail}>
              愛知県常滑市栄町6丁目166
              <br />
              名鉄常滑駅から徒歩15分
            </p>
            <p className={styles.tel}>050-0000-0000</p>
            <Button
              href="https://maps.app.goo.gl/sFwV36UioEouegU38"
              text="Google mapへ"
              variant="outline"
              blank
            />
          </div>
        </div>
      </Content>
    </div>
  );
}
