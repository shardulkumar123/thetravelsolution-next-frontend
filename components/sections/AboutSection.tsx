"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-background text-text-primary py-20 relative overflow-hidden" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-hard">
            <CustomImage
              src="https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80"
              alt="Adventure in snow mountains"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right Column: Copy */}
          <div className="flex flex-col items-start text-left gap-6 lg:pl-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>

            <Heading
              variant="h2"
              className="text-text-primary font-extrabold tracking-tight text-3xl md:text-4xl leading-tight"
            >
              Every moment is an adventure waiting to be discovered.
            </Heading>

            <Text
              variant="body-md"
              color="text-secondary"
              className="leading-relaxed font-regular text-justify"
            >
              The most beautiful, relaxing moments in our life are the days we travel. It excites
              you and gives you a thrill. Whether you&apos;re about to embark on an exciting tour or
              planning the biggest adventure, discover all the wonderful things set for you. It is
              an enriching and life expanding experience. As the best tour and travel agency in
              Dehradun we offering not just extraordinary travel experiences but also the most
              cherished memories of amazing holidays to its valued patrons. The Travelit goes an
              extra mile to enhance the quality of your holidays. So leave your worries on us and
              gear up to enjoy the best travelling experience of your lifetime. Plan your trip to
              India with us, the best travel agency in Dehradun. Our experienced team will help you
              create unforgettable memories with our customized tours and packages in India.
            </Text>

            <Button variant="primary" size="default" className="mt-2 font-semibold" asChild>
              <Link href="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

AboutSection.displayName = "AboutSection";
