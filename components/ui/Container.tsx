import React from "react";

import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={cn(
        "w-full mx-auto px-[var(--spacing-container-padding-val)] max-w-[var(--width-container-max-val)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

Container.displayName = "Container";
