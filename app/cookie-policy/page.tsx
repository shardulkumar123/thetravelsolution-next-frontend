"use client";

import React from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

export default function CookiePolicyPage() {
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
              Website Cookies
            </span>
            <Heading
              variant="h1"
              className="text-text-primary font-heading font-extrabold text-3xl md:text-5xl tracking-tight mb-4 text-white"
            >
              Cookie Policy
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
                  1. What Are Cookies?
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  Cookies are tiny text files containing data stored on your device (computer,
                  tablet, or smartphone) when you browse web pages. They serve to recognize your
                  browser, save display choices, and streamline customer authentication sequences.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  2. Cookies We Use
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                  We use cookies for various security, optimization, and analytical purposes:
                </Text>
                <ul className="list-disc pl-6 text-xs text-text-secondary font-semibold flex flex-col gap-2">
                  <li>
                    <strong>Essential Cookies:</strong> Essential to browse pages, submit inquiries
                    via modal portals, and protect security structures.
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Used to record selected destinations,
                    custom package filtering preferences, and active tab selections.
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Collect anonymous data on user
                    interactions, page navigation speed, and active user traffic blocks to guide
                    code optimization.
                  </li>
                </ul>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  3. Third-Party Analytics Cookies
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  We may collaborate with third-party analytical partners (such as Google Analytics)
                  that store tracking cookies to measure aggregate traffic patterns, search queries,
                  and session statistics. These partners process information in a pseudonymized,
                  aggregated format.
                </Text>
              </div>

              <div>
                <Heading
                  variant="h2"
                  className="text-2xl font-extrabold tracking-tight text-text-primary mb-3"
                >
                  4. Controlling Cookie Preferences
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  Most internet browsers automatically support cookies by default. You can adjust
                  your browser configurations to disable, block, or alert you when a cookie is
                  stored. Please note that disabling essential cookies may impact specific dynamic
                  elements of the website (such as rendering package details or submitting
                  inquiries).
                </Text>
              </div>

              <div className="pt-6 border-t border-border mt-4">
                <Heading variant="h4" className="text-lg font-bold text-text-primary mb-2">
                  Contact Us
                </Heading>
                <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                  If you have questions about how we use cookies, please reach out to us at{" "}
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
