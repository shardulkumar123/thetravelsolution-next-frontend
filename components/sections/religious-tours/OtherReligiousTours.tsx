import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { Calendar, MapPin } from "lucide-react";

import { OTHER_RELIGIOUS_TOURS } from "@/utils/constants";

export const OtherReligiousTours: React.FC = () => {
  return (
    <section className="py-20 bg-surface/40">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Heading
            variant="h2"
            className="text-text-primary font-extrabold tracking-tight text-3xl md:text-4xl"
          >
            Other Sacred Journeys
          </Heading>
          <Text variant="body-md" color="text-secondary" className="leading-relaxed mt-3">
            Explore historical temples, pristine rivers, and architectural heritage across
            India&apos;s holiest destinations.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {OTHER_RELIGIOUS_TOURS.map((pkg) => (
            <div
              key={pkg.id}
              className="group rounded-3xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-[220px] select-none overflow-hidden shrink-0">
                <CustomImage
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1 text-left">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs font-semibold text-primary uppercase tracking-wider">
                      <MapPin size={14} />
                      {pkg.location}
                    </span>
                    <span className="flex items-center gap-1 text-caption text-text-secondary font-medium">
                      <Calendar size={14} className="text-primary" />
                      {pkg.duration}
                    </span>
                  </div>
                  <Heading
                    variant="h4"
                    className="font-extrabold text-xl text-text-primary tracking-tight"
                  >
                    {pkg.title}
                  </Heading>
                  <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                    {pkg.desc}
                  </Text>
                </div>

                <div className="flex items-center justify-between border-t border-border/80 pt-5 mt-6">
                  <div className="flex flex-col">
                    <span className="text-caption text-text-secondary font-medium uppercase">
                      Starting Price
                    </span>
                    <span className="text-lg font-black text-primary font-heading">
                      {pkg.price}
                      <span className="text-xs text-text-secondary font-regular ml-1">
                        / person
                      </span>
                    </span>
                  </div>
                  <Link href="/contact">
                    <Button variant="primary" size="sm" className="font-semibold">
                      Inquire Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

OtherReligiousTours.displayName = "OtherReligiousTours";
