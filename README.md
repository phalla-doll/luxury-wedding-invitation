# Luxury Wedding Invitation

A beautiful, animated wedding invitation website with elegant design and smooth scroll animations. Built for Jordan & Sophia's wedding on June 21, 2026.

![Wedding Invitation](https://github.com/phalla-doll/luxury-wedding-invitation/blob/main/public/SCR-20260301-nezf.jpeg)

## Features

- **Hero Section**: Full-screen immersive intro with animated text and parallax background
- **Personalized Invitations**: Guest name support via `?guest=Name` URL parameter
- **Our Story & Proposal**: Narrative sections with scroll-triggered animations
- **Event Details**: Date, time, venue, and dress code information
- **Photo Gallery**: Horizontal scrolling gallery with grayscale-to-color hover effects
- **Interactive Map**: Venue location with MapLibre GL integration
- **Smooth Scrolling**: Lenis-powered smooth scroll experience
- **Confetti Effects**: Celebration animations for special moments
- **Responsive Design**: Mobile-first, works beautifully on all devices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19, TypeScript
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: GSAP 3 + ScrollTrigger
- **Fonts**: Inter, Playfair Display, Great Vimes (Google Fonts)
- **Maps**: MapLibre GL + react-map-gl
- **Effects**: Canvas Confetti
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd luxury-wedding-invitation
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:
```
GEMINI_API_KEY="your-gemini-api-key"
APP_URL="http://localhost:3000"
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personalize Names & Details

Edit these files to customize the invitation:

**Couple Names:**
- `components/Hero.tsx` - Hero section names (line 93)
- `app/layout.tsx` - Page title and metadata (line 22)

**Event Date:**
- `components/Hero.tsx` - Hero date display (line 96)
- `components/EventDetails.tsx` - Full date details (line 40)

**Venue Information:**
- `components/EventDetails.tsx` - Venue name and address (lines 51-52)

**Dress Code:**
- `components/EventDetails.tsx` - Attire guidelines (lines 62-63)

### Replace Images

Update the image URLs in these components:
- `components/Hero.tsx` - Hero background image (line 81)
- `components/PhotoGallery.tsx` - Gallery photos array (lines 10-15)

### Change Color Scheme

Modify custom colors in `app/globals.css`:
```css
:root {
  --color-soft-butter: #your-color;
  --color-ink: #your-color;
  --color-golden-bronze: #your-color;
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

### Docker (Alternative)

```bash
docker build -t wedding-invitation .
docker run -p 3000:3000 wedding-invitation
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run clean    # Clean Next.js cache
```

## Project Structure

```
luxury-wedding-invitation/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page structure
│   └── globals.css         # Global styles & custom colors
├── components/
│   ├── Hero.tsx            # Hero section with parallax
│   ├── Invitation.tsx      # Personalized invitation
│   ├── OurStory.tsx        # Couple's story
│   ├── Proposal.tsx        # Proposal narrative
│   ├── EventDetails.tsx    # Event information
│   ├── PhotoGallery.tsx    # Horizontal gallery
│   ├── LocationMap.tsx     # Interactive map
│   ├── Closing.tsx         # Closing message
│   └── SmoothScroll.tsx    # Lenis smooth scroll wrapper
├── hooks/
│   └── use-mobile.ts       # Mobile detection
└── lib/
    └── utils.ts            # Utility functions
```

## License

This project is private and proprietary.

---

Made with ❤️ for Jordan & Sophia's wedding
