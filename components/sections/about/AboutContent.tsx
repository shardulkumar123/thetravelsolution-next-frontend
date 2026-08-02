import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export interface AboutContentProps {
  badge: string;
  title: string;
  description: string;
}

export const AboutContent: React.FC<AboutContentProps> = ({ badge, title, description }) => (
  <div className="flex flex-col items-start text-left gap-6 lg:pl-4">
    <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
      {badge}
    </span>
    <Heading
      variant="h2"
      className="text-text-primary font-extrabold tracking-tight text-3xl md:text-4xl leading-tight"
    >
      {title}
    </Heading>
    <Text
      variant="body-md"
      color="text-secondary"
      className="leading-relaxed font-regular text-justify"
    >
      {description}
    </Text>
    <Button variant="primary" size="default" className="mt-2 font-semibold" asChild>
      <Link href="/about">Read More</Link>
    </Button>
  </div>
);

AboutContent.displayName = "AboutContent";
