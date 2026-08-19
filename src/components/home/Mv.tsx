'use client';

import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Intersection } from '@splidejs/splide-extension-intersection';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import bg from '@/assets/common/bg.png';
import bgBottom from '@/assets/common/bg-bottom.png';
import bgBottomMd from '@/assets/common/bg-bottom--md.png';
import icon1 from '@/assets/common/icon_1.png';
import logo from '@/assets/common/logo.png';
import slide1 from '@/assets/top/mv_1.png';
import slide2 from '@/assets/top/mv_2.png';
import slide3 from '@/assets/top/mv_3.png';
import slide4 from '@/assets/top/mv_4.png';
import slide5 from '@/assets/top/mv_5.png';
import styles from './Mv.module.scss';

export default function Mv() {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const splide = new Splide(sliderRef.current, {
      type: 'loop',
      drag: false,
      focus: 'center',
      perPage: 1,
      autoWidth: true,
      autoScroll: {
        speed: 1.3,
        pauseOnHover: false,
      },
      intersection: {
        inView: {
          autoScroll: true,
        },
        outView: {
          autoScroll: false,
        },
      },
      arrows: false,
      pagination: false,
    }).mount({ Intersection, AutoScroll });

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className={styles.mv}>
      <div className={styles.bg}>
        <Image
          src={bg}
          width={1440}
          height={875}
          alt=""
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div ref={sliderRef} className={`splide ${styles.slider}`}>
        <div className="splide__track">
          <ul className="splide__list">
            {slides.map((slide, index) => (
              <li key={slide.src} className={`splide__slide ${styles.slide}`}>
                <Image
                  src={slide}
                  width={990}
                  height={737}
                  alt=""
                  loading="eager"
                  fetchPriority={index === 0 ? 'high' : undefined}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bgBottom}>
        <picture>
          <source media="(max-width: 768px)" srcSet={bgBottomMd.src} />
          <Image
            src={bgBottom}
            width={1440}
            height={310}
            alt=""
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
    </div>
  );
}
