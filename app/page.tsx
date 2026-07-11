"use client";

import React from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-background text-text-primary transition-colors duration-[var(--transition-duration-default-val)]"
      id="home"
    >
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
