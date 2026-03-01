'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { WEDDING_DATA } from '@/constants/wedding';

const agendaItems = WEDDING_DATA.agenda;

export default function Proposal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .fade-up-delay-0 { animation-delay: 0.2s; }
        .fade-up-delay-1 { animation-delay: 0.4s; }
        .fade-up-delay-2 { animation-delay: 0.6s; }
        .fade-up-delay-3 { animation-delay: 0.8s; }
        .fade-up-delay-4 { animation-delay: 1.0s; }
        .fade-up-delay-5 { animation-delay: 1.2s; }
      `}</style>
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src={WEDDING_DATA.images.proposal || '/pexels-mastercowley-1128783.jpg'}
          alt="The Venue"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          style={{ filter: 'blur(10px)', transform: 'scale(1.1)' }}
          referrerPolicy="no-referrer"
        />
      </div>

      <div ref={textRef} className="relative z-10 text-white max-w-4xl w-full px-6 flex flex-col items-center">
        <h2 className="fade-up fade-up-delay-0 text-4xl md:text-6xl font-serif mb-12 text-center tracking-wide">
          Wedding Agenda
        </h2>

        <div className="w-full max-w-2xl relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/30 -translate-x-1/2" />

          <div className="space-y-8">
            {agendaItems.map((item, i) => (
              <div key={i} className={`fade-up fade-up-delay-${i + 1} flex flex-col md:flex-row items-start md:items-center relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-3 h-3 bg-[var(--color-golden-bronze)] rounded-full -translate-x-1/2 mt-2 md:mt-0 shadow-[0_0_10px_rgba(170,119,51,0.5)]" />
                
                <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                  <p className="text-[var(--color-golden-bronze)] font-mono text-sm tracking-widest mb-1">{item.time}</p>
                  <h3 className="text-2xl font-serif mb-1">{item.event}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
