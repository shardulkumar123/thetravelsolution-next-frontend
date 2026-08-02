export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  createdAt?: string;
}

export interface ItineraryStep {
  day?: string;
  title: string;
  details: string;
}

export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
  category?: string;
  itinerary: ItineraryStep[];
  inclusions: string[];
  exclusions: string[];
}
