'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, Suspense, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function InvitationContent() {
  const searchParams = useSearchParams();
  const [guestName, setGuestName] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setGuestName(searchParams.get('guest'));
  }, [searchParams]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.invitation-text',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-soft-butter)] text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="invitation-text text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-[var(--color-ink)]">
          {guestName ? (
            <>
              <span className="text-[var(--color-golden-bronze)] italic font-light">{guestName}</span>,
              <br />
              you are joyfully invited
              <br />
              to celebrate with us.
            </>
          ) : (
            <>
              You are joyfully invited
              <br />
              to celebrate with us.
            </>
          )}
        </h2>
      </div>
    </section>
  );
}

export default function Invitation() {
  return (
    <Suspense fallback={<section className="py-24 md:py-32 bg-[var(--color-soft-butter)]"></section>}>
      <InvitationContent />
    </Suspense>
  );
}
