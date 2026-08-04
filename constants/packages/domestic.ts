import { TourPackage } from "@/types";

export const DOMESTIC_PACKAGES: TourPackage[] = [
  {
    id: "pkg-adv-1",
    title: "Corbett Long Weekend Luxury Tour Package",
    location: "Uttarakhand, India (RAMNAGAR TO RAMNAGAR)",
    duration: "3 Days / 2 Nights",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1615959189197-48400fc3889a?auto=format&fit=crop&w=800&q=80",
    description:
      "Enjoy a premium wildlife holiday in India's famous Jim Corbett National Park. This package features luxury resort accommodations, exhilarating jeep safaris, exceptional hospitality, and immersive nature experiences.",
    highlights: [
      "Premium wildlife holiday in India's famous national park",
      "Luxury resort accommodations and safari experiences",
      "Ideal for families and wildlife enthusiasts",
      "Exceptional hospitality and natural surroundings",
      "Memorable wilderness escape",
    ],
    category: "adventure",
    itinerary: [
      {
        title: "Day 1: Arriving at Jim Corbett Nation Park",
        details:
          "After arriving at Jim Corbett National Park check-in to your Jim Corbett hotel or resort and take some rest there. After some rest, its time to have a buffet lunch at restaurant premises, After lunch takes some rest and then visit for local sightseeing or enjoy the swimming pool. After enjoying in swimming pool or by local sightseeing its time to way back to your hotel or resort. After this, you have to take your buffet dinner and overnight stay there.",
      },
      {
        title: "Day 2: Corbett Park Jeep Safari",
        details:
          "Early morning go for Jeep safari of Jim Corbett national park. After Jeep Safari your breakfast will be ready to eat. Have your buffet breakfast and came back to your hotel/resort take some rest and then have your buffet lunch. After lunch, you can enjoy indoor activities like badminton, cricket, pool, and table tennis. take evening tea/ coffee in a roundhouse or room have a buffet dinner. You will stay overnight there.",
      },
      {
        title: "Day 3: Departure",
        details: "Take buffet breakfast and leave for your home with sweet memories of wildlife",
      },
    ],
    inclusions: [
      "Accommodation for 02 nights/03 days in luxury hotel or resort",
      "Welcome refreshment on arrival, Breakfast, Dinner",
      "Complimentary two bottles of mineral water in the room replenished daily.",
      "Fruit Baskets & Bakery Products on arrival",
      "Tea/coffee maker in the room",
      "Cultural program every alternate evening",
      "Slide show/Wild life movie every alternate evening",
      "Complimentary Wi-Fi.",
      "Complimentary uses of Swimming Pool",
    ],
    exclusions: [
      "Lunch",
      "Any meals during transit/road journey",
      "Additional transport expenses in case of road blocked due to snow",
      "Any other personal expenses, tips, taxes",
      "Anything not mentioned above inclusions",
    ],
  },
];

export const TRIP_INTEL = [
  {
    id: "faq-1",
    question: "Are flights included in the domestic tour package prices?",
    answer:
      "No, our base package rates generally cover airport transfers, premium accommodations, sightseeing, select meals, and ground transportation. However, we have a dedicated flight booking assistance desk that can secure the best fares for your travel dates.",
  },
  {
    id: "faq-2",
    question: "Can I customize the itinerary or extend my stay?",
    answer:
      "Absolutely! We specialize in tailoring custom itineraries. You can upgrade hotel categories, extend stays at specific destinations, add custom activities, or adjust transit schedules to suit your group's preferences.",
  },
  {
    id: "faq-3",
    question: "What travel documents are required for domestic journeys?",
    answer:
      "You will need a government-issued photo ID (like Aadhaar, PAN Card, Driving License, or Voter ID). For specific high-altitude zones or border regions in Ladakh or Northeast India, special Inner Line Permits (ILP) are required, which our operations team will arrange on your behalf.",
  },
  {
    id: "faq-4",
    question: "What is the cancellation and refund policy?",
    answer:
      "Cancellations made 30 days prior to the travel date receive a full refund minus minimal admin charges. Cancellations within 15–29 days receive a 50% refund. Cancellations under 15 days are subject to standard hotel/vendor policies and are usually non-refundable.",
  },
  {
    id: "faq-5",
    question: "What safety protocols are followed during the tours?",
    answer:
      "We ensure all local cabs and coaches are fully sanitized, coordinate only with verified star hotels that maintain high hygiene ratings, and allocate experienced local guides who know safe routes and medical support points.",
  },
];
