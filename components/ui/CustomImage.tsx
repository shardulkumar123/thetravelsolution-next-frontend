import React from "react";
import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

export interface CustomImageProps extends Omit<ImageProps, "className"> {
  className?: string;
  containerClassName?: string;
  rounded?: "none" | "btn" | "input" | "card" | "section";
  shadow?: "none" | "soft" | "medium" | "hard";
  bordered?: boolean;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  className,
  containerClassName,
  rounded = "none",
  shadow = "none",
  bordered = false,
  alt,
  sizes,
  ...props
}) => {
  const defaultSizes =
    props.fill && !sizes ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : sizes;

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full h-full",
        rounded === "btn" && "rounded-btn",
        rounded === "input" && "rounded-input",
        rounded === "card" && "rounded-card",
        rounded === "section" && "rounded-section",
        shadow === "soft" && "shadow-soft",
        shadow === "medium" && "shadow-medium",
        shadow === "hard" && "shadow-hard",
        bordered && "border border-border",
        containerClassName
      )}
    >
      <Image
        alt={alt || "Image"}
        loading={props.priority ? undefined : "lazy"}
        className={cn("object-cover", className)}
        sizes={defaultSizes}
        {...props}
      />
    </div>
  );
};

CustomImage.displayName = "CustomImage";
