// app/components/core/Text.tsx
import React from "react";
import type { JSX } from "react";

type TextSize = "sm" | "md" | "lg";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  size?: TextSize;
  as?: keyof JSX.IntrinsicElements;
  muted?: boolean;
};

const sizeMap: Record<TextSize, string> = {
  sm: "text-sm sm:text-base",
  md: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
};

export default function Text({
  children,
  className = "",
  size = "md",
  as: Tag = "p",
  muted = false,
}: TextProps) {
  const classes = [
    sizeMap[size],
    "leading-relaxed",
    muted ? "text-[var(--color-text-muted)]" : "text-[var(--color-text-soft)]",
    className,
  ].join(" ");

  return React.createElement(Tag, { className: classes }, children);
}