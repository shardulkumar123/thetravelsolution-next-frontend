"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { Calendar, ChevronLeft, ChevronRight, Compass, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image?: string;
  images?: string[];
  description: string;
  highlights: string[];
}

interface TourCardProps {
  pkg: TourPackage;
  onBookClick: (packageName: string) => void;
  viewDetailsHref?: string;
  className?: string;
  imageIndexOverlay?: number;
}

export const TourCard: React.FC<TourCardProps> = ({
  pkg,
  onBookClick,
  viewDetailsHref,
  className,
  imageIndexOverlay,
}) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const hasSlider = pkg.images && pkg.images.length > 1;
  const displayImage = hasSlider ? pkg.images?.[currentImgIdx] : pkg.image;
  const detailsUrl = viewDetailsHref || `/packages/${pkg.id}`;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const imgs = pkg.images;
    if (imgs && imgs.length > 0) {
      setCurrentImgIdx((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const imgs = pkg.images;
    if (imgs && imgs.length > 0) {
      setCurrentImgIdx((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group",
        className
      )}
    >
      {/* Image / Image Slider Section */}
      <div className="relative w-full h-[280px] md:h-[340px] select-none overflow-hidden shrink-0 group/slider">
        {displayImage ? (
          <CustomImage
            src={displayImage}
            alt={pkg.title}
            fill
            className="object-cover group-hover:scale-103 transition-transform duration-500"
          />
        ) : null}

        {/* Location badge overlay */}
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-primary font-bold text-xs px-3.5 py-1.5 rounded-full border border-primary/20 shadow-soft z-10">
          {imageIndexOverlay !== undefined ? `0${imageIndexOverlay}` : pkg.location}
        </div>

        {/* Slider Controls (if images array has multiple items) */}
        {hasSlider && pkg.images && (
          <>
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

            {/* Slider Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {pkg.images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => {
                    e.preventDefault();
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
          </>
        )}
      </div>

      {/* Card Copy / Description Section */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 text-xs font-bold text-text-secondary mb-3">
            <span className="flex items-center gap-1">
              <Compass size={14} className="text-primary" />
              {pkg.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-secondary" />
              {pkg.duration}
            </span>
          </div>

          <Heading
            variant="h3"
            className="text-2xl font-bold tracking-tight text-text-primary mb-3 text-left"
          >
            {pkg.title}
          </Heading>

          <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-6 text-left">
            {pkg.description}
          </Text>

          <div className="flex flex-col gap-3 mb-8 text-left">
            <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
              Package Highlights:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {pkg.highlights.map((highlight, index) => (
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

        {/* Footer Area */}
        <div className="pt-6 border-t border-border flex items-center justify-between gap-2">
          <div className="flex flex-col text-left shrink-0">
            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider text-[10px]">
              Starting Price
            </span>
            <span className="text-xl font-black text-primary font-heading mt-1">{pkg.price}</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href={detailsUrl}>
              <Button
                variant="outline"
                className="font-bold shadow-soft cursor-pointer text-xs py-2 px-4"
              >
                View Details
              </Button>
            </Link>
            <Button
              onClick={() => onBookClick(pkg.title)}
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

TourCard.displayName = "TourCard";
