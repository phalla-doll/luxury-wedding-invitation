import type {Metadata} from 'next';
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google';
import './globals.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WEDDING_DATA } from '@/constants/wedding';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cursive',
  display: 'swap',
});

export const metadata: Metadata = {
  title: WEDDING_DATA.seo.title,
  description: WEDDING_DATA.seo.description,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <div className="grain-overlay"></div>
        {children}
      </body>
    </html>
  );
}
