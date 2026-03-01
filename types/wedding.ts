export interface WeddingDate {
  full: string;
  date: string;
  day: string;
  month: string;
  year: number;
  dayNumber: number;
}

export interface WeddingTimes {
  ceremony: string;
  reception: string;
  preCeremony: string;
  guestArrival: string;
  cocktailHour: string;
  preparation: string;
}

export interface Venue {
  name: string;
  address: string;
  street: string;
  city: string;
  country: string;
  mapsEmbedUrl: string;
  latitude?: number;
  longitude?: number;
}

export interface Couple {
  groom: {
    firstName: string;
    fullName?: string;
  };
  bride: {
    firstName: string;
    fullName?: string;
  };
  combined: string;
  combinedAnd: string;
}

export interface DressCode {
  type: string;
  description: string;
  menGuidelines: string;
  womenGuidelines: string;
}

export interface AgendaItem {
  time: string;
  event: string;
  desc: string;
}

export interface StoryMilestone {
  date: string;
  title: string;
  desc: string;
  img: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

export interface WeddingData {
  couple: Couple;
  date: WeddingDate;
  times: WeddingTimes;
  venue: Venue;
  dressCode: DressCode;
  agenda: AgendaItem[];
  story: StoryMilestone[];
  galleryPhotos: string[];
  images: {
    hero: string;
    proposal?: string;
  };
  seo: SeoMetadata;
  site: {
    title: string;
    description: string;
  };
}
