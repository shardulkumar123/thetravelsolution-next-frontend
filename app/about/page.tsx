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
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-slate-950/60" />
          </div>

          <Container className="relative z-10 flex flex-col items-center gap-4">
            <Heading variant="display-lg" className="text-white font-extrabold mb-1">
              About The Travel Solution
            </Heading>

            <p className="text-base md:text-lg text-primary-light italic font-medium max-w-2xl px-4 text-center leading-relaxed opacity-90">
              &ldquo;The world is a book and those who do not travel read only one page.&rdquo;
            </p>

            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80 mt-2">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Story copy */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider w-fit">
                    Availability
                  </span>
                  <Heading
                    variant="h2"
                    className="text-text-primary font-extrabold tracking-tight text-2xl md:text-3xl mt-2 leading-tight"
                  >
                    The Travel SOLUTION - Best Travel Agency in Dehradun Uttarakhand, India
                  </Heading>
                </div>

                <div className="h-px bg-border my-2" />

                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary uppercase tracking-wider w-fit">
                  A Word About Us
                </span>

                <div className="flex flex-col gap-4 text-justify">
                  <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                    With experience over a decade in serving the travel industry, the commitment
                    &amp; aim to build a lasting relationship with its customers, The Travel
                    Solution with its Humble beginning as a small travel agency, has transformed
                    itself as a specialist group offering different Diversified &amp; Specialized
                    services such as International &amp; Domestic Tour Packages, Industrial Tours,
                    Air &amp; Train Tickets, Taxi &amp; cab Services &amp; all other range of
                    Customized travel needs for any organizations or Individuals.
                  </Text>

                  <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                    We realized that two travelers have same choices, Therefore our professional
                    &amp; Dedicated Team offers customized packages as per each customers need. For
                    our Customers looking for budget holidays we have predesigned Tours and packages
                    to suit their travel options.
                  </Text>

                  <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                    Honest policies, excellent services and perfect tour planning has lead us to add
                    not only individuals as our satisfied customers but also Governments and private
                    organizations such as Banks, Schools, Corporate Houses &amp; Various other
                    private companies have been added in our satisfied customers list.
                  </Text>

                  <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                    Our strong relationship with hotels and agents around India and globally has
                    ensured us that our customers have an enjoyable, rememberable and great holiday.
                  </Text>
                </div>
              </div>

              {/* Right Column: Story image & Milestone Quote */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-medium">
                  <CustomImage
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
                    alt="Travel planning session in mountains"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Decade Milestone Blockquote Card */}
                <div className="p-6 rounded-card border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden shadow-soft">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                  <div className="text-primary font-bold text-4xl leading-none font-serif mb-2 select-none">
                    &ldquo;
                  </div>
                  <p className="text-sm font-medium text-text-primary leading-relaxed italic relative z-10 text-left">
                    The Travel Solution has been successfully operating in Northern India for over a
                    decade. We have grown from humble beginnings to a reputable and well established
                    travel agency, providing a vast array of services. We&apos;d be happy to assist
                    you with your travel plans!
                  </p>
                  <div className="text-primary font-bold text-4xl leading-none font-serif mt-2 text-right select-none">
                    &rdquo;
                  </div>
                </div>
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
