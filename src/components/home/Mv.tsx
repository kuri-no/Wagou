'use client';

import Splide from '@splidejs/splide';
import { Intersection } from '@splidejs/splide-extension-intersection';
import '@splidejs/splide/css/core';
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
import useScroll from '@/hooks/useScroll';
import styles from './Mv.module.scss';

export default function Mv() {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const sliderRef = useRef<HTMLDivElement>(null);

  const { handleAnchorClick } = useScroll();

  useEffect(() => {
    if (!sliderRef.current) return;

    const mvSlider = new Splide(sliderRef.current, {
      type: 'fade',
      rewind: true,
      perPage: 1,
      arrows: false,
      pagination: true,
      autoplay: true,
      interval: 3000,
      speed: 400,
      pauseOnHover: false,
      intersection: {
        inView: {
          autoplay: true,
        },
        outView: {
          autoplay: false,
        },
      },
    }).mount({ Intersection });

    return () => {
      mvSlider.destroy();
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

      <div className={styles.body}>
        <div className={styles.menu}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logo}
              width={130}
              height={130}
              alt={process.env.NEXT_PUBLIC_SITE_TITLE}
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link
                  href="/about/"
                  className={styles.link}
                  onClick={e => handleAnchorClick(e, '/about/')}
                >
                  和合について
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  href="/#anc_1"
                  scroll={false}
                  className={styles.link}
                  onClick={e => handleAnchorClick(e, '/#anc_1')}
                >
                  おしながき
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  href="/news/"
                  className={styles.link}
                  onClick={e => handleAnchorClick(e, '/news/')}
                >
                  日々のこと
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  href="/#anc_2"
                  scroll={false}
                  className={styles.link}
                  onClick={e => handleAnchorClick(e, '/#anc_2')}
                >
                  アクセス
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div ref={sliderRef} className={`${styles.slider} splide`}>
          <div className="splide__track">
            <ul className="splide__list">
              {slides.map(slide => (
                <li key={slide.src} className={`${styles.slide} splide__slide`}>
                  <Image
                    src={slide}
                    width={990}
                    height={737}
                    alt=""
                    loading="eager"
                    fetchPriority="high"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.label}>
            <span>ひと休み</span>
            <span>和み合う</span>
            <span>茶舗和合</span>
          </p>
          <div className={styles.icon}>
            <Image
              src={icon1}
              width={200}
              height={131}
              alt=""
              loading="eager"
              fetchPriority="high"
            />
          </div>
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
