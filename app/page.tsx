import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Proposal from '@/components/Proposal';
import EventDetails from '@/components/EventDetails';
import PhotoGallery from '@/components/PhotoGallery';
import LocationMap from '@/components/LocationMap';
import Closing from '@/components/Closing';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative w-full bg-[var(--color-soft-butter)]">
        <Hero />
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
