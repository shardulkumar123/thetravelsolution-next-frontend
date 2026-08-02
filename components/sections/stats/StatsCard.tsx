import React from "react";

import { Heading, Text } from "@/components/ui/Typography";

export interface StatsCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ icon, number, label }) => {
  return (
    <div className="flex items-center gap-4 p-6 rounded-card border border-border bg-card text-text-primary shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-btn bg-surface border border-border shrink-0 shadow-soft">
        {icon}
      </div>
      <div>
        <Heading variant="h3" className="text-text-primary tracking-tight font-extrabold">
          {number}
        </Heading>
        <Text variant="body-sm" className="font-medium mt-0.5 text-text-secondary">
          {label}
        </Text>
      </div>
    </div>
  );
};

StatsCard.displayName = "StatsCard";
