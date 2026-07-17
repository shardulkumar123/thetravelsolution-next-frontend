import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { Calendar, Compass, ShieldCheck } from "lucide-react";

import { OTHER_RELIGIOUS_TOURS } from "@/utils/constants";

interface OtherReligiousToursProps {
  onBookClick: (packageName: string) => void;
}

export const OtherReligiousTours: React.FC<OtherReligiousToursProps> = ({ onBookClick }) => {
  return (
    <section className="py-20 bg-surface/30">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {OTHER_RELIGIOUS_TOURS.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="relative w-full h-[280px] md:h-[340px] select-none">
                <CustomImage
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-primary font-bold text-xs px-3.5 py-1.5 rounded-full border border-primary/20 shadow-soft">
                  {pkg.location}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-bold text-text-secondary mb-3">
                    <span className="flex items-center gap-1">
                      <Compass size={14} className="text-primary" />
                      {pkg.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-secondary" />
                      {pkg.duration}
                    </span>
                  </div>

                  <Heading
                    variant="h3"
                    className="text-2xl font-bold tracking-tight text-text-primary mb-3 text-left"
                  >
                    {pkg.title}
                  </Heading>

                  <Text
                    variant="body-sm"
                    className="text-text-secondary leading-relaxed mb-6 text-left"
                  >
                    {pkg.description}
                  </Text>

                  <div className="flex flex-col gap-3 mb-8 text-left">
                    <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                      Package Highlights:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {pkg.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-surface border border-border/60"
                        >
                          <ShieldCheck size={16} className="text-primary shrink-0" />
                          <span className="text-xs font-semibold text-text-secondary">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between gap-2">
                  <div className="flex flex-col text-left shrink-0">
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider text-[10px]">
                      Starting Price
                    </span>
                    <span className="text-xl font-black text-primary font-heading mt-1">
                      {pkg.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/packages/${pkg.id}`}>
                      <Button
                        variant="outline"
                        className="font-bold shadow-soft cursor-pointer text-xs py-2 px-4"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button
                      onClick={() => onBookClick(pkg.title)}
                      variant="primary"
                      className="font-bold shadow-soft cursor-pointer text-xs py-2 px-4"
                    >
                      Book Now
                    </Button>
                  </div>
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
