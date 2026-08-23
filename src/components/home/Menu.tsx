import Image from 'next/image';
import icon3 from '@/assets/common/icon_3.png';
import modal1 from '@/assets/top/modal_1.png';
import modal2 from '@/assets/top/modal_2.png';
import modal3 from '@/assets/top/modal_3.png';
import modal4 from '@/assets/top/modal_4.png';
import modal5 from '@/assets/top/modal_5.png';
import modal6 from '@/assets/top/modal_6.png';
import modal7 from '@/assets/top/modal_7.png';
import modal8 from '@/assets/top/modal_8.png';
import modal9 from '@/assets/top/modal_9.png';
import Heading from '@/components/heading/Heading';
import Content from '@/components/layout/Content';
import ModalCard from '@/components/modal/ModalCard';
import styles from './Menu.module.scss';

const modalItems = [
  { src: modal1, label: 'さえみどり', detail: '説明文が入ります' },
  { src: modal2, label: 'おおいわせ', detail: '説明文が入ります' },
  { src: modal3, label: 'しゅんめい', detail: '説明文が入ります' },
  { src: modal4, label: '玉露やぶきた', detail: '説明文が入ります' },
  { src: modal5, label: 'まこも茶', detail: '説明文が入ります' },
  { src: modal6, label: '和紅茶', detail: '説明文が入ります' },
  { src: modal7, label: '米粉のどら焼き', detail: '説明文が入ります' },
  { src: modal8, label: '和合のあぶり餅', detail: '説明文が入ります' },
  { src: modal9, label: '磯部餅', detail: '説明文が入ります' },
];

export default function Menu() {
  return (
    <div id="anc_1" className={styles.menu}>
      <Content>
        <Heading label="おしながき" />
        <p className={styles.lead}>急須で三煎目までお楽しみいただけます。</p>
        <div className={styles.icon}>
          <Image src={icon3} width={102} height={122} alt="" loading="lazy" />
        </div>
        <ul className={styles.list}>
          {modalItems.map(item => (
            <ModalCard
              key={item.label}
              src={item.src}
              label={item.label}
              detail={item.detail}
            />
          ))}
        </ul>
      </Content>
    </div>
  );
}
