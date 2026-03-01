'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  delay: number;
  parallaxSpeed: number;
}

interface Butterfly {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  delay: number;
  wingSpeed: number;
  parallaxSpeed: number;
}

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sparkles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 6,
      opacity: 0.25 + Math.random() * 0.3,
      speed: 10 + Math.random() * 15,
      delay: Math.random() * 5,
      parallaxSpeed: 0.2 + Math.random() * 0.4,
    }));

    const butterflies: Butterfly[] = Array.from({ length: 8 }, (_, i) => ({
      id: i + 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 10,
      opacity: 0.25 + Math.random() * 0.15,
      speed: 15 + Math.random() * 15,
      delay: Math.random() * 3,
      wingSpeed: 0.2 + Math.random() * 0.3,
      parallaxSpeed: 0.5 + Math.random() * 0.5,
    }));

    sparkles.forEach((sparkle) => {
      const el = document.createElement('div');
      el.className = 'absolute rounded-full';
      el.style.left = `${sparkle.x}%`;
      el.style.top = `${sparkle.y}%`;
      el.style.width = `${sparkle.size}px`;
      el.style.height = `${sparkle.size}px`;
      el.style.backgroundColor = '#aa7733';
      el.style.opacity = sparkle.opacity.toString();
      el.style.boxShadow = `0 0 ${sparkle.size * 3}px #aa7733, 0 0 ${sparkle.size}px #c9a068`;
      container.appendChild(el);

      gsap.to(el, {
        y: `-${60 + Math.random() * 60}px`,
        x: `${(Math.random() - 0.5) * 80}px`,
        opacity: sparkle.opacity * 0.5,
        duration: sparkle.speed,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: sparkle.delay,
      });

      gsap.to(el, {
        scale: 0.8,
        duration: sparkle.speed * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: sparkle.delay,
      });

      gsap.to(el, {
        y: () => -(window.innerHeight * sparkle.parallaxSpeed),
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    });

    butterflies.forEach((butterfly) => {
      const el = document.createElement('div');
      el.className = 'absolute';
      el.style.left = `${butterfly.x}%`;
      el.style.top = `${butterfly.y}%`;
      el.style.width = `${butterfly.size}px`;
      el.style.height = `${butterfly.size}px`;
      el.style.opacity = butterfly.opacity.toString();
      el.style.filter = 'drop-shadow(0 0 5px rgba(170, 119, 51, 0.3))';

      el.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
          <ellipse cx="12" cy="12" rx="2" ry="8" fill="#aa7733" transform="rotate(45 12 12)" class="wing-left"/>
          <ellipse cx="12" cy="12" rx="2" ry="8" fill="#aa7733" transform="rotate(-45 12 12)" class="wing-right"/>
          <ellipse cx="12" cy="12" rx="1.5" ry="5" fill="#d4b896" transform="rotate(45 12 12)" class="wing-left-inner"/>
          <ellipse cx="12" cy="12" rx="1.5" ry="5" fill="#d4b896" transform="rotate(-45 12 12)" class="wing-right-inner"/>
        </svg>
      `;

      container.appendChild(el);

      gsap.to(el, {
        y: `-${100 + Math.random() * 100}px`,
        x: `${(Math.random() - 0.5) * 120}px`,
        rotation: (Math.random() - 0.5) * 30,
        duration: butterfly.speed,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: butterfly.delay,
      });

      const wingLeft = el.querySelector('.wing-left');
      const wingRight = el.querySelector('.wing-right');

      if (wingLeft && wingRight) {
        gsap.to([wingLeft, wingRight], {
          scaleX: 0.3,
          duration: butterfly.wingSpeed,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }

      gsap.to(el, {
        y: () => -(window.innerHeight * butterfly.parallaxSpeed),
        rotation: (Math.random() - 0.5) * 20,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    });

    return () => {
      if (container) {
        container.innerHTML = '';
      }
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ overflow: 'hidden' }}
    />
  );
}
