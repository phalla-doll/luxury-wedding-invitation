import type { WeddingData } from '@/types/wedding';

export const WEDDING_DATA: WeddingData = {
  couple: {
    groom: {
      firstName: 'Jordan',
    },
    bride: {
      firstName: 'Sophia',
    },
    combined: 'Jordan & Sophia',
    combinedAnd: 'Jordan and Sophia',
  },

  date: {
    full: 'Saturday, June 21, 2026',
    date: 'June 21, 2026',
    day: 'Saturday',
    month: 'June',
    year: 2026,
    dayNumber: 21,
  },

  times: {
    ceremony: '4:00 PM',
    reception: '6:00 PM',
    preCeremony: '1:00 PM',
    guestArrival: '3:00 PM',
    cocktailHour: '5:30 PM',
    preparation: '4:00 AM',
  },

  venue: {
    name: 'Park Avenue',
    address: 'Koh Pich City Hall, Phnom Penh, Cambodia',
    street: 'Koh Pich City Hall',
    city: 'Phnom Penh',
    country: 'Cambodia',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950.5317490644426!2d104.94066168546576!3d11.550501134758159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310957422319ef25%3A0x386728e61a9d4d5d!2sKoh%20Pich%20City%20Hall!5e0!3m2!1sen!2skh!4v1772349739015!5m2!1sen!2skh',
  },

  dressCode: {
    type: 'Black Tie Optional',
    description: 'We ask that men wear a tuxedo or a dark suit and tie, and women wear an evening gown or midi-length cocktail dress.',
    menGuidelines: 'Tuxedo or dark suit and tie',
    womenGuidelines: 'Evening gown or midi-length cocktail dress',
  },

  agenda: [
    { time: '4:00 AM', event: 'Preparation', desc: 'Bride and Groom getting ready' },
    { time: '1:00 PM', event: 'First Look', desc: 'A private moment before the ceremony' },
    { time: '3:00 PM', event: 'Guest Arrival', desc: 'Welcome drinks and seating' },
    { time: '4:00 PM', event: 'Ceremony', desc: 'Exchanging of vows' },
    { time: '5:30 PM', event: 'Cocktail Hour', desc: 'Drinks, hors d\'oeuvres, and photos' },
    { time: '7:00 PM', event: 'Reception', desc: 'Dinner, toasts, and dancing' },
  ],

  story: [
    { 
      date: 'May 2018', 
      title: 'First Met', 
      desc: 'A chance encounter at a local coffee shop.', 
      img: '/pexels-pixabay-265722.jpg' 
    },
    { 
      date: 'August 2019', 
      title: 'First Trip', 
      desc: 'Exploring mountains together.', 
      img: '/pexels-minan1398-752785.jpg' 
    },
    { 
      date: 'December 2023', 
      title: 'The Proposal', 
      desc: 'A magical evening under stars.', 
      img: '/pexels-minan1398-962353.jpg' 
    },
  ],

  galleryPhotos: [
    '/pexels-jibarofoto-1560303.jpg',
    '/pexels-jonathanborba-3292701.jpg',
    '/pexels-emma-bauso-1183828-2253870.jpg',
    '/pexels-jin-wedding-3859587-5729057.jpg',
    '/pexels-pixabay-157757.jpg',
  ],

  images: {
    hero: '/pexels-panditwiguna-2788494.jpg',
    proposal: '/pexels-mastercowley-1128783.jpg',
  },

  seo: {
    title: 'Jordan & Sophia | Wedding Invitation',
    description: 'Join us to celebrate the wedding of Jordan and Sophia.',
  },

  site: {
    title: 'Jordan & Sophia | Wedding Invitation',
    description: 'Join us to celebrate the wedding of Jordan and Sophia on June 21, 2026 at Park Avenue in Phnom Penh, Cambodia.',
  },
};
