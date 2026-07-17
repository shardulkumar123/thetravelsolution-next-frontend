"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TourCard } from "@/components/ui/TourCard";
import { Heading, Text } from "@/components/ui/Typography";
import { CheckCircle2, HeartPulse } from "lucide-react";

import { DHAMS, YATRA_ITINERARY } from "@/utils/constants";

// Mapping individual Dham details for card layout uniformity
const DHAM_EXTRA_DETAILS: Record<
  string,
  {
    location: string;
    duration: string;
    price: string;
    packageId: string;
    highlights: string[];
  }
> = {
  Yamunotri: {
    location: "Uttarakhand, India",
    duration: "10 Days Yatra",
    price: "₹48,990",
    packageId: "st-4",
    highlights: ["Surya Kund Dip", "Goddess Yamuna Seat", "Janki Chatti Trek"],
  },
  Gangotri: {
    location: "Uttarakhand, India",
    duration: "10 Days Yatra",
    price: "₹48,990",
    packageId: "st-4",
    highlights: ["Bhagirathi Source", "Granite Temple", "Harsil Valley Loop"],
  },
  Kedarnath: {
    location: "Uttarakhand, India",
    duration: "10 Days Yatra",
    price: "₹24,999",
    packageId: "st-1",
    highlights: ["Jyotirlinga Temple", "Helicopter Transfer", "16km Scenic Trek"],
  },
  Badrinath: {
    location: "Uttarakhand, India",
    duration: "10 Days Yatra",
    price: "₹24,999",
    packageId: "st-1",
    highlights: ["Badri Vishal Seat", "Tapt Kund Baths", "Mana Tibetan Border"],
  },
};

interface ChardhamSpotlightProps {
  onBookClick: (dhamName: string) => void;
}

export const ChardhamSpotlight: React.FC<ChardhamSpotlightProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 bg-background border-b border-border">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Grand Pilgrimage
          </span>
          <Heading
            variant="h2"
            className="text-text-primary tracking-tight font-extrabold text-3xl md:text-5xl mb-4"
          >
            Chaar Dham Yatra Uttarakhand
          </Heading>
          <Text variant="body-md" color="text-secondary" className="leading-relaxed">
            Embark on India&apos;s most sacred pilgrimage traversing Yamunotri, Gangotri, Kedarnath,
            and Badrinath. Deeply rooted in history and divinity, this holy circuit washed in the
            pristine waters of the Himalayas brings spiritual liberation and unmatched serenity.
          </Text>
        </div>

        {/* The Four Dhams Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {DHAMS.map((dham, idx) => {
            const details = DHAM_EXTRA_DETAILS[dham.name] || {
              location: "Uttarakhand, India",
              duration: "10 Days Yatra",
              price: "₹48,990",
              packageId: "st-4",
              highlights: ["Himalayan Sightseeing", "Temple Darshan", "VIP Clearances"],
            };
            const pkgData = {
              id: details.packageId,
              title: `${dham.name} Dham`,
              location: details.location,
              duration: details.duration,
              price: details.price,
              description: `${dham.desc} (Altitude: ${dham.altitude})`,
              images: dham.images,
              highlights: details.highlights,
            };
            return (
              <TourCard
                key={idx}
                pkg={pkgData}
                onBookClick={() => onBookClick(dham.name)}
                viewDetailsHref={`/packages/${details.packageId}`}
                imageIndexOverlay={idx + 1}
              />
            );
          })}
        </div>

        {/* Itinerary Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start bg-surface/50 border border-border rounded-3xl p-8 md:p-12 mb-16">
          <div className="lg:col-span-1 flex flex-col gap-5 text-left">
            <Heading
              variant="h3"
              className="font-extrabold text-text-primary text-2xl md:text-3xl tracking-tight"
            >
              10-Day Sacred Route
            </Heading>
            <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
              A structured day-by-day travel map to ensure safe acclimatization, timely prayers, and
              complete support throughout the yatra.
            </Text>
            <div className="flex flex-col gap-3.5 mt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-primary shrink-0" />
                <span className="text-body-sm font-semibold text-text-secondary">
                  Premium Hotels & Camps
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-primary shrink-0" />
                <span className="text-body-sm font-semibold text-text-secondary">
                  Private Mountain Drivers
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-primary shrink-0" />
                <span className="text-body-sm font-semibold text-text-secondary">
                  24/7 Operations Desk Support
                </span>
              </div>
            </div>
            <div className="mt-4 pt-5 border-t border-border">
              <span className="text-caption text-text-secondary uppercase block mb-1">
                Starting package price
              </span>
              <span className="text-2xl font-black text-primary font-heading block mb-4">
                ₹48,990 / person
              </span>
              <Link href="/contact">
                <Button variant="primary" className="w-full font-bold shadow-soft">
                  Book Yatra Package
                </Button>
              </Link>
            </div>
          </div>

          {/* Day-by-Day scrollable view */}
          <div className="lg:col-span-2 h-[450px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-border text-left">
            {YATRA_ITINERARY.map((itinerary, i) => (
              <div key={i} className="relative pl-8 border-l border-primary/30 pb-6 last:pb-0">
                {/* Circle icon marker */}
                <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-soft" />

                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-extrabold bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded-md uppercase">
                    {itinerary.day}
                  </span>
                  <h4 className="font-bold text-text-primary text-body-md tracking-tight">
                    {itinerary.title}
                  </h4>
                </div>
                <Text variant="body-sm" color="text-secondary" className="leading-relaxed pl-1">
                  {itinerary.details}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation warning hub */}
        <div className="rounded-2xl bg-danger/5 border border-danger/20 p-6 flex flex-col md:flex-row items-start md:items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-full bg-danger/10 text-danger flex items-center justify-center shrink-0 shadow-soft">
            <HeartPulse size={24} />
          </div>
          <div>
            <Heading variant="h5" className="font-extrabold text-danger tracking-tight mb-1">
              Pilgrim Safety & High-Altitude Acclimatization
            </Heading>
            <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
              Both Kedarnath and Yamunotri dhams require walking long distances at high elevations.
              We recommend that all travelers undergo light cardio exercises 30 days prior, carry
              oxygen cans, and drink plenty of water to avoid altitude sickness.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};

ChardhamSpotlight.displayName = "ChardhamSpotlight";
