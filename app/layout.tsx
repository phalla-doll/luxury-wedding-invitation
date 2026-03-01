import type {Metadata} from 'next';
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cursive',
});

export const metadata: Metadata = {
  title: 'John & Emma | Wedding Invitation',
  description: 'Join us to celebrate the wedding of John and Emma.',
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
