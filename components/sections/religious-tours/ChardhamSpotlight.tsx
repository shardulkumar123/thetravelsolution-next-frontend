"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { CheckCircle2, ChevronLeft, ChevronRight, HeartPulse } from "lucide-react";

import { DHAMS, YATRA_ITINERARY } from "@/utils/constants";

import { cn } from "@/lib/utils";

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

  return (
    <div className="group rounded-2xl border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left">
      {/* Image Slider */}
      <div className="relative w-full h-[200px] md:h-[260px] 2xl:h-[180px] select-none overflow-hidden shrink-0 group/slider">
        <CustomImage
          src={dham.images[currentImgIdx]}
          alt={`${dham.name} Dham`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay Index */}
        <div className="absolute top-3 left-3 bg-background/85 backdrop-blur-sm text-text-primary font-bold text-xs px-2.5 py-1 rounded-md shadow-soft z-10">
          0{idx + 1}
        </div>

        {/* Slider Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/85 hover:bg-background text-text-primary flex items-center justify-center shadow-soft opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10 cursor-pointer border border-border"
          aria-label="Previous image"
        >
          <ChevronLeft size={14} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/85 hover:bg-background text-text-primary flex items-center justify-center shadow-soft opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10 cursor-pointer border border-border"
          aria-label="Next image"
        >
          <ChevronRight size={14} />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
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

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <Heading variant="h4" className="font-extrabold text-text-primary tracking-tight text-lg">
            {dham.name} Dham
          </Heading>
          <Text
            variant="body-sm"
            color="text-secondary"
            className="leading-relaxed min-h-[105px] line-clamp-5"
          >
            {dham.desc}{" "}
            <span className="text-text-secondary font-medium">
              (Altitude: <span className="text-primary font-bold">{dham.altitude}</span>)
            </span>
          </Text>
        </div>

        <div className="mt-5 pt-4 border-t border-border flex justify-center">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onBookClick(dham.name)}
            className="w-fit px-6 text-caption py-2.5 font-bold cursor-pointer flex items-center justify-center gap-1 group/btn shadow-soft hover:shadow-medium transition-all"
          >
            <span>Book This Dham</span>
            <ChevronRight
              size={14}
              className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
            />
          </Button>
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
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8  mb-16">
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
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-body-sm font-semibold text-text-secondary">
                  Premium Hotels & Camps
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-body-sm font-semibold text-text-secondary">
                  Private Mountain Drivers
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
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
