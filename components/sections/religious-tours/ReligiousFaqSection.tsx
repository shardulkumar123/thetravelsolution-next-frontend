import React from "react";

import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Compass, ShieldCheck } from "lucide-react";

import { PILGRIM_INTEL } from "@/utils/constants";

export const ReligiousFaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-background border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-4 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider w-fit">
              <Compass size={14} /> Pilgrim Intel
            </span>
            <Heading
              variant="h2"
              className="text-text-primary tracking-tight font-extrabold text-3xl md:text-4xl"
            >
              Essential Yatra Knowledge
            </Heading>
            <Text variant="body-md" color="text-secondary" className="leading-relaxed">
              Pilgrimages to high-altitude zones require special permits, physical readiness, and
              local reservation assistance. Here are answers to guide you safely.
            </Text>
            <div className="mt-4 flex flex-col gap-3 p-5 rounded-2xl border border-border bg-surface">
              <span className="flex items-center gap-2 text-sm font-bold text-text-primary">
                <ShieldCheck size={18} className="text-primary" /> Permitted Operators
              </span>
              <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                We coordinate bookings only via officially registered and local transport and hotel
                partners.
              </Text>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3">
            <Accordion items={PILGRIM_INTEL} />
          </div>
        </div>
      </Container>
    </section>
  );
};

ReligiousFaqSection.displayName = "ReligiousFaqSection";
