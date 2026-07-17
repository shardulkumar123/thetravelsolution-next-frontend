"use client";

import React from "react";

import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

import { CAROUSEL_SLIDES } from "@/utils/constants";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[85vh] flex items-center justify-start overflow-hidden">
      {/* Cinematic Background Carousel */}
      <Carousel
        slides={CAROUSEL_SLIDES}
        autoPlay
        interval={7000}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content Layer */}
      <Container className="relative z-20 pt-24 pb-24 md:pt-32 md:pb-32 flex flex-col justify-center min-h-[80vh] md:min-h-[85vh] md:px-20 lg:px-32 pointer-events-none">
        {/* Copywriting Block */}
        <div className="flex flex-col justify-center items-start text-left gap-6 max-w-2xl my-auto animate-carousel-fade pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <Text
              variant="label"
              className="text-xs uppercase tracking-wider font-semibold text-white"
            >
              The Ultimate Travel Platform
            </Text>
          </div>

          <Heading
            variant="display-xl"
            className="tracking-tight text-white font-extrabold leading-tight"
          >
            Design Your Next{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perfect Getaway
            </span>
          </Heading>

          <Text variant="body-lg" className="max-w-xl leading-relaxed text-white/90 font-medium">
            Discover, plan, and book your tailored journeys with our intuitive, premium
            TravelSolution platform. Empowering agency networks and explorers worldwide.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Explore Destinations
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

HeroSection.displayName = "HeroSection";
