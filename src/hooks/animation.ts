import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScaleIn() {
  const items = gsap.utils.toArray<HTMLElement>('[data-scale-in]');

  for (const item of items) {
    if (item.dataset.scaleInDone === 'true') continue;
    item.dataset.scaleInDone = 'true';

    const duration = parseFloat(item.dataset.duration ?? '1.0');
    const delay = parseFloat(item.dataset.delay ?? '0');
    const start = item.dataset.start ?? 'top 90%';

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
          once: true,
        },
      },
    );
  }
}
