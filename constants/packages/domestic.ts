import { TourPackage } from "@/types";

export const DOMESTIC_PACKAGES: TourPackage[] = [
  {
    id: "pkg-1",
    title: "Kerala Backwaters Serenade",
    location: "Kerala, India",
    duration: "5 Days / 4 Nights",
    price: "₹15,999",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    description:
      "Experience the tranquility of houseboats cruising through palm-fringed canals, lush green tea estates in Munnar, and refreshing spice plantation walks.",
    highlights: ["Private Deluxe Houseboat", "Munnar Tea Gardens", "Kathakali Dance Show"],
    category: "honeymoon",
    itinerary: [
      {
        title: "Arrival in Cochin & Drive to Munnar",
        details:
          "Arrive at Cochin Airport/Railway Station and travel to the scenic hill station Munnar. En route, enjoy the beautiful Valara and Cheeyappara waterfalls. Check in to resort.",
      },
      {
        title: "Munnar Sightseeing Tour",
        details:
          "Explore Munnar's wonders: Eravikulam National Park (home to Nilgiri Tahr), Mattupetty Dam, Echo Point, Tea Museum, and Photo Point.",
      },
      {
        title: "Munnar to Thekkady Wild Woods",
        details:
          "Drive to Thekkady. Visit the Periyar National Park, take a spice plantation tour, and enjoy an evening boating session or traditional Kathakali show.",
      },
      {
        title: "Thekkady to Alleppey Houseboat",
        details:
          "Check into a private luxury houseboat in Alleppey. Cruise along the scenic palm-fringed backwaters, enjoying freshly prepared traditional Kerala meals.",
      },
      {
        title: "Alleppey to Cochin Departure",
        details:
          "Breakfast on board. Transfer back to Cochin for sightseeing (Fort Kochi, Chinese Fishing Nets, Jewish Synagogue) before departure.",
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
    id: "pkg-2",
    title: "Royal Rajasthan Heritage Route",
    location: "Rajasthan, India",
    duration: "7 Days / 6 Nights",
    price: "₹24,999",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    description:
      "Walk down the corridors of history with visits to Jaipur's massive Amber Fort, Udaipur's romantic Lake Palace, and Thar Desert camel safaris.",
    highlights: [
      "Fort & Palace Guided Tours",
      "Thar Desert Sunset Safari",
      "Lake Pichola Boat Ride",
    ],
    category: "girls-tours",
    itinerary: [
      {
        title: "Arrive in Jaipur - The Pink City",
        details:
          "Welcome to Jaipur. Check in to hotel. In the evening, explore local heritage markets and visit the beautiful Birla Temple.",
      },
      {
        title: "Jaipur Historic Forts & Palaces Tour",
        details:
          "Visit Amber Fort with an optional elephant/jeep ride, Hawa Mahal (Palace of Winds), City Palace museum, and the ancient Jantar Mantar observatory.",
      },
      {
        title: "Jaipur to Jodhpur (The Blue City)",
        details:
          "Drive to Jodhpur. Visit the monumental Mehrangarh Fort towering above the blue city, Jaswant Thada cenotaph, and the vibrant local clock tower markets.",
      },
      {
        title: "Jodhpur to Udaipur via Ranakpur",
        details:
          "Travel to Udaipur. Stop en route at the architecturally stunning 15th-century Ranakpur Jain Temple, famous for its 1444 unique marble pillars.",
      },
      {
        title: "Udaipur Romantic Lake City Tour",
        details:
          "Explore Udaipur: City Palace complex, Jagdish Temple, Saheliyon-ki-Bari gardens, and enjoy a romantic sunset boat ride on Lake Pichola.",
      },
      {
        title: "Udaipur Heritage Walks & Leisure",
        details:
          "A day at leisure to explore local lakes, shopping streets for Rajasthani handicrafts, and trying local Mewari cuisine.",
      },
      {
        title: "Udaipur Departure",
        details:
          "After breakfast, check out from the heritage hotel and transfer to Udaipur airport or railway station for onward journey.",
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
    id: "pkg-3",
    title: "Ladakh Adventure & Heights",
    location: "Ladakh, India",
    duration: "8 Days / 7 Nights",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80",
    description:
      "Drive on the world's highest motorable roads, gaze at the mystical blue waters of Pangong Lake, and discover centuries-old Buddhist monasteries.",
    highlights: [
      "Pangong Lake Luxury Camping",
      "Khardung La Pass Crossing",
      "Hemis Monastery Visit",
    ],
    category: "religious",
    itinerary: [
      {
        title: "Leh Airport Arrival & Acclimatization",
        details:
          "Fly to Leh. Day strictly reserved for resting and acclimating to the high altitude (3,500m). Walk around the local Leh market in the evening.",
      },
      {
        title: "Leh City Heritage & Monastery Tour",
        details:
          "Visit Hall of Fame, Shanti Stupa, Sangam (confluence of Indus and Zanskar rivers), Magnetic Hill, and Pathar Sahib Gurudwara.",
      },
      {
        title: "Leh to Nubra Valley via Khardung La",
        details:
          "Drive through the world's highest motorable pass, Khardung La (5,359m). Arrive at Nubra Valley, enjoy a double-humped camel safari at Hunder Sand Dunes.",
      },
      {
        title: "Nubra Valley to Pangong Lake via Shyok",
        details:
          "Travel to the famous high-altitude Pangong Lake. Witness the changing shades of the lake's blue water. Spend the night at a luxury lakeside camp.",
      },
      {
        title: "Pangong Lake to Leh via Chang La",
        details:
          "Wake up to a beautiful sunrise by the lake. Drive back to Leh via the high-altitude Chang La pass. Shop for local souvenirs in the evening.",
      },
      {
        title: "Leh Adventure Excursion",
        details:
          "A day for optional adventure activities: river rafting in Indus River or exploring Shey and Thiksey monasteries.",
      },
      {
        title: "Leh to Delhi Departure",
        details:
          "Transfer to Kushok Bakula Rimpochee Airport for flight back to Delhi, concluding your Himalayan tour.",
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
    id: "pkg-4",
    title: "Goa Sunkissed Coastal Retreat",
    location: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: "₹12,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description:
      "Unwind on golden sands, enjoy exciting water sports, explore historic Portuguese churches, and sample mouthwatering Konkani culinary delights.",
    highlights: ["North Goa Beach Hopping", "Dudhsagar Waterfalls Tour", "Mandovi River Cruise"],
    category: "girls-tours",
    itinerary: [
      {
        title: "Arrival in Goa & Beachside Sunset",
        details:
          "Arrive at Manohar International Airport (MOPA) and transfer to your beachfront resort. Spend the evening relaxing on Calangute Beach or enjoying a beach shack dinner.",
      },
      {
        title: "North Goa Sightseeing & Water Sports",
        details:
          "Explore historic Fort Aguada, Chapora Fort, and participate in exciting water sports like parasailing and jet-skiing at Baga Beach.",
      },
      {
        title: "Dudhsagar Waterfalls & Spice Plantation Tour",
        details:
          "Embark on an early morning jeep safari to the majestic Dudhsagar Waterfalls, followed by a traditional buffet lunch at a spice plantation.",
      },
      {
        title: "Goa Departure",
        details:
          "Transfer back to the airport for your flight home, bringing back beautiful coastal memories.",
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
