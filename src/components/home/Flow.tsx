'use client';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import icon4 from '@/assets/common/icon_4.png';
import slide1 from '@/assets/top/slide_1.png';
import slide2 from '@/assets/top/slide_2.png';
import slide3 from '@/assets/top/slide_3.png';
import slide4 from '@/assets/top/slide_4.png';
import Heading from '@/components/heading/Heading';
import Content from '@/components/layout/Content';
import styles from './Flow.module.scss';

const flowItems = [
  {
    label: 'かぶせ',
    image: slide1,
    detail:
      '八十八夜前後、新芽が芽吹く頃にお茶の木に黒い幕をかけ10日ほど待ちます。一手間をかけて日光を遮ることで、新芽を柔らかく保ち、緑濃く、旨み成分豊富なお茶になります。このような栽培方法を被覆栽培といい、玉露やかぶせ茶など、旨みの強いお茶を作るために用いられます。',
  },
  {
    label: '刈り取り',
    image: slide2,
    detail:
      '無農薬栽培のため、茶畑の除草作業を行った後、茶葉の刈り取りを行います。新芽が最も柔らかく、栄養をたっぷりと蓄えたタイミングを見極め、一枚一枚の葉の状態を確かめながら丁寧に収穫します。',
  },
  {
    label: '茶工場へ',
    image: slide3,
    detail:
      '摘み取った茶葉は、発酵しないよう、すぐに茶工場へ。蒸し→揉み→乾燥とすべての加工工程に目を通し、より良いお茶となるよう調整を行いながらお茶を仕上げていきます。年々の気候変動や茶葉の生育状況に合わせて、加工に工夫を凝らし、茶葉の持つ力を存分に引き出すのが茶師の技術です。',
  },
  {
    label: '乾燥',
    image: slide4,
    detail:
      '煎茶の製造において乾燥は、茶葉の品質を安定させ香りを引き出す大切な工程です。揉みながら形を整えた茶葉を温風でゆっくりと乾かし、含まれる水分をおよそ5％ほどまで減らします。乾燥によって保存性が高まり、茶葉特有の爽やかな香りが際立ちます。',
  },
];

export default function Flow() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const flowSlider = new Splide(sliderRef.current, {
      rewind: false,
      perPage: 1,
      gap: '2.5vw',
      fixedWidth: 'clamp(540px, 44.7vw, 643px)',
      padding: { left: '15.3%', right: '15.3%' },
      arrows: true,
      autoplay: false,
      speed: 1500,
      pauseOnHover: false,
      breakpoints: {
        768: {
          gap: '3vw',
          fixedWidth: '70.7vw',
          padding: { left: '6.4%', right: '6.4%' },
        },
      },
    });

    flowSlider.on('mounted move', () => {
      const bar = progressBarRef.current;
      if (!bar) return;
      const end = flowSlider.Components.Controller.getEnd() + 1;
      const rate = Math.min((flowSlider.index + 1) / end, 1);
      bar.style.width = `${rate * 100}%`;
    });

    flowSlider.mount();

    return () => {
      flowSlider.destroy();
    };
  }, []);

  return (
    <div className={styles.flow}>
      <Content>
        <Heading label="煎茶ができるまで" />
        <p className={styles.lead}>
          農薬不使用有機栽培による、
          <br className="_md" />
          人体にも環境にも優しいお茶づくりをしています。
          <br />
          茶畑を営むことで山の緑や豊かな水源を守ることにも
          <br className="_md" />
          繋がると考えています。
        </p>
      </Content>
      <div className={styles.icon}>
        <Image src={icon4} alt="" width={229} height={172} loading="lazy" />
      </div>
      <div ref={sliderRef} className="splide">
        <div className="splide__track">
          <ol className="splide__list">
            {flowItems.map((item, index) => (
              <li key={item.label} className="splide__slide">
                <div className={styles.row}>
                  <div className={styles.content}>
                    <p className={styles.number}>
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className={styles.label}>{item.label}</h3>
                    <p className={styles.detail}>{item.detail}</p>
                  </div>
                  <div className={styles.image}>
                    <Image
                      src={item.image}
                      alt=""
                      width={250}
                      height={333}
                      loading="lazy"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.controls}>
          <div className="my-carousel-progress">
            <div
              ref={progressBarRef}
              className="my-carousel-progress-bar"
            ></div>
          </div>
          <div className="splide__arrows">
            <button
              type="button"
              className="splide__arrow splide__arrow--prev"
            ></button>
            <button
              type="button"
              className="splide__arrow splide__arrow--next"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
