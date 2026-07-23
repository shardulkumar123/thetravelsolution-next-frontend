"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { ArrowLeft, Calendar, CheckCircle2, Clock, Phone, User } from "lucide-react";

import { BLOG_POSTS } from "@/utils/constants";

// Rich content mapping for each blog post ID to make details dynamic and complete
const BLOG_CONTENTS: Record<
  string,
  {
    subtitle: string;
    quote: string;
    sections: { heading: string; paragraphs: string[] }[];
  }
> = {
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

export default function BlogDetailPage() {
  const { id } = useParams();

  const post = BLOG_POSTS.find((p) => p.id === id);
  const content = post ? BLOG_CONTENTS[post.id] : null;

  if (!post || !content) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-text-primary">
        <Navbar />
        <main className="flex-1 py-20 flex flex-col items-center justify-center">
          <Heading variant="h2" className="text-text-primary mb-4">
            Article Not Found
          </Heading>
          <Text variant="body-md" color="text-secondary" className="mb-6">
            The blog post you are looking for does not exist or has been moved.
          </Text>
          <Link href="/blogs">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Find related articles (excluding the current one)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Blog Post Header */}
        <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-hover/20 via-slate-900 to-secondary/30 opacity-60 z-0" />
          <Container className="relative z-10 max-w-4xl text-left">
            {/* Back Button */}
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-primary transition-colors mb-6 uppercase tracking-wider"
            >
              <ArrowLeft size={16} /> Back to Blogs
            </Link>

            <span className="inline-flex items-center px-3.5 py-1 rounded-md bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              {post.category}
            </span>

            <Heading
              variant="h1"
              className="text-text-primary font-heading font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-6"
            >
              {post.title}
            </Heading>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-secondary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Content & Sidebar */}
        <section className="py-16">
          <Container className="max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content Area */}
              <div className="lg:col-span-2 text-left flex flex-col gap-8">
                {/* Featured Image */}
                <div className="relative w-full h-[320px] md:h-[480px] rounded-3xl overflow-hidden border border-border shadow-soft">
                  <CustomImage src={post.image} alt={post.title} fill className="object-cover" />
                </div>

                {/* Subtitle */}
                <Text
                  variant="body-lg"
                  className="font-semibold text-text-primary leading-relaxed italic border-l-4 border-primary pl-4 my-2"
                >
                  {content.subtitle}
                </Text>

                {/* Render Sections */}
                {content.sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <Heading
                      variant="h3"
                      className="text-xl md:text-2xl font-extrabold tracking-tight text-text-primary"
                    >
                      {section.heading}
                    </Heading>
                    {section.paragraphs.map((p, pIdx) => (
                      <Text
                        key={pIdx}
                        variant="body-sm"
                        className="text-text-secondary leading-relaxed"
                      >
                        {p}
                      </Text>
                    ))}
                  </div>
                ))}

                {/* Quote Callout */}
                <div className="bg-surface border border-border rounded-2xl p-6 text-center my-4">
                  <Text
                    variant="body-md"
                    className="font-heading font-extrabold text-primary italic"
                  >
                    {content.quote}
                  </Text>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 flex flex-col gap-10">
                {/* Call Us Widget */}
                <div className="rounded-3xl border border-border bg-slate-900 text-white p-8 text-left relative overflow-hidden shadow-medium">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-hover/10 to-secondary/10 opacity-60 pointer-events-none" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <Heading
                      variant="h4"
                      className="text-white font-extrabold text-xl tracking-tight"
                    >
                      Plan Your Next Getaway
                    </Heading>
                    <Text variant="body-sm" className="text-white/80 leading-relaxed">
                      Inspired by our guides? Our travel specialists are ready to curate your custom
                      itinerary.
                    </Text>
                    <div className="flex flex-col gap-3.5 my-2">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-white/90">
                          Premium Lodgings
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-white/90">
                          Private Mountain Transit
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-white/90">
                          24/7 Operations Desk
                        </span>
                      </div>
                    </div>
                    <a href="tel:+919258645860" className="mt-2">
                      <Button
                        variant="primary"
                        className="w-full font-bold shadow-soft flex items-center justify-center gap-2"
                      >
                        <Phone size={14} /> Call Us Today
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Related Posts Widget */}
                <div className="flex flex-col gap-5 text-left">
                  <Heading
                    variant="h4"
                    className="text-text-primary font-extrabold text-lg border-b border-border pb-3"
                  >
                    Related Articles
                  </Heading>
                  <div className="flex flex-col gap-6">
                    {relatedPosts.map((rPost) => (
                      <Link
                        key={rPost.id}
                        href={`/blogs/${rPost.id}`}
                        className="group flex gap-4 items-start"
                      >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-border">
                          <CustomImage
                            src={rPost.image}
                            alt={rPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider">
                            {rPost.category}
                          </span>
                          <h5 className="font-bold text-text-primary text-xs leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                            {rPost.title}
                          </h5>
                          <span className="text-[10px] text-text-secondary">{rPost.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
