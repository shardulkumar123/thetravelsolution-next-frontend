"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { CustomImage } from "./CustomImage";

import { cn } from "@/lib/utils";

export interface CarouselSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = true,
  interval = 6000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  useEffect(() => {
    if (autoPlay && !isHovering) {
      timerRef.current = setInterval(nextSlide, interval);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, interval, nextSlide, isHovering]);

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full h-full group focus-within:ring-2 focus-within:ring-primary outline-none",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Background Travel Slideshow"
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={cn(
                "absolute inset-0 w-full h-full transition-all duration-[1000ms] ease-in-out",
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0 pointer-events-none"
              )}
              aria-hidden={!isActive}
            >
              <div className="relative w-full h-full select-none">
                <CustomImage
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  containerClassName="rounded-none border-none shadow-none"
                  className={cn(
                    "object-cover transition-transform duration-[6000ms] ease-out",
                    isActive ? "scale-105" : "scale-100"
                  )}
                />
                {/* Dynamic readable dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-slate-950/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/25 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-soft hover:scale-105"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/25 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-soft hover:scale-105"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Timing Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500 cursor-pointer outline-none focus:ring-2 focus:ring-primary",
                isActive ? "bg-primary w-10" : "bg-white/30 hover:bg-white/60 w-3"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? "true" : "false"}
            />
          );
        })}
      </div>
    </div>
  );
};

Carousel.displayName = "Carousel";
