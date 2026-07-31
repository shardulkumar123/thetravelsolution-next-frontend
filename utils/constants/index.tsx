import React from "react";

import {
  Award,
  Bus,
  Car,
  Compass,
  Heart,
  Hotel,
  MapPin,
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
  {
    id: "item-9",
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    alt: "Goa Beach Palms",
    title: "Tropical Palms Cove",
    location: "Goa, India",
    category: "Beaches",
  },
  {
    id: "item-10",
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
    alt: "Beautiful Coastal Shore",
    title: "Turquoise Waves Shoreline",
    location: "Andaman Islands, India",
    category: "Beaches",
  },
  {
    id: "item-11",
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    alt: "Secluded Lagoon",
    title: "Hidden Exotic Lagoon",
    location: "Havelock Island, India",
    category: "Beaches",
  },
  {
    id: "item-12",
    src: "https://images.unsplash.com/photo-1473116763269-255448993f36?auto=format&fit=crop&w=600&q=80",
    alt: "White Sand Beach Sunrise",
    title: "Pristine White Sands",
    location: "Lakshadweep, India",
    category: "Beaches",
  },
  {
    id: "item-13",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    alt: "Snow-capped Mountain Ridge",
    title: "Majestic Peaks Range",
    location: "Gulmarg, India",
    category: "Mountains",
  },
  {
    id: "item-14",
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80",
    alt: "High Mountain Plateau",
    title: "Eternal Snowline Passes",
    location: "Leh Ladakh, India",
    category: "Mountains",
  },
  {
    id: "item-15",
    src: "https://images.unsplash.com/photo-1486873249359-2731bd6dafc7?auto=format&fit=crop&w=600&q=80",
    alt: "Stunning Sunlit Peak",
    title: "Golden Hour Ridgeline",
    location: "Manali, India",
    category: "Mountains",
  },
  {
    id: "item-16",
    src: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=600&q=80",
    alt: "Himalayan Foothills Village",
    title: "Peaceful Valley Settlements",
    location: "Dharamshala, India",
    category: "Mountains",
  },
  {
    id: "item-17",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
    alt: "Vibrant Jaipur Palace",
    title: "Vibrant Palace Courtyards",
    location: "Jaipur, India",
    category: "Cities",
  },
  {
    id: "item-18",
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    alt: "Heritage Temple Architecture",
    title: "Ancient Carved Pillars",
    location: "Hampi, India",
    category: "Cities",
  },
  {
    id: "item-19",
    src: "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=600&q=80",
    alt: "Lake Palace at Dusk",
    title: "Floating Heritage Palace",
    location: "Udaipur, India",
    category: "Cities",
  },
  {
    id: "item-20",
    src: "https://images.unsplash.com/photo-1598977123418-45f04b614088?auto=format&fit=crop&w=600&q=80",
    alt: "Majestic Fort Walls",
    title: "Historic Amber Fort",
    location: "Jaipur, India",
    category: "Cities",
  },
  {
    id: "item-21",
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    alt: "Whitewater River Rafting",
    title: "Raging Ganges Rapids",
    location: "Rishikesh, India",
    category: "Adventure",
  },
  {
    id: "item-22",
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    alt: "Forest Camping Under Canopy",
    title: "Wild Canopy Camping",
    location: "Jim Corbett, India",
    category: "Adventure",
  },
  {
    id: "item-23",
    src: "https://images.unsplash.com/photo-1530731141654-5961fa6f698e?auto=format&fit=crop&w=600&q=80",
    alt: "Mountain Pass Bike Expedition",
    title: "High Altitude Biking",
    location: "Khardung La, India",
    category: "Adventure",
  },
  {
    id: "item-24",
    src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=80",
    alt: "Desert Safari Sunset Camel",
    title: "Desert Sunset Caravans",
    location: "Jaisalmer, India",
    category: "Adventure",
  },
  {
    id: "item-25",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Verdant Green Hills",
    title: "Lush Tea Plantations",
    location: "Munnar, India",
    category: "Mountains",
  },
  {
    id: "item-26",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    alt: "Sunset Palm Beach",
    title: "Serene Coconut Shallows",
    location: "Varkala, India",
    category: "Beaches",
  },
  {
    id: "item-27",
    src: "https://images.unsplash.com/photo-1473116763269-255448993f36?auto=format&fit=crop&w=600&q=80",
    alt: "Corals Shoreline",
    title: "Marine Coral Reef Coast",
    location: "Neil Island, India",
    category: "Beaches",
  },
  {
    id: "item-28",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
    alt: "Akshardham Temple Night",
    title: "Spiritual Light show",
    location: "Delhi, India",
    category: "Cities",
  },
  {
    id: "item-29",
    src: "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=600&q=80",
    alt: "Ghats of Varanasi at Sunrise",
    title: "Subah-e-Banaras Ghats",
    location: "Varanasi, India",
    category: "Cities",
  },
  {
    id: "item-30",
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    alt: "Paragliding in Solang Valley",
    title: "Himalayan Sky Gliding",
    location: "Bir Billing, India",
    category: "Adventure",
  },
];

export const SERVICES_ITEMS = [
  {
    id: "service-1",
    title: "Flight Bookings",
    description:
      "Seamless international and domestic flight ticket bookings with instant confirmations.",
    icon: <Plane className="text-secondary size-6" />,
  },
  {
    id: "service-2",
    title: "Hotel Bookings",
    description:
      "Curated luxury hotels, boutique resorts, and budget-friendly stays verified for quality and comfort.",
    icon: <Hotel className="text-success size-6" />,
  },
  {
    id: "service-3",
    title: "Bus Bookings",
    description:
      "Reliable, comfortable, and affordable intercity bus tickets for effortless regional travel.",
    icon: <Bus className="text-warning size-6" />,
  },
  {
    id: "service-4",
    title: "Taxi Bookings",
    description:
      "Safe, prompt, and convenient taxi bookings for airport transfers, local sightseeing, and outstation trips.",
    icon: <Car className="text-danger size-6" />,
  },
];

export const SEASONAL_TOURS = [
  {
    id: "st-1",
    title: "Kedarnath & Badrinath (Do Dham)",
    location: "Uttarakhand, India",
    duration: "6 Days / 5 Nights",
    price: "₹24,990",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    description:
      "A popular pilgrimage to Kedarnath and Badrinath temples in the Garhwal Himalayas with premium transfers and stays.",
    category: "Chardham Yatra",
    highlights: [
      "Helicopter Booking Support",
      "VIP Darshan Assistance",
      "Premium Riverfront Hotels",
    ],
  },
  {
    id: "st-2",
    title: "Kashmir Paradise Valley Loop",
    location: "Kashmir, India",
    duration: "6 Days / 5 Nights",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1595841696667-aa9c92f90141?auto=format&fit=crop&w=800&q=80",
    description:
      "Experience the summer bloom and winter snow in Gulmarg, Sonamarg, and Pahalgam, including a romantic shikara stay.",
    category: "Himalayan Escapes",
    highlights: ["Dal Lake Houseboat Stay", "Gondola Ride in Gulmarg", "Private Shikara Cruise"],
  },
  {
    id: "st-3",
    title: "Kerala Backwaters & Hills",
    location: "Kerala, India",
    duration: "5 Days / 4 Nights",
    price: "₹15,999",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    description:
      "Cruise through peaceful backwaters of Alleppey and relax in the cool tea plantations of Munnar.",
    category: "Tropical Retreats",
    highlights: ["Premium Houseboat Cruise", "Munnar Spice Tour", "Dolphin Spotting in Kumarakom"],
  },
  {
    id: "st-4",
    title: "Char Dham Grand Pilgrimage",
    location: "Uttarakhand, India",
    duration: "10 Days / 9 Nights",
    price: "₹48,990",
    image:
      "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80",
    description:
      "Complete spiritual circuit covering Yamunotri, Gangotri, Kedarnath, and Badrinath with fully managed logistics.",
    category: "Chardham Yatra",
    highlights: [
      "Biometric Registration Done",
      "Experienced Mountain Guide",
      "Medical/Oxygen Assistance",
    ],
  },
  {
    id: "st-5",
    title: "Ladakh Road Trip & Camping",
    location: "Ladakh, India",
    duration: "8 Days / 7 Nights",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=800&q=80",
    description:
      "A popular summer adventure driving through Khardung La pass and camping next to the clear Pangong Lake.",
    category: "Himalayan Escapes",
    highlights: ["Lakefront Luxury Tents", "Khardung La Crossing", "Magnetic Hill Experience"],
  },
  {
    id: "st-6",
    title: "Goa Sunkissed Getaway",
    location: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: "₹12,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description:
      "Perfect post-monsoon beach vacation featuring heritage sites, water sports, and beachside sunset dinners.",
    category: "Tropical Retreats",
    highlights: [
      "Heritage Churches Tour",
      "Water Sports Package Included",
      "Private Beachside Cabana Dinner",
    ],
  },
];
