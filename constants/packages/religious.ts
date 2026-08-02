import { TourPackage } from "@/types";

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

export const OTHER_RELIGIOUS_TOURS: TourPackage[] = [
  {
    id: "rel-1",
    title: "Varanasi Heritage & Sacred Ganges",
    location: "Uttar Pradesh, India",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=600&q=80",
    description:
      "Witness the magnificent Ganga Aarti at Dashashwamedh Ghat, explore ancient temples, take early morning boat cruises, and experience the cultural heartbeat of Kashi.",
    highlights: ["Ganga Aarti Tour", "Kashi Vishwanath Temple", "Morning Boat Cruise"],
    itinerary: [
      {
        title: "Arrival in Varanasi & Ganga Aarti Tour",
        details:
          "Arrive in Varanasi. In the evening, witness the magnificent Ganga Aarti ceremony at Dashashwamedh Ghat from a private boat.",
      },
      {
        title: "Kashi Vishwanath Temple & Heritage Walks",
        details:
          "Offer prayers at the sacred Kashi Vishwanath Temple. Walk through the narrow alleys of the ancient city and discover its heritage.",
      },
      {
        title: "Morning Boat Cruise & Sarnath Excursion",
        details:
          "Take an early morning boat cruise on the Ganges to witness the sunrise. Later, visit Sarnath where Lord Buddha gave his first sermon.",
      },
      {
        title: "Varanasi Departure",
        details:
          "Transfer to Lal Bahadur Shastri Airport or Varanasi Junction for your onward journey home.",
      },
    ],
    inclusions: [
      "Luxury Stays & Resorts",
      "Airport Pick-up & Transfers",
      "Daily Buffet Breakfasts",
      "Private Guided Excursions",
    ],
    exclusions: [
      "International / Domestic Flights",
      "Visas & Processing Fees",
      "Personal Laundry & Extras",
      "Tips and Driver Gratuities",
    ],
  },
  {
    id: "rel-2",
    title: "Amritsar Golden Temple & Wagah Border",
    location: "Punjab, India",
    duration: "3 Days / 2 Nights",
    price: "₹7,499",
    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80",
    description:
      "Offer prayers at the serene Harmandir Sahib (Golden Temple), experience the majestic community kitchen (Langar), and watch the patriotic ceremony at the Wagah Border.",
    highlights: ["Golden Temple Visit", "Community Langar Feast", "Wagah Border Ceremony"],
    itinerary: [
      {
        title: "Arrival in Amritsar & Golden Temple Visit",
        details:
          "Arrive in Amritsar and transfer to your hotel. Visit the beautiful Golden Temple (Harmandir Sahib) in the evening when it is fully illuminated.",
      },
      {
        title: "Community Langar & Wagah Border Ceremony",
        details:
          "Experience the community kitchen (Langar) at the Golden Temple. In the afternoon, head to the Wagah Border to watch the patriotic military ceremony.",
      },
      {
        title: "Amritsar Departure",
        details:
          "Visit the historic Jallianwala Bagh. Later, transfer to Sri Guru Ram Dass Jee International Airport for your departure.",
      },
    ],
    inclusions: [
      "Luxury Stays & Resorts",
      "Airport Pick-up & Transfers",
      "Daily Buffet Breakfasts",
      "Private Guided Excursions",
    ],
    exclusions: [
      "International / Domestic Flights",
      "Visas & Processing Fees",
      "Personal Laundry & Extras",
      "Tips and Driver Gratuities",
    ],
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
