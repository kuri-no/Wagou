'use client';

import { useEffect } from 'react';

export default function SiteEffects() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;

      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector<HTMLElement>(targetId);
      if (!target) return;

      e.preventDefault();

      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
