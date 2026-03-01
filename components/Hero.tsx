'use client';
import { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Image from 'next/image';

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!titleRef.current || !dateRef.current || !imageRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const splitTitle = new SplitType(titleRef.current!, { types: 'chars' });
      
      const tl = gsap.timeline();

      tl.fromTo(imageRef.current, 
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
      )
      .from(splitTitle.chars, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out'
      }, "-=1")
      .from(dateRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      }, "-=0.5");

      // Parallax effect for text
      gsap.to('.hero-text-container', {
        y: '60%',
        scale: 0.8,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Subtle parallax for background image
      gsap.to(imageRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      return () => {
        splitTitle.revert();
      };
    }, containerRef);

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          ref={imageRef}
          src="/pexels-panditwiguna-2788494.jpg"
          alt="Kakda and Savry"
          fill
          sizes="100vw"
          className="object-cover scale-110"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
      </div>

      <div className="hero-text-container relative z-10 text-center text-white flex flex-col items-center px-6">
        <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-serif mb-4 tracking-tight drop-shadow-2xl">
          Kakda & Savry
        </h1>
        <p ref={dateRef} className="text-xl md:text-2xl font-sans tracking-widest uppercase drop-shadow-md text-white/90">
          Are Getting Married <br/> June 21, 2026
        </p>
      </div>
    </section>
  );
}

export default memo(Hero);
