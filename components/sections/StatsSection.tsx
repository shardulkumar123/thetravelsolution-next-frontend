import React from "react";

import { Container } from "@/components/ui/Container";

import { STATS_ITEMS } from "@/utils/constants";
import { StatsCard } from "./stats/StatsCard";

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-primary/9 py-12" id="stats">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {STATS_ITEMS.map((stat) => (
            <StatsCard key={stat.id} icon={stat.icon} number={stat.number} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
};

StatsSection.displayName = "StatsSection";
