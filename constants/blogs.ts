export interface BlogContent {
  subtitle: string;
  quote: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const BLOG_CONTENTS: Record<string, BlogContent> = {
  "post-1": {
    subtitle:
      "Discover the untouched landscapes, serene backwaters, and pristine culture that await you.",
    quote:
      "“Travel isn't about checking off tourist traps; it's about connecting with the quiet soul of a new horizon.”",
    sections: [
      {
        heading: "1. Ziro Valley, Arunachal Pradesh",
        paragraphs: [
          "Nestled in the lush hills of Arunachal Pradesh, Ziro Valley is a paradise for nature lovers and peace seekers. Home to the unique Apatani tribe, this valley is famous for its layered pine hills, terraced rice paddies, and the vibrant Ziro Music Festival.",
          "Walking through the local villages feels like stepping back in time. The local hospitality is warm, and the landscape remains untouched by commercialization.",
        ],
      },
      {
        heading: "2. Gurez Valley, Jammu & Kashmir",
        paragraphs: [
          "Located close to the Line of Control, Gurez Valley is one of the most beautiful and secluded mountain coves in India. Surrounded by snow-covered peaks and washed by the roaring Kishanganga River, it offers absolute serenity.",
          "The towering Habba Khatoon peak dominates the valley, creating a dramatic backdrop for hikers and campers who want to experience Kashmir's pristine nature.",
        ],
      },
      {
        heading: "3. Majuli Island, Assam",
        paragraphs: [
          "Majuli is the world's largest river island, located on the Brahmaputra River. It is the hub of Assamese neo-Vaishnavite culture, famous for its ancient monasteries (Sattras) and traditional mask-making.",
          "Due to climate change and erosion, the island is shrinking, making it a place to visit sooner rather than later. Rent a bicycle to explore the pottery villages and watch migratory birds at sunset.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "India is filled with hidden corners that offer authentic cultural experiences and raw natural beauty. By choosing these offbeat destinations, you not only avoid the tourist crowds but also support local ecotourism communities.",
        ],
      },
    ],
  },
  "post-2": {
    subtitle: "Your dream getaway doesn't need to break the bank. Read our expert tips.",
    quote:
      "“A premium honeymoon isn't defined by the price tag, but by the richness of the moments you share.”",
    sections: [
      {
        heading: "1. Choose Off-Peak Shoulder Seasons",
        paragraphs: [
          "Booking your honeymoon just before or after the peak tourist season can slash flight and lodging costs by up to 40%. For example, visiting tropical beaches in late September or early April lets you enjoy five-star resorts at three-star rates.",
          "You'll also get the benefit of quiet beaches, uncrowded excursions, and more personalized service from hotel staff.",
        ],
      },
      {
        heading: "2. Explore Alternative Romantic Destinations",
        paragraphs: [
          "While destinations like Maldives or Bora Bora are highly marketed, islands like Andaman & Nicobar, Lakshadweep, or Kerala Backwaters offer equally breathtaking beach sunsets and luxury stays at a fraction of the cost.",
          "Opting for a premium villa in Munnar or a luxury houseboat in Alleppey provides a unique cultural charm and complete privacy.",
        ],
      },
      {
        heading: "3. Leverage Honeymoon Perks & Registries",
        paragraphs: [
          "Never hesitate to mention you are on your honeymoon during reservations. Hotels routinely offer complimentary room upgrades, welcome drinks, cake, or spa credits.",
          "You can also set up a honeymoon fund registry where friends and family contribute to activities, dinners, or experiences rather than gifting traditional household items.",
        ],
      },
    ],
  },
  "post-3": {
    subtitle: "Gear up, stay warm, and trek safely through high-altitude passes.",
    quote:
      "“Good gear is the difference between an unforgettable journey and a miserable challenge.”",
    sections: [
      {
        heading: "1. The 3-Layer Clothing Rule",
        paragraphs: [
          "Managing body temperature at high altitudes requires efficient layering. Always follow the three-layer standard:",
          "Base Layer: Moisture-wicking thermal wear to draw sweat away from the body. Mid Layer: Insulating fleece or light down jacket to lock in heat. Outer Layer: Waterproof, windproof jacket to block rains and snow.",
        ],
      },
      {
        heading: "2. Footwear: Your Most Important Choice",
        paragraphs: [
          "Invest in waterproof trekking boots with deep lug soles for proper grip on loose mud, snow, and rocks. Never trek in brand new shoes—wear them for at least two weeks beforehand to break them in and prevent painful blisters.",
          "Always pack moisture-wicking wool socks and carry blister bandages in your daypack.",
        ],
      },
      {
        heading: "3. High-Altitude Medical Essentials",
        paragraphs: [
          "Your backpack should always contain personal medications, Diamox (for altitude sickness, taken under medical guidance), pain relievers, electrolyte packets, and portable water purification tablets.",
          "Remaining hydrated is critical; drink 4-5 liters of water daily to help your body adapt to thinning oxygen levels.",
        ],
      },
    ],
  },
  "post-4": {
    subtitle: "Navigate air travel easily with these booking hacks and flight tips.",
    quote:
      "“The secret to stress-free air travel is foresight, preparation, and simple digital tracking tools.”",
    sections: [
      {
        heading: "1. The Best Booking Timeframes",
        paragraphs: [
          "For domestic flights, booking 4 to 6 weeks in advance yields the lowest pricing. For international flights, aim for 3 to 5 months. Avoid booking on weekends; mid-week days (Tuesday and Wednesday) usually show the best airline pricing deals.",
          "Use flight tracking apps to monitor price patterns before pulling the trigger.",
        ],
      },
      {
        heading: "2. Handling Layovers and Delays",
        paragraphs: [
          "When booking connecting flights, ensure a minimum layover of 2 hours for domestic transfers and 3 hours for international flights. This cushions you against minor delays and leaves time for baggage transfers and immigration checks.",
          "Keep essential items, charger cables, and a change of clothes in your carry-on luggage just in case your checked bags are delayed.",
        ],
      },
      {
        heading: "3. Maximize Airline Loyalty Programs",
        paragraphs: [
          "Always sign up for free airline loyalty programs even if you travel infrequently. Accumulated miles can be used for seat upgrades, priority check-in clearances, lounge access, or future flight discount coupons.",
        ],
      },
    ],
  },
};
