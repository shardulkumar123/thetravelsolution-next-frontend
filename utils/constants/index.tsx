import React from "react";

import {
  Award,
  Bus,
  Calendar,
  Car,
  Compass,
  FileText,
  Heart,
  Hotel,
  MapPin,
  Mountain,
  Plane,
  Shield,
  ShieldCheck,
} from "lucide-react";

export const CAROUSEL_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    alt: "Majestic Alpine Lake",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
    alt: "Scenic Travel Boat Cruise",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Golden Beach Sunset",
  },
];

export const STATS_ITEMS = [
  {
    id: "stat-1",
    number: "12M+",
    label: "Active Travelers",
    icon: <MapPin className="text-primary size-5" />,
  },
  {
    id: "stat-2",
    number: "150+",
    label: "Global Destinations",
    icon: <Award className="text-secondary size-5" />,
  },
  {
    id: "stat-3",
    number: "99.9%",
    label: "Customer Satisfaction",
    icon: <ShieldCheck className="text-success size-5" />,
  },
];

export const CORE_VALUES = [
  {
    icon: <Compass className="text-primary size-6" />,
    title: "Seamless Exploration",
    desc: "We curate itineraries and travel management tools that let you discover the world without stress.",
  },
  {
    icon: <Shield className="text-secondary size-6" />,
    title: "Safety & Security",
    desc: "Your wellbeing is our priority. We work with trusted partners to guarantee security at every step.",
  },
  {
    icon: <Heart className="text-success size-6" />,
    title: "Client Centeredness",
    desc: "Our active support team is available around the clock to assist you with flight changes, custom plans, and requests.",
  },
];

export const BLOG_CATEGORIES = ["All", "Adventure", "Guides", "Honeymoon", "Tips"];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Top 10 Hidden Gem Destinations in India for 2026",
    excerpt:
      "Step away from crowded resorts and discover pristine valleys, mystical temples, and untouched waterfalls across the subcontinent.",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80",
    date: "Oct 12, 2026",
    author: "Rahul Sharma",
    readTime: "6 min read",
  },
  {
    id: "post-2",
    title: "How to Plan Your Honeymoon Package on a Budget",
    excerpt:
      "Your dream getaway doesn't need to break the bank. Read our expert tips on booking premium stays and activities at fraction costs.",
    category: "Honeymoon",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    date: "Sep 28, 2026",
    author: "Priya Patel",
    readTime: "5 min read",
  },
  {
    id: "post-3",
    title: "The Essential Packing Guide for Alpine Trekking",
    excerpt:
      "Prepare for high altitudes and freezing temperatures with our ultimate trekking gear list. Learn how to package light but complete.",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    date: "Sep 15, 2026",
    author: "Amit Verma",
    readTime: "8 min read",
  },
  {
    id: "post-4",
    title: "Tips for Seamless Flight Bookings and Assistance",
    excerpt:
      "Navigate last-minute flight delays, baggage policies, and airport ticket assistance with these simple guidelines.",
    category: "Tips",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
    date: "Aug 30, 2026",
    author: "Vikram Malhotra",
    readTime: "4 min read",
  },
];

export const GALLERY_FILTERS = ["All", "Beaches", "Mountains", "Adventure", "Cities"];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "item-1",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    alt: "Golden Beach Sunset",
    title: "Pristine Sunset Coast",
    location: "Goa, India",
    category: "Beaches",
  },
  {
    id: "item-2",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    alt: "Majestic Alpine Lake",
    title: "Emerald Mountain Lake",
    location: "Himachal Pradesh, India",
    category: "Mountains",
  },
  {
    id: "item-3",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
    alt: "Scenic Travel Boat Cruise",
    title: "Vibrant River Cruise",
    location: "Kerala Backwaters, India",
    category: "Adventure",
  },
  {
    id: "item-4",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    alt: "Red Rocks Desert Canyons",
    title: "Deep Valley Canyons",
    location: "Ladakh, India",
    category: "Mountains",
  },
  {
    id: "item-5",
    src: "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=600&q=80",
    alt: "Snow Mountain Peak Trekking",
    title: "Glacier Summit Trek",
    location: "Uttarakhand, India",
    category: "Adventure",
  },
  {
    id: "item-6",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Valley Mountain Waterfall Rivers",
    title: "Misty Mountain Falls",
    location: "Meghalaya, India",
    category: "Mountains",
  },
  {
    id: "item-7",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    alt: "Historic Taj Mahal Palace",
    title: "Royal Taj Mahal Heritage",
    location: "Agra, India",
    category: "Cities",
  },
  {
    id: "item-8",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    alt: "Warm Starry Campfire Mountain Night",
    title: "Under the Alpine Stars",
    location: "Spiti Valley, India",
    category: "Adventure",
  },
];

export const SERVICES_ITEMS = [
  {
    id: "service-1",
    title: "Customized Tour Packages",
    description:
      "Personalized itineraries tailored to your unique preferences, budget, and travel style.",
    icon: <Calendar className="text-primary size-6" />,
  },
  {
    id: "service-2",
    title: "Flight Bookings",
    description:
      "Seamless international and domestic flight ticket bookings with instant confirmations.",
    icon: <Plane className="text-secondary size-6" />,
  },
  {
    id: "service-3",
    title: "Hotel Bookings",
    description:
      "Curated luxury hotels, boutique resorts, and budget-friendly stays verified for quality and comfort.",
    icon: <Hotel className="text-success size-6" />,
  },
  {
    id: "service-4",
    title: "Bus Bookings",
    description:
      "Reliable, comfortable, and affordable intercity bus tickets for effortless regional travel.",
    icon: <Bus className="text-warning size-6" />,
  },
  {
    id: "service-5",
    title: "Taxi Bookings",
    description:
      "Safe, prompt, and convenient taxi bookings for airport transfers, local sightseeing, and outstation trips.",
    icon: <Car className="text-danger size-6" />,
  },
];
