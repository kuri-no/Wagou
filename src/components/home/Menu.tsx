'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import icon3 from '@/assets/common/icon_3.png';
import modal1 from '@/assets/top/modal_1.jpg';
import modal2 from '@/assets/top/modal_2.jpg';
import modal3 from '@/assets/top/modal_3.jpg';
import modal4 from '@/assets/top/modal_4.jpg';
import modal5 from '@/assets/top/modal_5.jpg';
import modal6 from '@/assets/top/modal_6.jpg';
import modal7 from '@/assets/top/modal_7.jpg';
import modal8 from '@/assets/top/modal_8.jpg';
import modal9 from '@/assets/top/modal_9.jpg';
import Heading from '@/components/heading/Heading';
import Content from '@/components/layout/Content';
import Modal from '@/components/modal/Modal';
import { ScaleIn } from '@/hooks/animation';
import styles from './Menu.module.scss';

const modalItems = [
  {
    src: modal1,
    label: 'さえみどり',
    detail: `天然玉露ともいわれるほど、旨みのある煎茶です。<br />一煎一煎と淹れるびに、鮮やかになっていき、<br />お茶の色味とともに味わい深くなっていきます。`,
  },
  {
    src: modal2,
    label: 'おおいわせ',
    detail: `爽やかな香りとまろやかな甘みが特徴の品種茶です。<br />渋みが少なく飲みやすいので、<br />お茶初心者の方にもおすすめの一杯です。`,
  },
  {
    src: modal3,
    label: 'しゅんめい',
    detail: `若葉のような清々しい香りが立ちのぼる煎茶です。<br />すっきりとした後味で、<br />食事とともにも楽しんでいただけます。`,
  },
  {
    src: modal4,
    label: '玉露やぶきた',
    detail: `覆いをかけて育てた、旨みの凝縮された玉露です。<br />とろりとした口当たりと深いコクが広がり、<br />特別なひとときを演出します。`,
  },
  {
    src: modal5,
    label: 'まこも茶',
    detail: `古くから親しまれてきたまこもを使用したお茶です。<br />ノンカフェインでやさしい味わいのため、<br />お子様や妊娠中の方も安心してお楽しみください。`,
  },
  {
    src: modal6,
    label: '和紅茶',
    detail: `国産の茶葉から丁寧に作られた和紅茶です。<br />渋みが少なくほのかな甘みが特徴で、<br />ミルクを入れても美味しくお召し上がりください。`,
  },
  {
    src: modal7,
    label: '米粉のどら焼き',
    detail: `国産米粉を使用したもちもちの生地に、<br />甘さ控えめなあんをはさんだどら焼きです。<br />お茶との相性も抜群の一品です。`,
  },
  {
    src: modal8,
    label: '和合のあぶり餅',
    detail: `香ばしく炙り上げたお餅に、<br />特製のタレを絡めた和合オリジナルのあぶり餅です。<br />もちもちとした食感をお楽しみいただけます。`,
  },
  {
    src: modal9,
    label: '磯部餅',
    detail: `風味豊かな海苔で包んだ、香ばしい磯部餅です。<br />お醤油の香りともちの食感が絶妙に絡み合い、<br />お茶請けにぴったりの一品です。`,
  },
];

export default function Menu() {
  useEffect(() => {
    ScaleIn();
  }, []);
  return (
    <div id="anc_1" className={styles.menu}>
      <Content className={styles.menuContent}>
        <Heading label="おしながき" />
        <p className={styles.lead}>急須で三煎目までお楽しみいただけます。</p>
        <div className={styles.icon} data-scale-in>
          <Image src={icon3} alt="" width={102} height={122} loading="lazy" />
        </div>
        <ul className={styles.list}>
          {modalItems.map(item => (
            <Modal
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
