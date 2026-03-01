'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { WEDDING_DATA } from '@/constants/wedding';

gsap.registerPlugin(ScrollTrigger);

export default function EventDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.detail-row',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      if (flowerRef.current) {
        gsap.fromTo(flowerRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 0.1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-48 bg-[var(--color-soft-butter)] text-[var(--color-ink)]">
      <div ref={flowerRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-h-[800px] max-w-[800px] lg:max-h-[900px] lg:max-w-[900px] xl:max-h-[1000px] xl:max-w-[1000px] opacity-10 z-0 pointer-events-none">
        <Image src="/element/flower-pink.png" alt="" fill sizes="100vw" className="object-contain" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-8xl font-serif mb-16 md:mb-32 tracking-tight">The Details</h2>
        
        <div className="flex flex-col border-t border-black/20">
          {/* Row 1: Date & Time */}
          <div className="detail-row flex flex-col md:flex-row py-12 md:py-16 border-b border-black/20">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <span className="font-mono text-sm tracking-widest uppercase text-gray-500">When</span>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl md:text-6xl font-serif mb-4">{WEDDING_DATA.date.full}</h3>
              <p className="text-lg md:text-2xl text-gray-600 font-light">Ceremony begins at {WEDDING_DATA.times.ceremony}<br/>Reception to follow at {WEDDING_DATA.times.reception}</p>
            </div>
          </div>

          {/* Row 2: Venue */}
          <div className="detail-row flex flex-col md:flex-row py-12 md:py-16 border-b border-black/20">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <span className="font-mono text-sm tracking-widest uppercase text-gray-500">Where</span>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl md:text-6xl font-serif mb-4">{WEDDING_DATA.venue.name}</h3>
              <p className="text-lg md:text-2xl text-gray-600 font-light">{WEDDING_DATA.venue.street}<br/>{WEDDING_DATA.venue.city}, {WEDDING_DATA.venue.country}</p>
            </div>
          </div>

          {/* Row 3: Dress Code */}
          <div className="detail-row flex flex-col md:flex-row py-12 md:py-16 border-b border-black/20">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <span className="font-mono text-sm tracking-widest uppercase text-gray-500">Attire</span>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl md:text-6xl font-serif mb-4">{WEDDING_DATA.dressCode.type}</h3>
              <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed">{WEDDING_DATA.dressCode.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
