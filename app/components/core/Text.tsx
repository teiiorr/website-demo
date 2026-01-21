// app/components/core/Text.tsx
import React from "react";

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
  return (
    <Tag
      className={[
        // Typography base
        sizeMap[size],
        "leading-relaxed",
        // Color system
        muted ? "text-white/70" : "text-white/90",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
