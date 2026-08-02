import { TourPackage } from "@/types";

export const INTERNATIONAL_PACKAGES: TourPackage[] = [
  {
    id: "int-pkg-1",
    title: "Maldives Overwater Luxury Retreat",
    location: "Maldives (International)",
    duration: "5 Days / 4 Nights",
    price: "₹89,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description:
      "Stay in a premium overwater villa with direct access to turquoise lagoons, private plunge pool, and beautiful marine reefs.",
    highlights: ["Overwater Villa Stay", "Couple's Spa Session", "Private Beachfront Dinner"],
    itinerary: [
      {
        title: "Velana Airport Arrival & Speedboat Transfer",
        details:
          "Arrive at Male Airport and transfer to your luxury resort via speedboat/seaplane. Check into your premium overwater villa.",
      },
      {
        title: "Spa Session & Lagoon Snorkeling",
        details:
          "Enjoy a relaxing couple's spa session. In the afternoon, swim in the turquoise lagoon and explore the resort's house reef.",
      },
      {
        title: "Ocean Excursions & Dolphin Cruise",
        details:
          "Embark on an excursion: snorkeling with sea turtles or a sunset cruise to spot active dolphins in the open ocean.",
      },
      {
        title: "Leisure & Private Beachfront Dinner",
        details:
          "Relax by your private plunge pool. As night falls, enjoy a curated multi-course private dinner served on the beach under the stars.",
      },
      {
        title: "Speedboat to Male & Departure",
        details:
          "Enjoy a final breakfast overlooking the Indian Ocean. Check out and take a speedboat transfer back to Velana International Airport.",
      },
    ],
  },
  {
    id: "int-pkg-2",
    title: "Bali Tropical Island Getaway",
    location: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    price: "₹39,999",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    description:
      "Explore the spiritual temples of Ubud, relax on Seminyak's sunset beaches, hike active volcanoes, and dive into beautiful coral reefs.",
    highlights: ["Ubud Private Pool Villa", "Tanah Lot Sunset Tour", "Nusa Penida Day Trip"],
    itinerary: [
      {
        title: "Arrive in Bali & Transfer to Ubud",
        details:
          "Arrive at Denpasar Airport. Meet your private driver and transfer to Ubud, the cultural heart of Bali. Check in to your private pool villa.",
      },
      {
        title: "Ubud Sacred Forest & Tegalalang Rice Terraces",
        details:
          "Visit the Sacred Monkey Forest Sanctuary, swing over the iconic Tegalalang Rice Terraces, and explore Tirta Empul holy spring temple.",
      },
      {
        title: "Nusa Penida Island Adventure Day Tour",
        details:
          "Take a fast boat to Nusa Penida. Visit the famous Kelingking Beach (T-Rex shaped cliff), Broken Beach, Angel's Billabong, and Crystal Bay.",
      },
      {
        title: "Volcano Trek & Hot Springs Experience",
        details:
          "Optional early morning hike up Mount Batur to witness the sunrise. Unwind in natural volcanic hot springs and tour a local coffee plantation.",
      },
      {
        title: "Seminyak Beaches & Tanah Lot Sunset",
        details:
          "Move to a beach resort in Seminyak. Spend the day relaxing on sandy beaches and visit the offshore Tanah Lot Temple for a spectacular sunset.",
      },
      {
        title: "Bali Souvenir Shopping & Departure",
        details:
          "Spend your morning shopping for Balinese handicrafts and coffee. Transfer to Denpasar airport for your flight back home.",
      },
    ],
  },
  {
    id: "int-pkg-3",
    title: "Dubai Skyline & Desert Oasis",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: "₹45,999",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    description:
      "Witness futuristic skyscrapers, enjoy VIP desert dune bashing, experience dynamic fountain shows, and shop at the world-famous Dubai Mall.",
    highlights: [
      "Burj Khalifa Observation Deck",
      "Desert Safari & BBQ Dinner",
      "Luxury Yacht Cruise",
    ],
    itinerary: [
      {
        title: "Arrive in Dubai & Luxury Yacht Cruise",
        details:
          "Land in Dubai. Get transferred in a private luxury vehicle to your hotel. In the evening, enjoy a shared luxury yacht cruise around Dubai Marina.",
      },
      {
        title: "Dubai City Tour & Burj Khalifa Observation Deck",
        details:
          "Drive past Jumeirah Mosque and Burj Al Arab. Visit the Dubai Mall, watch the dancing fountain show, and go up the 124th floor of the Burj Khalifa.",
      },
      {
        title: "Gold Souk & Desert Safari with BBQ Dinner",
        details:
          "Explore the traditional Spice & Gold Souks. In the afternoon, head out for high-speed dune bashing, camel riding, and a live Tanoura dance show with BBQ dinner.",
      },
      {
        title: "Aquaventure Waterpark & Palm Jumeirah",
        details:
          "Spend an exciting day at Atlantis Aquaventure Waterpark on Palm Jumeirah, sliding down world-class slides and exploring the Lost Chambers Aquarium.",
      },
      {
        title: "Modern Dubai & Airport Departure",
        details:
          "Morning at leisure for last-minute shopping at Mall of the Emirates. Check out and get transferred to Dubai International Airport.",
      },
    ],
  },
  {
    id: "int-pkg-4",
    title: "Switzerland Alps Highlights",
    location: "Zurich & Interlaken, Switzerland",
    duration: "7 Days / 6 Nights",
    price: "₹1,24,999",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
    description:
      "Experience breathtaking train rides through snowcapped peaks, cruise pristine lakes, and explore fairytale villages in the Swiss Alps.",
    highlights: [
      "Jungfraujoch Top of Europe",
      "Swiss Travel Pass Included",
      "Scenic Lake Brienz Cruise",
    ],
    itinerary: [
      {
        title: "Arrive in Zurich & Train to Interlaken",
        details:
          "Arrive in Zurich. Use your Swiss Travel Pass to board a scenic train route to Interlaken. Check into your hotel amidst the mountains.",
      },
      {
        title: "Jungfraujoch - Top of Europe",
        details:
          "Board the cogwheel train climbing up to Jungfraujoch (3,454m). Explore the Ice Palace, Sphinx Observatory, and play in year-round snow.",
      },
      {
        title: "Lake Brienz Cruise & Giessbach Falls",
        details:
          "Take a scenic cruise on the turquoise waters of Lake Brienz. Visit the historic Grand Hotel Giessbach and its roaring waterfalls.",
      },
      {
        title: "Interlaken to Lucerne Scenic Journey",
        details:
          "Travel to Lucerne via the Lucerne-Interlaken Express. Walk across the historic Chapel Bridge and visit the sad Lion Monument.",
      },
      {
        title: "Mount Titlis Rotair & Glacier Park",
        details:
          "Excursion to Engelberg and board the Titlis Rotair (revolving cable car). Cross the Titlis Cliff Walk suspension bridge and slide on glaciers.",
      },
      {
        title: "Lucerne to Zurich & City Sightseeing",
        details:
          "Return to Zurich. Explore the old town (Altstadt), Bahnhofstrasse luxury shops, and enjoy a quiet dinner along the Limmat river.",
      },
      {
        title: "Zurich Departure",
        details:
          "Check out of your Swiss hotel and take a local airport train connection to Zurich International Airport for your return flight.",
      },
    ],
  },
];

export const TRIP_INTEL = [
  {
    id: "int-faq-1",
    question: "Do you assist with tourist visas for international trips?",
    answer:
      "Yes! We provide complete visa application support, including document vetting, appointment scheduling, and guidance for visa-on-arrival processes (like Maldives or Bali) or eVisa submissions (like Dubai).",
  },
  {
    id: "int-faq-2",
    question: "Is travel insurance included in these packages?",
    answer:
      "We highly recommend comprehensive international travel insurance covering medical emergencies, baggage loss, and trip cancellations. We partner with leading insurance providers and can bundle policy coverage into your travel package at premium rates.",
  },
  {
    id: "int-faq-3",
    question: "Are flights and currency exchanges managed?",
    answer:
      "Our package base prices exclude international flights, but our ticketing team can book flights directly from your nearest hub. We also help coordinate forex cards and currency exchanges before you depart.",
  },
  {
    id: "int-faq-4",
    question: "What is the policy for cancellations on international bookings?",
    answer:
      "Due to international hotel and flight booking protocols, cancellations are governed by strict vendor timelines. Full cancellations 45 days prior receive full refunds minus minor admin fees. Cancellations under 30 days are subject to actual cancellation charges imposed by airlines and luxury resorts.",
  },
];
