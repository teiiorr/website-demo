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
  sm: "text-sm sm:text-[0.98rem]",
  md: "text-base sm:text-[1.06rem]",
  lg: "text-lg sm:text-[1.2rem]",
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
    "leading-relaxed tracking-[-0.01em]",
    muted ? "text-[var(--color-text-muted)]" : "text-[var(--color-text-soft)]",
    className,
  ].join(" ");

  return React.createElement(Tag, { className: classes }, children);
}