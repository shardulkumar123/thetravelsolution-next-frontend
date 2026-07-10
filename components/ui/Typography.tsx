import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("transition-colors", {
  variants: {
    variant: {
      "display-xl": "text-display-xl font-bold tracking-display-xl leading-display-xl",
      "display-lg": "text-display-lg font-bold tracking-display-lg leading-display-lg",
      "display-md": "text-display-md font-bold tracking-display-md leading-display-md",
      h1: "text-h1 font-bold tracking-h1 leading-h1",
      h2: "text-h2 font-bold tracking-h2 leading-h2",
      h3: "text-h3 font-semibold tracking-h3 leading-h3",
      h4: "text-h4 font-semibold tracking-h4 leading-h4",
      h5: "text-h5 font-medium tracking-h5 leading-h5",
      h6: "text-h6 font-medium tracking-h6 leading-h6",
      "body-lg": "text-body-lg font-regular tracking-body-lg leading-body-lg",
      "body-md": "text-body-md font-regular tracking-body-md leading-body-md",
      "body-sm": "text-body-sm font-regular tracking-body-sm leading-body-sm",
      caption: "text-caption font-regular tracking-caption leading-caption",
      label: "text-label font-medium tracking-label leading-label",
      btn: "text-btn font-semibold tracking-btn leading-btn",
    },
    color: {
      default: "text-text-primary",
      primary: "text-primary",
      secondary: "text-secondary",
      "text-primary": "text-text-primary",
      "text-secondary": "text-text-secondary",
      muted: "text-muted-foreground",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
      inherit: "text-inherit",
    },
  },
  defaultVariants: {
    variant: "body-md",
    color: "default",
  },
});

export interface TypographyProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant,
  color,
  as,
  ...props
}) => {
  let Component = as;
  if (!Component) {
    switch (variant) {
      case "display-xl":
      case "display-lg":
      case "display-md":
      case "h1":
        Component = "h1";
        break;
      case "h2":
        Component = "h2";
        break;
      case "h3":
        Component = "h3";
        break;
      case "h4":
        Component = "h4";
        break;
      case "h5":
        Component = "h5";
        break;
      case "h6":
        Component = "h6";
        break;
      case "label":
        Component = "label";
        break;
      case "caption":
        Component = "span";
        break;
      default:
        Component = "p";
    }
  }

  return (
    <Component className={cn(typographyVariants({ variant, color, className }))} {...props}>
      {children}
    </Component>
  );
};

Typography.displayName = "Typography";

export interface HeadingProps extends Omit<TypographyProps, "variant"> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "display-xl" | "display-lg" | "display-md";
}

export const Heading: React.FC<HeadingProps> = ({ variant = "h1", ...props }) => {
  return <Typography variant={variant} {...props} />;
};

Heading.displayName = "Heading";

export interface TextProps extends Omit<TypographyProps, "variant"> {
  variant?: "body-lg" | "body-md" | "body-sm" | "caption" | "label";
}

export const Text: React.FC<TextProps> = ({ variant = "body-md", ...props }) => {
  return <Typography variant={variant} {...props} />;
};

Text.displayName = "Text";
