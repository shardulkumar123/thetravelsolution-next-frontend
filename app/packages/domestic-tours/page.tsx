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
import { Calendar, Compass, MapPin, ShieldCheck, Sun } from "lucide-react";

const DOMESTIC_PACKAGES = [
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
  },
];

const TRIP_INTEL = [
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

export default function DomesticToursPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center">
          <div className="absolute inset-0 z-0 select-none">
            <CustomImage
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
              alt="Domestic landscape roadtrip"
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-slate-950/65" />
          </div>

          <Container className="relative z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Explore India
            </span>
            <Heading variant="display-lg" className="text-white font-extrabold mb-4 tracking-tight">
              Domestic Tour Packages
            </Heading>
            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">Domestic Tours</span>
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
              Discover the Diverse Landscapes of India
            </Heading>
            <Text variant="body-md" color="text-secondary" className="leading-relaxed">
              From the snow-clad peaks of the Himalayas to the warm shores of the Arabian Sea, India
              offers a rich tapestry of heritage, nature, and adventure. Our meticulously planned
              domestic tours offer premium stays, comfortable transits, and guided visits so you can
              explore without a single worry.
            </Text>
          </Container>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-surface/50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {DOMESTIC_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row"
                >
                  {/* Left part: image */}
                  <div className="relative w-full md:w-[45%] h-[260px] md:h-auto shrink-0 select-none overflow-hidden">
                    <CustomImage
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-soft flex items-center gap-1">
                      <Sun size={12} /> Popular
                    </div>
                  </div>

                  {/* Right part: copy */}
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

                      {/* Highlights */}
                      <div className="mt-2">
                        <span className="text-xs font-semibold text-text-primary uppercase tracking-wider block mb-1">
                          Tour Highlights
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-medium bg-surface text-text-secondary px-2.5 py-1 rounded-md border border-border"
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
                            / person
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

        {/* FAQs - "Trip Intel" Section */}
        <section className="py-20 bg-background border-t border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left Column: Heading and Context */}
              <div className="lg:col-span-2 flex flex-col gap-4 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider w-fit">
                  <Compass size={14} /> Trip Intel
                </span>
                <Heading
                  variant="h2"
                  className="text-text-primary tracking-tight font-extrabold text-3xl md:text-4xl"
                >
                  Answers for the Curious Mind
                </Heading>
                <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                  Have questions about custom routes, package inclusions, or transit bookings? We
                  have compiled practical intelligence to help you plan your domestic journey
                  efficiently.
                </Text>
                <div className="mt-4 flex flex-col gap-3 p-5 rounded-2xl border border-border bg-surface">
                  <span className="flex items-center gap-2 text-sm font-bold text-text-primary">
                    <ShieldCheck size={18} className="text-primary" /> Verified Package Standards
                  </span>
                  <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                    All itineraries are verified for transport reliability, local safety, and
                    support response.
                  </Text>
                </div>
              </div>

              {/* Right Column: Interactive Accordion */}
              <div className="lg:col-span-3">
                <Accordion items={TRIP_INTEL} />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
