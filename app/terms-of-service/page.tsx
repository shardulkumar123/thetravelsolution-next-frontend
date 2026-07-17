"use client";

import React from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

export default function TermsOfServicePage() {
  const lastUpdated = "July 18, 2026";

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
              Terms of Service
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
              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  1. Agreement to Terms
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  By accessing our website, browsing our travel listings (domestic, international,
                  honeymoon, and religious packages), or placing inquiries/bookings, you agree to
                  comply with and be bound by these Terms of Service. If you do not agree, please
                  discontinue using this website immediately.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  2. Booking and Inquiry Conditions
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                  We display custom packages and offer immediate booking inquiry forms:
                </Text>
                <ul className="list-disc pl-6 text-xs text-text-secondary font-semibold flex flex-col gap-2">
                  <li>
                    <strong>Accuracy of Details:</strong> You must supply authentic traveler names,
                    contacts, and requirements when submitting an inquiry or query.
                  </li>
                  <li>
                    <strong>Price Changes:</strong> Package starting prices listed on the website
                    are baseline dynamic estimates and are subject to transport, hotel availability,
                    and season spikes.
                  </li>
                  <li>
                    <strong>Flight and Visa Terms:</strong> International tours packages generally
                    do not include visa processing fees or flight reservations unless specified
                    inside your private custom booking quotation.
                  </li>
                </ul>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  3. Cancellation and Refund Policy
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  Cancellations of confirmed hotel bookings, mountain drivers, or local operations
                  desk reservations are subject to standard operators fees. Specific cancellation
                  charges will be shared transparently during the final payment validation phase. We
                  recommend reviewing local operators guidelines prior to processing final yatra
                  deposits.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  4. Traveler Safety Responsibility
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  Certain tour itineraries (specifically pilgrim circuits like Yamunotri and
                  Kedarnath) require traveling to high elevations and traversing steep terrains.
                  Travelers are solely responsible for verifying their medical suitability,
                  acquiring necessary high-altitude preparation (such as portable oxygen cylinders
                  and warm apparel), and carrying verified physical fitness logs if required by
                  government authorities.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  5. Intellectual Property
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  All digital assets, logos, design templates, layouts, typography settings, and
                  image sliders displayed on this site are protected by copyright laws. You may not
                  extract, replicate, or reuse any media elements without explicit written
                  authorization from us.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  6. Limitation of Liability
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  The Travel Solution will not be held liable for itinerary changes, delays,
                  transport halts, road blocks, landslides, flight cancelations, or medical issues
                  arising from natural Himalayan climate patterns or independent airline/resort
                  service lapses.
                </Text>
              </div>

              <div className="pt-6 border-t border-border mt-4">
                <Heading variant="h4" className="text-lg font-bold text-text-primary mb-2">
                  Legal Queries
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  If you require clarifying information regarding our Booking Agreements or Terms of
                  Use, please reach out to us at{" "}
                  <a
                    href="mailto:travelsolutionuk0@gmail.com"
                    className="text-primary hover:underline font-bold"
                  >
                    travelsolutionuk0@gmail.com
                  </a>
                  .
                </Text>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
