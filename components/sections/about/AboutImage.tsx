import React from "react";

import { CustomImage } from "@/components/ui/CustomImage";

export interface AboutImageProps {
  src: string;
  alt: string;
}

export const AboutImage: React.FC<AboutImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-hard">
      <CustomImage
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
      />
    </div>
  );
};

AboutImage.displayName = "AboutImage";
