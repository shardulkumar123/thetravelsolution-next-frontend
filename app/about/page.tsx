"use client";

import React from "react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";

import { CORE_VALUES } from "@/utils/constants";

export default function AboutPage() {
  const values = CORE_VALUES;

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center">
          <div className="absolute inset-0 z-0 select-none">
            <CustomImage
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
              alt="Roadtrip travel landscape"
              fill
              priority
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-slate-950/60" />
          </div>

          <Container className="relative z-10">
            <Heading variant="display-lg" className="text-white font-extrabold mb-4">
              About Our Agency
            </Heading>
            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">About Us</span>
            </div>
          </Container>
        </section>

        {/* Agency Story Section */}
        <section className="py-20 bg-background border-b border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Story copy */}
              <div className="flex flex-col gap-6 text-left">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider w-fit">
                  Our Mission
                </span>

                <Heading
                  variant="h2"
                  className="text-text-primary font-extrabold tracking-tight text-3xl md:text-4xl"
                >
                  Redefining Modern Travel Coordination
                </Heading>

                <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                  Founded with a vision to streamline how agency networks and independent explorers
                  book their tours, TravelSolution brings standard design tokens and state of the
                  art user flows under one roof. We ensure you get verified tour packages and
                  top-rated booking assistance without administrative friction.
                </Text>

                <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                  Our focus is to empower local and international travelers to uncover hidden paths,
                  secure verified hotel reservations, and manage their flight itineraries directly
                  through a high-performing digital interface.
                </Text>
              </div>

              {/* Right Column: Story image */}
              <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-medium">
                <CustomImage
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
                  alt="Travel planning session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-surface border-b border-border">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                Our Values
              </span>
              <Heading
                variant="h2"
                className="text-text-primary tracking-tight font-extrabold text-3xl md:text-4xl mb-4"
              >
                The Pillars of Our Operations
              </Heading>
              <Text
                variant="body-md"
                color="text-secondary"
                className="max-w-xl mx-auto leading-relaxed"
              >
                We drive traveler experiences by committing to transparency, safety, and modern
                interface utilities.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-card border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 text-left"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface border border-border shrink-0 text-primary shadow-soft">
                    {val.icon}
                  </div>
                  <Heading variant="h4" className="font-bold text-text-primary">
                    {val.title}
                  </Heading>
                  <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                    {val.desc}
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
