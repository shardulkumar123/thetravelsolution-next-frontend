import React from "react";

import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";

import { CAROUSEL_SLIDES } from "@/utils/constants";
import { HeroContent } from "./hero/HeroContent";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[85vh] flex items-center justify-start overflow-hidden">
      <Carousel
        slides={CAROUSEL_SLIDES}
        autoPlay
        interval={7000}
        className="absolute inset-0 w-full h-full"
      />
      <Container className="relative z-20 pt-24 pb-24 md:pt-32 md:pb-32 flex flex-col justify-center min-h-[80vh] md:min-h-[85vh] md:px-20 lg:px-32 pointer-events-none">
        <HeroContent />
      </Container>
    </section>
  );
};

HeroSection.displayName = "HeroSection";
