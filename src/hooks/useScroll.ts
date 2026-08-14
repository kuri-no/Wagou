'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';

const scrollToHash = (hash: string, behavior: ScrollBehavior = 'smooth') => {
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

  return { scrollToHash: useCallback(scrollToHash, []) };
}
