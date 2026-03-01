'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiClock, FiMapPin, FiCalendar, FiUser } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function EventDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.event-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-ivory)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl text-center mb-16 font-serif">The Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="event-card bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center">
            <FiCalendar className="text-4xl text-[var(--color-dusty-rose)] mb-4" />
            <h3 className="text-xl font-serif mb-2">Date</h3>
            <p className="text-gray-600">Saturday<br/>June 21, 2026</p>
          </div>
          
          <div className="event-card bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center">
            <FiClock className="text-4xl text-[var(--color-dusty-rose)] mb-4" />
            <h3 className="text-xl font-serif mb-2">Time</h3>
            <p className="text-gray-600">Ceremony: 4:00 PM<br/>Reception: 6:00 PM</p>
          </div>

          <div className="event-card bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center">
            <FiMapPin className="text-4xl text-[var(--color-dusty-rose)] mb-4" />
            <h3 className="text-xl font-serif mb-2">Venue</h3>
            <p className="text-gray-600">The Grand Estate<br/>123 Wedding Lane, NY</p>
          </div>

          <div className="event-card bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center">
            <FiUser className="text-4xl text-[var(--color-dusty-rose)] mb-4" />
            <h3 className="text-xl font-serif mb-2">Dress Code</h3>
            <p className="text-gray-600">Black Tie Optional<br/>Elegant & Formal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
