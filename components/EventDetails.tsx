'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EventDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-[var(--color-ivory)] text-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-8xl font-serif mb-20 md:mb-32 tracking-tight">The Details</h2>
        
        <div className="flex flex-col border-t border-black/20">
          {/* Row 1: Date & Time */}
          <div className="detail-row flex flex-col md:flex-row py-12 md:py-16 border-b border-black/20">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <span className="font-mono text-sm tracking-widest uppercase text-gray-500">When</span>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-4xl md:text-6xl font-serif mb-4">Saturday, June 21, 2026</h3>
              <p className="text-xl md:text-2xl text-gray-600 font-light">Ceremony begins at 4:00 PM<br/>Reception to follow at 6:00 PM</p>
            </div>
          </div>

          {/* Row 2: Venue */}
          <div className="detail-row flex flex-col md:flex-row py-12 md:py-16 border-b border-black/20">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <span className="font-mono text-sm tracking-widest uppercase text-gray-500">Where</span>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-4xl md:text-6xl font-serif mb-4">The Grand Estate</h3>
              <p className="text-xl md:text-2xl text-gray-600 font-light">123 Wedding Lane<br/>New York, NY 10001</p>
            </div>
          </div>

          {/* Row 3: Dress Code */}
          <div className="detail-row flex flex-col md:flex-row py-12 md:py-16 border-b border-black/20">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <span className="font-mono text-sm tracking-widest uppercase text-gray-500">Attire</span>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-4xl md:text-6xl font-serif mb-4">Black Tie Optional</h3>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">We ask that men wear a tuxedo or a dark suit and tie, and women wear an evening gown or midi-length cocktail dress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
