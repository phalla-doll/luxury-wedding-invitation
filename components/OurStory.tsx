'use client';
import { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const milestones = [
  { date: 'May 2018', title: 'First Met', desc: 'A chance encounter at a local coffee shop.', img: '/pexels-pixabay-265722.jpg' },
  { date: 'August 2019', title: 'First Trip', desc: 'Exploring mountains together.', img: '/pexels-minan1398-752785.jpg' },
  { date: 'December 2023', title: 'The Proposal', desc: 'A magical evening under stars.', img: '/pexels-minan1398-962353.jpg' },
];

function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.story-item');
      
      items.forEach((item: any, i) => {
        const isLeft = i % 2 === 0;
        const img = item.querySelector('.story-img');
        const text = item.querySelector('.story-text');

        gsap.fromTo(img, 
          { x: isLeft ? -50 : 50, opacity: 0, rotation: isLeft ? -5 : 5 },
          {
            x: 0, opacity: 1, rotation: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            }
          }
        );

        gsap.fromTo(text,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-soft-butter)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl text-center mb-20 font-serif">Our Story</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-golden-bronze)] opacity-20 hidden md:block" />

          <div className="space-y-24">
            {milestones.map((m, i) => (
              <div key={i} className={`story-item flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="story-img relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image src={m.img} alt={m.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="story-text w-full md:w-1/2 text-center md:text-left">
                  <p className="text-[var(--color-golden-bronze)] font-semibold tracking-widest uppercase mb-2">{m.date}</p>
                  <h3 className="text-3xl font-serif mb-4">{m.title}</h3>
                  <p className="text-lg text-gray-700">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(OurStory);
