import { cn } from "@/lib/utils";
import React, { ElementType } from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "small"
  | "h6"
  | "extra-small"
  | "extra-large";

interface Props {
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const sizes: Record<Variant, string> = {
  h1: "text-3xl sm:text-4xl lg:text-5xl",
  h2: "text-2xl sm:text-3xl lg:text-4xl",
  h3: "text-xl sm:text-2xl lg:text-3xl",
  h4: "text-lg sm:text-xl lg:text-2xl",
  h5: "text-base sm:text-lg lg:text-xl",
  h6: "text-sm sm:text-base lg:text-lg",
  body: "text-sm sm:text-sm lg:text-base",
  small: "text-sm sm:text-sm",
  "extra-small": "text-xs",
  "extra-large": "text-4xl sm:text-5xl lg:text-6xl",
};

const getTagVariant = (variant: Variant): React.ElementType => {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "body":
      return "p";
    case "extra-large":
      return "h1";
    case "extra-small":
      return "p";
    case "small":
      return "p";
    default:
      return "p";
  }
};

const Typography = ({
  variant = "body",
  children = "",
  className = "",
  as,
}: Props) => {
  const tagVariant = getTagVariant(variant);
  const sizeClasses = sizes[variant];
  const Tag = as || tagVariant;
  return <Tag className={cn(`${sizeClasses}`, className)}>{children}</Tag>;
};

export default Typography;
