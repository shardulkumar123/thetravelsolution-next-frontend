"use client";

import React from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

export default function TermsOfServicePage() {
  const lastUpdated = "July 30, 2026";

  const terms = [
    {
      title: "1. Advance Payment",
      content:
        "25% required to confirm the booking; balance must be cleared before the tour begins.",
    },
    {
      title: "2. Cancellation Policy",
      content:
        "100% cancellation charges applicable if cancelled within 15 days of departure. Refunds (if any) are subject to vendor terms.",
    },
    {
      title: "3. Service Usage",
      content:
        "Vehicles, hotels, and amenities must be used responsibly. Any misuse or illegal activity may result in penalties or immediate service cancellation.",
    },
    {
      title: "4. Driver & Vehicle Limits",
      content:
        "Drivers will adhere to legal driving hours. Night driving, detours, or non-itinerary usage may attract extra charges.",
    },
    {
      title: "5. Changes & Delays",
      content:
        "Itinerary changes due to weather, roadblocks, or political unrest are beyond our control. No refunds will be provided for unused services.",
    },
    {
      title: "6. ID Requirements",
      content: "All travelers must carry valid government-issued ID.",
    },
    {
      title: "7. Hotel Policies",
      content:
        "Standard check-in/check-out times apply. Early check-in or late check-out is subject to availability and may incur extra charges.",
    },
    {
      title: "8. Child & Extra Bed Policy",
      content:
        "Charges may apply as per hotel norms. Please confirm in advance for family arrangements.",
    },
    {
      title: "9. Force Majeure",
      content:
        "No liability for delays, damages, or cancellations caused by natural calamities, accidents, strikes, or unforeseen circumstances.",
    },
    {
      title: "10. Dispute Jurisdiction",
      content: "All disputes are subject to the jurisdiction of Dehradun, Uttarakhand.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative py-20 bg-slate-900 text-white overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-hover/30 via-slate-900 to-secondary/30 opacity-60 z-0" />
          <Container className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              Terms & Conditions
            </span>
            <Heading
              variant="h1"
              className="text-text-primary font-heading font-extrabold text-3xl md:text-5xl tracking-tight mb-4 text-white"
            >
              Terms & Conditions
            </Heading>
            <Text variant="body-md" className="text-white/80">
              Last Updated: {lastUpdated}
            </Text>
          </Container>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <Container className="max-w-4xl text-left">
            <div className="prose prose-slate max-w-none flex flex-col gap-8">
              {terms.map((term, index) => (
                <div key={index}>
                  <Heading
                    variant="h2"
                    className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                  >
                    {term.title}
                  </Heading>
                  <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                    {term.content}
                  </Text>
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
