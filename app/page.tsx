"use client";

import React from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Award, MapPin, ShieldCheck } from "lucide-react";

export default function Home() {
  const carouselSlides = [
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      alt: "Majestic Alpine Lake",
    },
    {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      alt: "Scenic Travel Boat Cruise",
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      alt: "Golden Beach Sunset",
    },
  ];

  const stats = [
    {
      id: "stat-1",
      number: "12M+",
      label: "Active Travelers",
      icon: <MapPin className="text-primary size-5" />,
    },
    {
      id: "stat-2",
      number: "150+",
      label: "Global Destinations",
      icon: <Award className="text-secondary size-5" />,
    },
    {
      id: "stat-3",
      number: "99.9%",
      label: "Customer Satisfaction",
      icon: <ShieldCheck className="text-success size-5" />,
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-background text-text-primary transition-colors duration-[var(--transition-duration-default-val)]"
      id="home"
    >
      <Navbar />

      <main className="flex-1">
        {/* Full-bleed Hero Section */}
        <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-start overflow-hidden">
          {/* Cinematic Background Carousel */}
          <Carousel
            slides={carouselSlides}
            autoPlay
            interval={7000}
            className="absolute inset-0 w-full h-full"
          />

          {/* Content Layer */}
          <Container className="relative z-20 pt-24 pb-20 md:pt-32 md:pb-28 flex flex-col justify-between min-h-[90vh] md:min-h-screen">
            {/* Copywriting Block */}
            <div className="flex-1 flex flex-col justify-center items-start text-left gap-6 max-w-2xl my-auto animate-carousel-fade">
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

              <Text
                variant="body-lg"
                className="max-w-xl leading-relaxed text-white/90 font-medium"
              >
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

            {/* Glassmorphic Stats Row */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-12 md:mt-16"
              id="stats"
            >
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex items-center gap-4 p-6 rounded-card border border-white/10 bg-slate-950/40 dark:bg-slate-900/40 backdrop-blur-md text-white shadow-medium hover:shadow-hard hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-btn bg-white/10 border border-white/10 shrink-0 shadow-soft">
                    {stat.icon}
                  </div>
                  <div>
                    <Heading variant="h3" className="text-white tracking-tight font-extrabold">
                      {stat.number}
                    </Heading>
                    <Text variant="body-sm" className="font-medium mt-0.5 text-white/80">
                      {stat.label}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
