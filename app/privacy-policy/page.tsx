"use client";

import React from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 30, 2026";

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
                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-4">
                  Welcome to The Travel Solution (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
                  &ldquo;our&rdquo;). Your privacy is a priority for us. This Privacy Policy
                  explains how we collect, use, disclose and safeguard your personal information
                  when you visit our website, engage with our content or use our services.
                </Text>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  By accessing or using our Site, you agree to the terms of this Privacy Policy.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  1. Information We Collect
                </Heading>
                <Heading variant="h4" className="text-base font-bold text-text-primary mb-2">
                  Personal Information You Provide
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                  We may collect personal information that you provide including when you:
                </Text>
                <ul className="list-disc pl-6 text-xs text-text-secondary font-semibold flex flex-col gap-2 mb-4">
                  <li>Complete contact or inquiry forms</li>
                  <li>Book tours or request travel planning support</li>
                  <li>Communicate with us via email or messaging</li>
                </ul>

                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                  This personal information includes:
                </Text>
                <ul className="list-disc pl-6 text-xs text-text-secondary font-semibold flex flex-col gap-2 mb-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Travel preferences and itinerary details</li>
                  <li>Payment and credit card details</li>
                </ul>

                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  This data also helps us understand user behaviour and improve the experience on
                  the Site. Like many websites, we may use cookies to collect this information.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  2. How We Use Your Information
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                  We may use the information we collect for purposes including:
                </Text>
                <ul className="list-disc pl-6 text-xs text-text-secondary font-semibold flex flex-col gap-2">
                  <li>Providing, operating and improving our Site and services</li>
                  <li>Personalising your experience</li>
                  <li>Responding to inquiries and booking requests</li>
                </ul>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  3. Cookies & Tracking Technologies
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  We use cookies and similar technologies to remember your preferences and track
                  usage trends. You can usually adjust your browser settings to decline cookies but
                  this may limit certain features.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  4. Sharing Your Information
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                  We do not sell your personal information to third parties.
                </Text>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  We may share information with legal authorities if required by law or to protect
                  rights and safety.
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
                  We use administrative, technical and physical safeguard measures to protect
                  personal information. However, no security measure is perfect or impenetrable and
                  we cannot guarantee absolute security.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  6. Data Retention
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  We retain personal information only for as long as necessary to fulfil the
                  purposes outlined in this Privacy Policy and as permitted by applicable laws.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  7. Changes to This Privacy Policy
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  We may update this Privacy Policy. When we do, we will revise the &ldquo;Last
                  Updated&rdquo; date. Continued use of the Site after changes constitutes
                  acceptance of the updated policy.
                </Text>
              </div>

              <div className="pt-6 border-t border-border mt-4">
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  8. Contact Us
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                  If you have any questions about this Privacy Policy or your personal information:
                </Text>
                <ul className="list-none pl-0 text-xs text-text-secondary font-semibold flex flex-col gap-2">
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:9258645860" className="text-primary hover:underline font-bold">
                      9258645860
                    </a>
                    ,{" "}
                    <a href="tel:9084656222" className="text-primary hover:underline font-bold">
                      9084656222
                    </a>
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:travelsolutionuk0@gmail.com"
                      className="text-primary hover:underline font-bold"
                    >
                      travelsolutionuk0@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Address:</strong> Nangal Sahastradhara dehradun 248001, Uttarakhand
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
