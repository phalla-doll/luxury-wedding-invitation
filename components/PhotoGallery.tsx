'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const photos = [
  'https://picsum.photos/seed/gallery1/800/1200',
  'https://picsum.photos/seed/gallery2/800/1200',
  'https://picsum.photos/seed/gallery3/800/1200',
  'https://picsum.photos/seed/gallery4/800/1200',
  'https://picsum.photos/seed/gallery5/800/1200',
];

export default function PhotoGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const totalWidth = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-[var(--color-soft-butter)] overflow-hidden flex flex-col justify-center">
      <h2 className="text-4xl md:text-6xl text-center mb-12 font-serif absolute top-16 w-full z-10">Moments</h2>
      <div ref={scrollContainerRef} className="flex gap-8 px-8 md:px-24 h-[60vh] items-center w-max mt-16">
        {photos.map((src, i) => (
          <div key={i} className="relative h-full aspect-[2/3] rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
