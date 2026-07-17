"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import {
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import { DHAMS, YATRA_ITINERARY } from "@/utils/constants";

import { cn } from "@/lib/utils";

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

interface DhamCardProps {
  dham: (typeof DHAMS)[0];
  idx: number;
  onBookClick: (dhamName: string) => void;
}

const DhamCard: React.FC<DhamCardProps> = ({ dham, idx, onBookClick }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev === 0 ? dham.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev === dham.images.length - 1 ? 0 : prev + 1));
  };

  const details = DHAM_EXTRA_DETAILS[dham.name] || {
    location: "Uttarakhand, India",
    duration: "10 Days Yatra",
    price: "₹48,990",
    packageId: "st-4",
    highlights: ["Himalayan Sightseeing", "Temple Darshan", "VIP Clearances"],
  };

  return (
    <div className="group rounded-3xl border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left">
      {/* Image Slider */}
      <div className="relative w-full h-[220px] md:h-[280px] select-none overflow-hidden shrink-0 group/slider">
        <CustomImage
          src={dham.images[currentImgIdx]}
          alt={`${dham.name} Dham`}
          fill
          className="object-cover group-hover:scale-103 transition-transform duration-500"
        />
        {/* Overlay Index */}
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-text-primary font-bold text-xs px-3 py-1.5 rounded-full border border-primary/20 shadow-soft z-10">
          0{idx + 1}
        </div>

        {/* Slider Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/90 hover:bg-background text-text-primary flex items-center justify-center shadow-soft opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10 cursor-pointer border border-border"
          aria-label="Previous image"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/90 hover:bg-background text-text-primary flex items-center justify-center shadow-soft opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10 cursor-pointer border border-border"
          aria-label="Next image"
        >
          <ChevronRight size={16} />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {dham.images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImgIdx(dotIdx);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                dotIdx === currentImgIdx ? "bg-primary w-4" : "bg-white/60 w-1.5"
              )}
              aria-label={`Go to image ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 text-xs font-bold text-text-secondary mb-3">
            <span className="flex items-center gap-1">
              <Compass size={14} className="text-primary" />
              {details.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-secondary" />
              {details.duration}
            </span>
          </div>

          <Heading
            variant="h3"
            className="text-2xl font-bold tracking-tight text-text-primary mb-3"
          >
            {dham.name} Dham
          </Heading>

          <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-6">
            {dham.desc}{" "}
            <span className="text-text-secondary font-semibold">
              (Altitude: <span className="text-primary font-bold">{dham.altitude}</span>)
            </span>
          </Text>

          <div className="flex flex-col gap-3 mb-8">
            <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
              Dham Highlights:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {details.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-surface border border-border/60"
                >
                  <ShieldCheck size={16} className="text-primary shrink-0" />
                  <span className="text-xs font-semibold text-text-secondary">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex items-center justify-between gap-2">
          <div className="flex flex-col text-left shrink-0">
            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider text-[10px]">
              Starting Price
            </span>
            <span className="text-xl font-black text-primary font-heading mt-1">
              {details.price}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/packages/${details.packageId}`}>
              <Button
                variant="outline"
                className="font-bold shadow-soft cursor-pointer text-xs py-2 px-4"
              >
                View Details
              </Button>
            </Link>
            <Button
              onClick={() => onBookClick(dham.name)}
              variant="primary"
              className="font-bold shadow-soft cursor-pointer text-xs py-2 px-4"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {DHAMS.map((dham, idx) => (
            <DhamCard key={idx} dham={dham} idx={idx} onBookClick={onBookClick} />
          ))}
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
