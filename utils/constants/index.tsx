import React from "react";

import { Award, Compass, Heart, MapPin, Shield, ShieldCheck } from "lucide-react";

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

export const DHAMS = [
  {
    name: "Yamunotri",
    desc: "The sacred origin of the Yamuna River. Pilgrims bathe in the natural thermal springs of Surya Kund before paying respects to the black marble deity of Goddess Yamuna.",
    altitude: "3,293 meters",
    images: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    name: "Gangotri",
    desc: "Nestled in the Bhagirathi valley, Gangotri is the source of the holy Ganga River. The white granite temple stands amidst deodar forests and majestic snow-capped peaks.",
    altitude: "3,100 meters",
    images: [
      "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    name: "Kedarnath",
    desc: "One of the twelve Jyotirlingas of Lord Shiva, situated against the backdrop of the towering Kedarnath range. A spiritual journey that involves a scenic 16km trek or a swift helicopter ride.",
    altitude: "3,583 meters",
    images: [
      "https://images.unsplash.com/photo-1667849357658-16bfaec30885?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    name: "Badrinath",
    desc: "The revered seat of Lord Vishnu (Badri Vishal) on the banks of the Alaknanda River. Flanked by the Nar and Narayana mountain ranges, Badrinath is the final stop on the sacred circuit.",
    altitude: "3,133 meters",
    images: [
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

export const YATRA_ITINERARY = [
  {
    day: "Day 1",
    title: "Arrival in Haridwar / Dehradun & Drive to Barkot",
    details:
      "Meet your guide and drive through scenic mountain roads to Barkot. Acclimatize to the rising altitude, check in to your premium Himalayan lodge, and rest for the night.",
  },
  {
    day: "Day 2",
    title: "Barkot – Yamunotri Dham Trek – Barkot",
    details:
      "Start early with a drive to Janki Chatti, followed by a 6km trek (ponies and palanquins available) to Yamunotri temple. Take a dip in Surya Kund, offer prayers, and trek back to Janki Chatti for your drive back to Barkot.",
  },
  {
    day: "Day 3",
    title: "Barkot to Uttarkashi (Capital of Pilgrimage)",
    details:
      "Enjoy a scenic drive along the banks of the Bhagirathi River to Uttarkashi. Visit the ancient Kashi Vishwanath temple in the evening. Overnight stay in Uttarkashi.",
  },
  {
    day: "Day 4",
    title: "Uttarkashi – Gangotri Dham – Uttarkashi",
    details:
      "Drive to Gangotri Dham through Harsil valley. Take a holy dip in the icy waters of the Bhagirathi (Ganga) and perform rituals at the temple. Drive back to Uttarkashi for the night.",
  },
  {
    day: "Day 5",
    title: "Uttarkashi to Guptkashi (Gateway to Kedarnath)",
    details:
      "Embark on a long, scenic journey to Guptkashi, traversing mountain ridges and offering stunning river confluence views. Check in to your hotel and prepare for the Kedarnath transit.",
  },
  {
    day: "Day 6",
    title: "Guptkashi – Gaurikund – Trek to Kedarnath Dham",
    details:
      "Drive to Sonprayag/Gaurikund, then begin the 16km spiritual trek to Kedarnath. Alternatively, board your pre-booked helicopter. Attend the evening Aarti at the legendary Shiva temple and stay overnight in Kedarnath town.",
  },
  {
    day: "Day 7",
    title: "Kedarnath Puja & Trek down to Guptkashi",
    details:
      "Perform early morning Abhishek prayers at the temple. Trek back down to Gaurikund and transfer to your hotel in Guptkashi for a well-deserved rest.",
  },
  {
    day: "Day 8",
    title: "Guptkashi to Badrinath Dham via Joshimath",
    details:
      "Drive to Badrinath Dham through Joshimath. In the evening, visit the thermal springs of Tapt Kund, take a holy bath, and attend the evening prayers at the iconic Badrinath temple.",
  },
  {
    day: "Day 9",
    title: "Badrinath to Rishikesh / Haridwar",
    details:
      "Explore Mana village (the last Indian village near the Tibet border). Later, drive down the mountains, passing the holy confluences (Prayags), to reach Rishikesh/Haridwar.",
  },
  {
    day: "Day 10",
    title: "Departure from Rishikesh",
    details:
      "Conclude your spiritual journey with a morning dip in the Ganges, and transfer to Dehradun Airport or Haridwar Railway Station for your journey home.",
  },
];

export const OTHER_RELIGIOUS_TOURS = [
  {
    id: "rel-1",
    title: "Varanasi Heritage & Sacred Ganges",
    location: "Uttar Pradesh, India",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=600&q=80",
    desc: "Witness the magnificent Ganga Aarti at Dashashwamedh Ghat, explore ancient temples, take early morning boat cruises, and experience the cultural heartbeat of Kashi.",
  },
  {
    id: "rel-2",
    title: "Amritsar Golden Temple & Wagah Border",
    location: "Punjab, India",
    duration: "3 Days / 2 Nights",
    price: "₹7,499",
    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80",
    desc: "Offer prayers at the serene Harmandir Sahib (Golden Temple), experience the majestic community kitchen (Langar), and watch the patriotic ceremony at the Wagah Border.",
  },
];

export const PILGRIM_INTEL = [
  {
    id: "rel-faq-1",
    question: "Is physical fitness verification mandatory for the Chaar Dham Yatra?",
    answer:
      "Yes, because of the high altitudes (especially Kedarnath and Yamunotri, which are above 3,200 meters), the Uttarakhand Government requires all pilgrims to submit a self-declaration medical fitness form. Pilgrims with cardiovascular or high blood pressure conditions are strongly advised to consult a cardiologist before travel.",
  },
  {
    id: "rel-faq-2",
    question: "How do we register for the biometric yatra card?",
    answer:
      "Every pilgrim must obtain the mandatory Chardham Yatra Biometric Registration Card issued by the Uttarakhand Tourism Board. Our booking support desk manages the registration on your behalf, so you do not have to worry about long queues or server issues.",
  },
  {
    id: "rel-faq-3",
    question: "When is the best time to undertake the Chaar Dham Yatra?",
    answer:
      "The yatra opens every year from late April/early May and remains accessible until Diwali (late October/early November). The best weather is experienced in May to June and September to October. We strongly advise avoiding the peak monsoon months of July and August due to heavy rains and landslide risks.",
  },
  {
    id: "rel-faq-4",
    question: "Are helicopter services available for Kedarnath?",
    answer:
      "Yes, helicopter services operate from Guptkashi, Phata, and Sersi. Tickets are highly regulated and sold out months in advance through the IRCTC portal. If you wish to travel by helicopter, please notify us during booking so our ticketing team can secure seats during the government reservation windows.",
  },
  {
    id: "rel-faq-5",
    question: "What items should I pack for the pilgrimage?",
    answer:
      "You must pack high-quality thermals, a windproof heavy jacket, comfortable trekking shoes with good grip, a raincoat or poncho (weather in the mountains changes rapidly), basic medical supplies, and sunscreen. Avoid packing heavy luggage; rely on light backpacks.",
  },
];
