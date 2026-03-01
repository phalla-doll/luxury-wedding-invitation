'use client';
import { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const photos = [
  '/pexels-jibarofoto-1560303.jpg',
  '/pexels-jonathanborba-3292701.jpg',
  '/pexels-emma-bauso-1183828-2253870.jpg',
  '/pexels-jin-wedding-3859587-5729057.jpg',
  '/pexels-pixabay-157757.jpg',
];

function PhotoGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const rafId = requestAnimationFrame(() => {
        const totalWidth = Math.max(0, container.scrollWidth - window.innerWidth);

        if (totalWidth > 0) {
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
        }

        if (flowerRef.current) {
          gsap.fromTo(flowerRef.current,
            { x: 0, y: 0, scale: 1, rotation: 0 },
            {
              x: -100,
              y: -80,
              scale: 1.1,
              rotation: 5,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              }
            }
          );
        }

        return () => cancelAnimationFrame(rafId);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-[var(--color-soft-butter)] overflow-hidden flex flex-col justify-center">
      <h2 className="text-4xl md:text-6xl text-center mb-12 font-serif absolute top-16 w-full z-10">Moments</h2>
      <div ref={flowerRef} className="flower-bg absolute top-4 right-4 w-[60vw] h-[60vw] max-h-[250px] max-w-[250px] md:top-8 md:right-8 md:w-[50vw] md:h-[50vw] md:max-h-[400px] md:max-w-[400px] lg:top-12 lg:right-12 lg:w-[45vw] lg:h-[45vw] lg:max-h-[600px] lg:max-w-[600px] opacity-15 z-0 pointer-events-none">
        <Image src="/element/flower-blue.png" alt="" fill sizes="40vw" className="object-contain" />
      </div>
      <div ref={scrollContainerRef} className="flex gap-4 md:gap-8 px-4 md:px-24 h-[50vh] md:h-[60vh] items-center w-max mt-16">
        {photos.map((src, i) => (
          <div key={i} className="relative h-full aspect-[2/3] rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(PhotoGallery);
