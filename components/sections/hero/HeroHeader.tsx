import React from "react";

import { Heading, Text } from "@/components/ui/Typography";

export const HeroHeader: React.FC = () => (
  <>
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-soft">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      <Text variant="label" className="text-xs uppercase tracking-wider font-semibold text-white">
        The Ultimate Travel Platform
      </Text>
    </div>
    <Heading
      variant="display-xl"
      className="tracking-tight text-white font-extrabold leading-tight"
    >
      Design Your Next{" "}
      <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Perfect Getaway
      </span>
    </Heading>
    <Text variant="body-lg" className="max-w-xl leading-relaxed text-white/90 font-medium">
      Discover, plan, and book your tailored journeys with our intuitive, premium TravelSolution
      platform. Empowering agency networks and explorers worldwide.
    </Text>
  </>
);

HeroHeader.displayName = "HeroHeader";
