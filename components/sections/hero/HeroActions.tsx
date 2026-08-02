import React from "react";

import { Button } from "@/components/ui/Button";

export const HeroActions: React.FC = () => (
  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
    <Button variant="primary" size="lg" className="w-full sm:w-auto">
      Explore Destinations
    </Button>
    <Button
      variant="outline"
      size="lg"
      className="w-full sm:w-auto border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"
    >
      Learn More
    </Button>
  </div>
);

HeroActions.displayName = "HeroActions";
