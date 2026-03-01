'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Proposal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        }
      });

      tl.to(bgRef.current, { filter: 'blur(10px)', scale: 1.1, duration: 1 })
        .fromTo('.proposal-line', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.3, duration: 1 },
          "<0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/proposal/1920/1080"
          alt="The Proposal"
          fill
          className="object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
      </div>

      <div ref={textRef} className="relative z-10 text-center text-white max-w-3xl px-6">
        <p className="proposal-line text-2xl md:text-4xl font-serif mb-6 leading-relaxed">
          &quot;I asked her to be mine forever...&quot;
        </p>
        <p className="proposal-line text-2xl md:text-4xl font-serif mb-6 leading-relaxed">
          &quot;...under a sky full of stars.&quot;
        </p>
        <p className="proposal-line text-2xl md:text-4xl font-serif leading-relaxed">
          &quot;And she said yes.&quot;
        </p>
      </div>
    </section>
  );
}
