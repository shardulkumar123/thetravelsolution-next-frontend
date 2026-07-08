import React from "react";

import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  padded?: boolean;
  background?: "default" | "surface" | "primary" | "secondary" | "none";
  bordered?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  as: Component = "section",
  padded = true,
  background = "none",
  bordered = false,
  ...props
}) => {
  return (
    <Component
      className={cn(
        padded && "py-[var(--spacing-section-padding-val)]",
        background === "default" && "bg-background text-foreground",
        background === "surface" && "bg-surface text-foreground",
        background === "primary" && "bg-primary text-primary-foreground",
        background === "secondary" && "bg-secondary text-secondary-foreground",
        bordered && "border-b border-border",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Section.displayName = "Section";
