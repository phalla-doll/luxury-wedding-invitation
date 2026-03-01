import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';
import Invitation from '@/components/Invitation';
import OurStory from '@/components/OurStory';
import Proposal from '@/components/Proposal';
import EventDetails from '@/components/EventDetails';
import PhotoGallery from '@/components/PhotoGallery';
import LocationMap from '@/components/LocationMap';
import Closing from '@/components/Closing';

export default function Home() {
  return (
    <SmoothScroll>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-4 focus:rounded focus:shadow-lg">
        Skip to main content
      </a>
      <main id="main-content" className="relative w-full bg-[var(--color-soft-butter)]">
        <Hero />
        <Invitation />
        <OurStory />
        <Proposal />
        <EventDetails />
        <PhotoGallery />
        <LocationMap />
        <Closing />
      </main>
    </SmoothScroll>
  );
}
