import { TourPackage } from "@/types";

export const HONEYMOON_PACKAGES: TourPackage[] = [];

export const ROMANTIC_INTEL = [
  {
    id: "hm-faq-1",
    question: "Can we customize the honeymoon packages with extra activities?",
    answer:
      "Absolutely! Every honeymoon package can be customized to suit your unique tastes. You can request changes to hotel rooms (e.g., upgrading to pool suites), extend your stay, add specific candlelight settings, or schedule private photography shoots.",
  },
  {
    id: "hm-faq-2",
    question: "Do you arrange complimentary room decorations and surprises?",
    answer:
      "Yes, all our Honeymoon Packages include a complimentary honeymoon cake, a floral bed decoration setup on arrival, and a romantic candlelight dinner at one of the top-rated local dining spots. You can also specify any extra surprises you'd like us to arrange.",
  },
  {
    id: "hm-faq-3",
    question: "Which destinations are best suited for a winter honeymoon?",
    answer:
      "If you love snow-clad peaks and cozy fireplaces, Kashmir and Manali are magical from December to February. If you prefer warm beaches and water adventures, Maldives and Andaman Islands offer the most pleasant weather during the winter months.",
  },
  {
    id: "hm-faq-4",
    question: "Do you assist with visa requirements for international packages?",
    answer:
      "Yes! For destinations like the Maldives (which offers visa-on-arrival for Indian citizens), we guide you through all pre-travel documentation, hotel vouchers, and immigration declarations. For other international destinations requiring prior visas, our ticketing desk coordinates the entire application.",
  },
  {
    id: "hm-faq-5",
    question: "What is your booking timeline and deposit policy?",
    answer:
      "We recommend booking at least 30 to 45 days in advance, especially during the peak wedding/honeymoon season (October to March). A 30% advance deposit is required to secure the bookings, with the remaining balance due 15 days before your travel date.",
  },
];

export const HONEYMOON_PERKS = [
  {
    iconName: "wine" as const,
    title: "Candlelight Dinners",
    desc: "A beautifully decorated private dining spot arranged on beaches or overlooking mountain ranges.",
  },
  {
    iconName: "sparkles" as const,
    title: "Floral Room Decors",
    desc: "A warm and fragrant floral bed decoration arranged on the day of your arrival.",
  },
  {
    iconName: "heart" as const,
    title: "Couple's Spa & Wellness",
    desc: "Complimentary vouchers for deep relaxation massages and body scrubs at premium resort spas.",
  },
  {
    iconName: "star" as const,
    title: "Photography Shoots",
    desc: "Professional half-day photo shoots to capture your special moments amidst stunning landscapes.",
  },
];
