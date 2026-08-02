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

import { TourPackage } from "@/types";

import { YATRA_ITINERARY } from "@/constants/packages/religious";

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

export const SEASONAL_TOURS: TourPackage[] = [
  {
    id: "st-1",
    title: "Char Dham Yatra Tour from Haridwar",
    location: "Uttarakhand, India",
    duration: "10 Days / 9 Nights",
    price: "₹27,500",
    image:
      "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80",
    description:
      "Char Dham yatra is the most sacred yatra for Hindu in India. There are four temples included in char dham yatra: Yamunotri, Gangotri, Kedarnath, Badrinath. THE TRAVEL SOLUTION brought you 9 nights Char Dham tour packages from Haridwar in which you can visit all Char Dham of Uttarakhand. This package starts from Haridwar, Rishikesh or Dehradun. Organising customized tours only.",
    category: "Chardham Yatra",
    highlights: [
      "Yamunotri & Gangotri",
      "Kedarnath & Badrinath",
      "Customized Private Tours",
      "Ex Haridwar/Dehradun",
    ],
    itinerary: [
      {
        title: "Haridwar – Barkot",
        details:
          "Morning meet our representative at your Hotel / Airport / Railway Station. After some basic information start your journey to Barkot. Later drive to Barkot. Check into the hotel arrival in Barkot. Overnight stay at Barkot. (Meals: Dinner)",
      },
      {
        title: "Barkot - Janakichatti - Yamunotri - Jankichatti - Barkot",
        details:
          'Early morning after breakfast, drive to Jankichatti / Phoolchatti. Start your trek from here to Yamunotri (6kms) (Either by walk or by horse or by Doli at own cost). After arrival at Yamunotri take bath in warm waters of Surya Kund (Hot Spring). Enjoy Darshan of "Yamunaji". Return trek to Jankichatti. Later drive towards Barkot. Overnight stay at Barkot. (Meals: Breakfast and Dinner)',
      },
      {
        title: "Barkot – Uttarkashi",
        details:
          "Morning after breakfast, relax for a while. Later drive to Uttarkashi. Visit Shivgufa on the way to Uttarkashi. In Uttarkashi visit Kashi Vishwanath Temple. After that, check in hotel. Day free for rest. Overnight stay at Uttarkashi. (Meals: Breakfast and Dinner)",
      },
      {
        title: "Uttarkashi – Gangotri – Uttarkashi",
        details:
          "Early morning after breakfast, drive to Gangotri. On the way visit Gangnani Hot Spring. Take a holy dip in Kund. Later drive to Gangotri via beautiful Harsil valley. On arrival at Gangotri, take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin. Perform Pooja and Darshan, after that relax for some time in the lovely surroundings. Later return drive to Uttarkashi. Overnight stay at Uttarkashi. (Meals: Breakfast and Dinner)",
      },
      {
        title: "Uttarkashi – Guptkashi",
        details:
          "Morning after breakfast, drive to Guptkashi. Enroute you can see the beautiful river Mandakini at Tilwara. The Mandakini River comes from Kedarnath, drive alongside the river to reach Guptakashi, visit Ardh Narishwar Temple in Guptakashi. Check into the hotel arrival in Guptkashi. Overnight stay at Guptkashi. (Meals: Breakfast and Dinner)",
      },
      {
        title: "Guptkashi – Sonprayag – Kedarnath",
        details:
          "Morning after breakfast, today we will go to Kedarnath. To reach Kedarnath you will have two options. One if by trekking and other is by Air via Helicopter (at your own cost). By Helicopter: Morning our driver will transfer you to your Helipad location. By Trek: Drive to Sonprayag early in the morning, Gaurikund to Kedarnath is further 14 Kms trek.",
      },
      {
        title: "Kedarnath – Sonprayag – Guptkashi",
        details:
          "Morning after breakfast explore nearby areas by walk at Kedarnath. Later reach Guptkashi as per your choice by trek or Helicopter. At arrival check in to hotel in Guptkashi. Overnight stay at Guptkashi. (Meals: Dinner)",
      },
      {
        title: "Guptkashi – Joshimath – Badrinath",
        details:
          "Morning after breakfast, drive to Badrinath. Check in to the hotel arrival in Badrinath. Pilgrims after having a bath in the Taptkund have the Darshan of Badrivishal & Aarti in evening. Overnight stay at Badrinath. (Meals: Breakfast and Dinner)",
      },
      {
        title: "Badrinath – Joshimath – Rudraprayag",
        details:
          "Morning enjoy the after breakfast, drive for Rudraprayag via Joshimath. Visit on the way Darshan of VishnuPrayag, Narsingh Temple in Joshimath, KarnPrayag and NandPrayag. Check into the hotel arrival in Rudraprayag. Overnight stay at Rudraprayag. (Meals: Breakfast and Dinner)",
      },
      {
        title: "Rudraprayag – Rishikesh – Haridwar",
        details:
          "Morning after breakfast, drive for Haridwar / Dehradun / Rishikesh. Drop at Hotel / Airport / railway station. (Meals: Breakfast)",
      },
    ],
    inclusions: [
      "Hotel accommodation as per package same or similar hotels.",
      "Meals as per package (Breakfast, Dinner).",
      "Transfers and sightseeing as per above.",
      "All toll tax, parking, fuel and driver allowances.",
    ],
    exclusions: [
      "Horse / Paalki / Helicopter for Trekking at Kedarnath.",
      "Meals in Kedarnath are not included.",
      "Anything not mentioned under 'Package Inclusions'.",
      "All personal expenses, optional tours and extra meals.",
      "Any kind of entry fees anywhere if not mentioned in including.",
      "Tips, travel insurance, medical insurance, laundry charges, liquors, mineral water, telephone charges.",
      "Porter, pony, horse, cable car, boat, train tickets, air tickets charges.",
    ],
  },
];
