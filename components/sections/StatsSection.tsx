"use client";

import React from "react";

import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

import { STATS_ITEMS } from "@/utils/constants";

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-primary/9 py-12 " id="stats">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {STATS_ITEMS.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-4 p-6 rounded-card border border-border bg-card text-text-primary shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-btn bg-surface border border-border shrink-0 shadow-soft">
                {stat.icon}
              </div>
              <div>
                <Heading variant="h3" className="text-text-primary tracking-tight font-extrabold">
                  {stat.number}
                </Heading>
                <Text variant="body-sm" className="font-medium mt-0.5 text-text-secondary">
                  {stat.label}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

StatsSection.displayName = "StatsSection";
