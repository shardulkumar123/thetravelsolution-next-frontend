"use client";

import React, { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Sarah Jenkins",
    role: "Maldives Honeymooner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "Our honeymoon in the Maldives was absolutely flawless. The overwater villa recommendation was spot-on, and every single transfer was perfectly coordinated. We didn't have to worry about a thing!",
    trip: "Maldives Luxury Escape",
  },
  {
    id: "t-2",
    name: "Rajesh Sharma",
    role: "Chardham Pilgrim",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "Organizing the Chaar Dham Yatra for my elderly parents seemed challenging, but The Travel Solution handled everything—from biometrics to helicopter slots and premium stays. Extremely professional and caring service.",
    trip: "Do Dham Yatra",
  },
  {
    id: "t-3",
    name: "Emily Watson",
    role: "Ladakh Explorer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "The Ladakh road trip was pure adventure combined with incredible comfort. The luxury tents next to Pangong Lake were spectacular, and our mountain driver was extremely skilled and safe.",
    trip: "Ladakh Adventure Loop",
  },
  {
    id: "t-4",
    name: "David Miller",
    role: "Rajasthan Explorer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "Our Rajasthan heritage tour was stunning! The tour guides at Jaipur and Udaipur forts were incredibly knowledgeable. Everything from the heritage hotels to the desert safari was top-tier.",
    trip: "Royal Rajasthan Heritage",
  },
  {
    id: "t-5",
    name: "Sophia Martinez",
    role: "Kashmir Explorer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "Our trip to Kashmir was magical. Floating on Dal Lake in a luxury houseboat, riding snow cable cars in Gulmarg, and walking Pahalgam flower valleys was unforgettable. The local driver was wonderful!",
    trip: "Romantic Kashmir Loop",
  },
];

export const FeedbackSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      let cards = 3;
      if (window.innerWidth < 768) {
        cards = 1;
      } else if (window.innerWidth < 1024) {
        cards = 2;
      } else {
        cards = 3;
      }
      setVisibleCards(cards);

      const localMaxIndex = Math.max(0, TESTIMONIALS.length - cards);
      setCurrentIndex((prev) => Math.min(prev, localMaxIndex));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCards);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      className="py-20 bg-surface/30 border-b border-border relative overflow-hidden"
      id="feedback"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left max-w-2xl gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
              Client Stories
            </span>
            <Heading
              variant="h2"
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary"
            >
              What Our Travelers Say
            </Heading>
            <Text variant="body-md" className="text-text-secondary leading-relaxed max-w-xl">
              Read reviews and travel stories from explorers who designed their dream getaways with
              The Travel Solution.
            </Text>
          </div>

          {/* Navigation Buttons */}
          {maxIndex > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center bg-card text-text-primary hover:bg-primary hover:text-white transition-all shadow-soft cursor-pointer outline-none focus:ring-2 focus:ring-primary"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center bg-card text-text-primary hover:bg-primary hover:text-white transition-all shadow-soft cursor-pointer outline-none focus:ring-2 focus:ring-primary"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Testimonials Carousel Slider */}
        <div className="overflow-hidden w-full relative -mx-4 px-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="shrink-0 px-4 flex flex-col"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="group relative flex flex-col justify-between p-8 rounded-3xl border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 text-left h-full min-h-[300px]">
                  {/* Quote Icon overlay */}
                  <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                    <Quote size={40} className="fill-current" />
                  </div>

                  <div className="flex flex-col gap-5">
                    {/* Rating */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-warning text-warning" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <Text
                      variant="body-md"
                      className="text-text-secondary leading-relaxed italic flex-1 line-clamp-6"
                    >
                      &ldquo;{t.text}&rdquo;
                    </Text>
                  </div>

                  {/* Client Info */}
                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-border">
                      <CustomImage src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col select-none">
                      <span className="font-bold text-text-primary text-sm">{t.name}</span>
                      <span className="text-[11px] font-semibold text-text-secondary">
                        {t.role}
                      </span>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider mt-0.5">
                        {t.trip}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicator dots */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer outline-none",
                  i === currentIndex ? "bg-primary w-6" : "bg-border w-2"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Trust Pilot / Google Rating Badge */}
        <div className="mt-16 text-center flex flex-col md:flex-row items-center justify-center gap-4 py-6 border-t border-border/60 max-w-xl mx-auto">
          <div className="flex items-center gap-1">
            <span className="text-xl font-black text-text-primary">4.9</span>
            <span className="text-sm font-bold text-text-secondary">/ 5.0</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-border" />
          <Text variant="body-sm" className="text-text-secondary font-medium">
            Based on over <strong>1,200+ reviews</strong> on Google, TripAdvisor, and Facebook.
          </Text>
        </div>
      </Container>
    </section>
  );
};

FeedbackSection.displayName = "FeedbackSection";
