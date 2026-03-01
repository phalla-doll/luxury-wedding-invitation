import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Proposal from '@/components/Proposal';
import EventDetails from '@/components/EventDetails';
import PhotoGallery from '@/components/PhotoGallery';
import RSVP from '@/components/RSVP';
import Closing from '@/components/Closing';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative w-full bg-[var(--color-ivory)]">
        <Hero />
        <OurStory />
        <Proposal />
        <EventDetails />
        <PhotoGallery />
        <RSVP />
        <Closing />
      </main>
    </SmoothScroll>
  );
}
