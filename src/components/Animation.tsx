'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ScaleIn } from '@/hooks/animation';

export default function ScaleInTrigger() {
  const pathname = usePathname();

  useEffect(() => {
    ScaleIn();
  }, [pathname]);
  return null;
}
