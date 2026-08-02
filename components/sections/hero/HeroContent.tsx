import React from "react";

import { HeroActions } from "./HeroActions";
import { HeroHeader } from "./HeroHeader";

export const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start text-left gap-6 max-w-2xl my-auto animate-carousel-fade pointer-events-auto">
      <HeroHeader />
      <HeroActions />
    </div>
  );
};

HeroContent.displayName = "HeroContent";
