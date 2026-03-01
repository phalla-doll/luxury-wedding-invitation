'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(window, {
      scrollTop(value?: number) {
        if (arguments.length) {
          lenis.scrollTo(value as number, { immediate: true });
          return;
        }
        return lenis.scroll || 0;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => lenis.scrollTo(lenis.scroll || 0, { immediate: true }));
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener('refresh', () => lenis.scrollTo(lenis.scroll, { immediate: true }));
      lenis.destroy();
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return <>{children}</>;
}
