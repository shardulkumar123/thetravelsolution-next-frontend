"use client";

import React from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

export default function PrivacyPolicyPage() {
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
              Legal Documents
            </span>
            <Heading
              variant="h1"
              className="text-text-primary font-heading font-extrabold text-3xl md:text-5xl tracking-tight mb-4 text-white"
            >
              Privacy Policy
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
                  1. Introduction
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  Welcome to The Travel Solution (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;). We respect your privacy and are committed to protecting your
                  personal data. This Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your information when you visit our website or book domestic,
                  international, religious, or honeymoon travel packages through us.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  2. Information We Collect
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                  We collect personal data to provide tailored travel services and seamless inquiry
                  processes. This includes:
                </Text>
                <ul className="list-disc pl-6 text-xs text-text-secondary font-semibold flex flex-col gap-2">
                  <li>
                    <strong>Identity Information:</strong> Name, age, gender, and travel
                    companions&apos; details.
                  </li>
                  <li>
                    <strong>Contact Details:</strong> Email address, mobile phone numbers, and
                    physical address.
                  </li>
                  <li>
                    <strong>Booking Documentation:</strong> Passport details (for international
                    travel), visa documents, travel insurance, and flight preferences.
                  </li>
                  <li>
                    <strong>Inquiry Content:</strong> Preferences, travel dates, custom requests,
                    and destination choices submitted through our booking modals.
                  </li>
                </ul>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  3. How We Use Your Data
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                  We process your data strictly to fulfill bookings, address queries, and customize
                  packages:
                </Text>
                <ul className="list-disc pl-6 text-xs text-text-secondary font-semibold flex flex-col gap-2">
                  <li>Processing hotel reservations, visa clearances, and logistics support.</li>
                  <li>Sending travel confirmations, updates, alerts, and detailed itineraries.</li>
                  <li>
                    Assisting high-altitude preparation and safety coordination during pilgrim
                    yatras (like Char Dham).
                  </li>
                  <li>
                    Analyzing page usage to optimize website design, image carousels, and search
                    experiences.
                  </li>
                </ul>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  4. Sharing Your Information
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  We only share your information with trusted third-party providers (hotels,
                  airlines, local transport networks, and tour guides) as required to deliver your
                  selected travel itinerary. We do not sell, lease, or rent your personal
                  information to third-party marketing companies.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  5. Data Security
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  We use industry-standard physical, electronic, and administrative safeguards to
                  protect your personal details against unauthorized access, loss, misuse, or
                  alteration. All booking inquiry forms and transmissions are encrypted using
                  standard secure protocols.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  6. Your Rights
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  You have the right to request access to the personal data we hold about you,
                  request corrections to out-of-date or incomplete information, or request the
                  deletion of your customer details once the travel bookings are completed, subject
                  to regulatory compliance.
                </Text>
              </div>

              <div className="pt-6 border-t border-border mt-4">
                <Heading variant="h4" className="text-lg font-bold text-text-primary mb-2">
                  Questions & Support
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  If you have questions about this policy or want to update your details, please
                  reach out to us at{" "}
                  <a
                    href="mailto:travelsolutionuk0@gmail.com"
                    className="text-primary hover:underline font-bold"
                  >
                    travelsolutionuk0@gmail.com
                  </a>{" "}
                  or call us directly at{" "}
                  <a href="tel:+919258645860" className="text-primary hover:underline font-bold">
                    +91 92586 45860
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
