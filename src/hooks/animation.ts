import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FadeIn() {
  const items = gsap.utils.toArray<HTMLElement>(
    '[data-fade-in]',
  );

  for (const item of items) {
    item.dataset.fadeInDone = 'true';

    const duration = parseFloat(item.dataset.duration ?? '0.6');
    const delay = parseFloat(item.dataset.delay ?? '0');
    const start = item.dataset.start ?? 'top 80%';

    gsap.fromTo(
      item,
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start,
          // markers: true,
          toggleActions: 'play none none none',
        },
      },
    );
  }
}

export function ScaleIn() {
  const items = gsap.utils.toArray<HTMLElement>(
    '[data-scale-in]',
  );

  for (const item of items) {
    item.dataset.scaleInDone = 'true';

    const duration = parseFloat(item.dataset.duration ?? '1.0');
    const delay = parseFloat(item.dataset.delay ?? '0');
    const start = item.dataset.start ?? 'top 80%';

    gsap.fromTo(
      item,
      { autoAlpha: 0, y: 40, scale: 0.6 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: item,
          start,
          // markers: true,
          toggleActions: 'play none none none',
        },
      },
    );
  }
}
