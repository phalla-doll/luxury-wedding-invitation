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

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const refreshHandler = () => lenis.scrollTo(lenis.scroll || 0, { immediate: true });
    
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

    ScrollTrigger.addEventListener('refresh', refreshHandler);
    ScrollTrigger.refresh();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      ScrollTrigger.removeEventListener('refresh', refreshHandler);
      ScrollTrigger.scrollerProxy(window);
      lenis.destroy();
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return <>{children}</>;
}
