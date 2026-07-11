"use client";

import React from "react";

import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

import { SERVICES_ITEMS } from "@/utils/constants";

export const ServicesSection: React.FC = () => {
  return (
    <section
      className="bg-background text-text-primary py-20 relative overflow-hidden border-b border-border"
      id="services"
    >
      {/* Decorative blurred backgrounds for a premium feel */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px] pointer-events-none -ml-32 -mb-32" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-bold">
            Our Offerings
          </div>
          <Heading variant="h2" className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Premium Services We Offer
          </Heading>
          <Text variant="body-md" className="text-text-secondary leading-relaxed max-w-xl">
            From planning customized itineraries to managing transit logistics, we cover all details
            so you can enjoy your dream getaway.
          </Text>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_ITEMS.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col p-8 rounded-card border border-border bg-card text-text-primary shadow-soft hover:shadow-medium hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon Container */}
              <div className="flex items-center justify-center w-14 h-14 rounded-btn bg-surface border border-border shrink-0 shadow-soft group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 mb-6">
                {service.icon}
              </div>

              {/* Title & Description */}
              <Heading
                variant="h3"
                className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300"
              >
                {service.title}
              </Heading>

              <Text variant="body-md" className="text-text-secondary leading-relaxed flex-1">
                {service.description}
              </Text>

              {/* Modern subtle micro-interaction link indicator */}
              <div className="mt-6 flex items-center gap-1.5 text-body-sm font-bold text-primary opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span>Learn More</span>
                <span className="text-base leading-none">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

ServicesSection.displayName = "ServicesSection";
