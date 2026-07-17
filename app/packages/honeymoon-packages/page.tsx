"use client";

import React from "react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { Calendar, Compass, Heart, MapPin, ShieldCheck, Sparkles, Star, Wine } from "lucide-react";

const HONEYMOON_PACKAGES = [
  {
    id: "hm-1",
    title: "Maldives Overwater Luxury Retreat",
    location: "Maldives (International)",
    duration: "5 Days / 4 Nights",
    price: "₹89,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description:
      "Stay in a premium overwater villa with direct access to turquoise lagoons, private plunge pool, and beautiful marine reefs.",
    highlights: ["Overwater Villa Stay", "Couple's Spa Session", "Private Beachfront Dinner"],
  },
  {
    id: "hm-2",
    title: "Romantic Kashmir & Dal Lake Shikara",
    location: "Kashmir, India",
    duration: "6 Days / 5 Nights",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1595841696667-aa9c92f90141?auto=format&fit=crop&w=800&q=80",
    description:
      "Unravel the heaven on Earth with a romantic houseboat stay on Dal Lake, snow cable cars in Gulmarg, and flower walks in Pahalgam.",
    highlights: ["Shikara Sunset Cruise", "Gulmarg Gondola Ride", "Dal Lake Houseboat Stay"],
  },
  {
    id: "hm-3",
    title: "Serene Havelock & Andaman Island Hopping",
    location: "Andaman Islands, India",
    duration: "6 Days / 5 Nights",
    price: "₹34,999",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description:
      "Walk hand-in-hand along Radhanagar beach, dive into crystal clear waters with guided scuba sessions, and dine under the stars.",
    highlights: [
      "Radhanagar Beach Sunset Walk",
      "Scuba Diving Experience",
      "Luxury Cruise Transfer",
    ],
  },
  {
    id: "hm-4",
    title: "Cozy Manali Mountain Escape",
    location: "Himachal Pradesh, India",
    duration: "5 Days / 4 Nights",
    price: "₹18,999",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description:
      "Escape to private pine cottages, capture stunning valley views, trek to waterfalls, and cozy up next to mountain fireplaces.",
    highlights: [
      "Private Valley View Lodge",
      "Solang Valley Snow Trek",
      "Complimentary Honeymoon Cake",
    ],
  },
];

const ROMANTIC_INTEL = [
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

const PERKS = [
  {
    icon: <Wine className="text-primary size-6" />,
    title: "Candlelight Dinners",
    desc: "A beautifully decorated private dining spot arranged on beaches or overlooking mountain ranges.",
  },
  {
    icon: <Sparkles className="text-secondary size-6" />,
    title: "Floral Room Decors",
    desc: "A warm and fragrant floral bed decoration arranged on the day of your arrival.",
  },
  {
    icon: <Heart className="text-success size-6" />,
    title: "Couple's Spa & Wellness",
    desc: "Complimentary vouchers for deep relaxation massages and body scrubs at premium resort spas.",
  },
  {
    icon: <Star className="text-warning size-6" />,
    title: "Photography Shoots",
    desc: "Professional half-day photo shoots to capture your special moments amidst stunning landscapes.",
  },
];

export default function HoneymoonPackagesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center">
          <div className="absolute inset-0 z-0 select-none">
            <CustomImage
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Romantic beach resort sunset"
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-slate-950/65" />
          </div>

          <Container className="relative z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Couples&apos; Escapes
            </span>
            <Heading variant="display-lg" className="text-white font-extrabold mb-4 tracking-tight">
              Honeymoon Packages
            </Heading>
            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">Honeymoon Packages</span>
            </div>
          </Container>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background border-b border-border">
          <Container className="max-w-4xl text-center">
            <Heading
              variant="h2"
              className="font-extrabold text-3xl md:text-4xl mb-4 tracking-tight"
            >
              Curating Memories That Last a Lifetime
            </Heading>
            <Text variant="body-md" color="text-secondary" className="leading-relaxed">
              Your honeymoon should be an absolute dream. We design custom romantic experiences that
              combine premium privacy, couples&apos; wellness treatments, and beautiful sightseeing.
              Celebrate your new beginning with luxury and style.
            </Text>
          </Container>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-surface/50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {HONEYMOON_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row"
                >
                  {/* Left image */}
                  <div className="relative w-full md:w-[45%] h-[260px] md:h-auto shrink-0 select-none overflow-hidden">
                    <CustomImage
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-soft flex items-center gap-1">
                      <Heart size={12} fill="currentColor" /> Romantic Choice
                    </div>
                  </div>

                  {/* Right copy */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1 text-left">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-xs font-semibold text-primary uppercase tracking-wider">
                          <MapPin size={14} />
                          {pkg.location}
                        </span>
                        <span className="flex items-center gap-1 text-caption text-text-secondary font-medium">
                          <Calendar size={14} className="text-primary" />
                          {pkg.duration}
                        </span>
                      </div>

                      <Heading
                        variant="h3"
                        className="font-extrabold text-xl md:text-2xl text-text-primary tracking-tight"
                      >
                        {pkg.title}
                      </Heading>

                      <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                        {pkg.description}
                      </Text>

                      {/* Honeymoon Perks list */}
                      <div className="mt-2">
                        <span className="text-xs font-semibold text-text-primary uppercase tracking-wider block mb-1">
                          Included Perks
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-medium bg-primary/5 text-primary px-2.5 py-1 rounded-md border border-primary/10"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-border/80 pt-5 mt-6">
                      <div className="flex flex-col">
                        <span className="text-caption text-text-secondary font-medium uppercase">
                          Starting Price
                        </span>
                        <span className="text-xl font-black text-primary font-heading">
                          {pkg.price}
                          <span className="text-xs text-text-secondary font-regular ml-1">
                            / couple
                          </span>
                        </span>
                      </div>
                      <Link href="/contact">
                        <Button variant="primary" size="sm" className="font-semibold shadow-soft">
                          Inquire Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Perks Section */}
        <section className="py-20 bg-background border-b border-border">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                Extra Luxury
              </span>
              <Heading
                variant="h2"
                className="text-text-primary tracking-tight font-extrabold text-3xl md:text-4xl mb-4"
              >
                Signature Romantic Experiences
              </Heading>
              <Text
                variant="body-md"
                color="text-secondary"
                className="max-w-xl mx-auto leading-relaxed"
              >
                Add beautiful details to your tour. We offer signature touches to customize your
                romantic journey.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PERKS.map((perk, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 text-left"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface border border-border shrink-0 text-primary shadow-soft">
                    {perk.icon}
                  </div>
                  <Heading
                    variant="h4"
                    className="font-bold text-text-primary tracking-tight text-base md:text-lg"
                  >
                    {perk.title}
                  </Heading>
                  <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                    {perk.desc}
                  </Text>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQs - "Romantic Intel" Section */}
        <section className="py-20 bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-2 flex flex-col gap-4 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider w-fit">
                  <Compass size={14} /> Romantic Intel
                </span>
                <Heading
                  variant="h2"
                  className="text-text-primary tracking-tight font-extrabold text-3xl md:text-4xl"
                >
                  Planning Your Perfect Escape
                </Heading>
                <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                  We&apos;ve gathered important information regarding customization, upgrades, visa
                  support, and decor timelines to help you organize your honeymoon seamlessly.
                </Text>
                <div className="mt-4 flex flex-col gap-3 p-5 rounded-2xl border border-border bg-surface">
                  <span className="flex items-center gap-2 text-sm font-bold text-text-primary">
                    <ShieldCheck size={18} className="text-primary" /> Honeymoon Guarantee
                  </span>
                  <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                    All couples&apos; bookings feature priority support, verified luxury stays, and
                    private transportation.
                  </Text>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-3">
                <Accordion items={ROMANTIC_INTEL} />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
