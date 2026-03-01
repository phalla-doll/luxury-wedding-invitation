'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Image from 'next/image';
import { WEDDING_DATA } from '@/constants/wedding';

export default function Closing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sigRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sigRef.current) return;
      const splitSig = new SplitType(sigRef.current, { types: 'chars' });
      
      gsap.from(splitSig.chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      });

      if (flowerRef.current) {
        gsap.to(flowerRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      }

      return () => splitSig.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen flex flex-col items-center justify-center bg-[var(--color-soft-butter)] text-center px-6">
      <p className="text-xl md:text-3xl font-serif italic mb-12 max-w-2xl leading-relaxed text-gray-800">
        &quot;Whatever our souls are made of, his and mine are the same.&quot;
      </p>

      <div ref={sigRef} className="text-5xl md:text-8xl text-[var(--color-golden-bronze)] font-[family-name:var(--font-cursive)]">
        {WEDDING_DATA.couple.combined}
      </div>

      <p className="mt-16 text-sm tracking-widest uppercase text-gray-500">
        We look forward to sharing our special day with you.
      </p>

      <div ref={flowerRef} className="absolute bottom-0 right-0 w-[45vw]">
        <Image
          src="/element/flower-green.png"
          alt="Green flower decoration"
          width={0}
          height={0}
          sizes="45vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
