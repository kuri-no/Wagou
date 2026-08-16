'use client';

import { usePathname } from 'next/navigation';
import type { MouseEvent } from 'react';
import { useCallback, useEffect } from 'react';

export const scrollToHash = (
  hash: string,
  behavior: ScrollBehavior = 'smooth',
) => {
  const target = document.getElementById(hash.replace(/^#/, ''));
  if (!target) return;

  target.scrollIntoView({ behavior });
};

export default function useScroll() {
  const pathname = usePathname();

  useEffect(() => {
    void pathname;

    if (!window.location.hash) return;

    scrollToHash(window.location.hash);
  }, [pathname]);

  const handleAnchorClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string) => {
      const [path, hash] = href.split('#');
      if (!hash || path !== pathname) return;

      const target = document.getElementById(hash);
      if (!target) return;

      e.preventDefault();
      scrollToHash(hash);
    },
    [pathname],
  );

  return { scrollToHash, handleAnchorClick };
}
