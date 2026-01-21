// app/components/core/Heading.tsx
import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HeadingProps = {
  children: React.ReactNode;
  as?: HeadingLevel;
  className?: string;
  accent?: boolean;
};

const sizeMap: Record<HeadingLevel, string> = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-semibold",
  h2: "text-3xl sm:text-4xl lg:text-5xl font-semibold",
  h3: "text-2xl sm:text-3xl lg:text-4xl font-semibold",
  h4: "text-xl sm:text-2xl font-medium",
};

export default function Heading({
  children,
  as = "h2",
  className = "",
  accent = false,
}: HeadingProps) {
  const Tag = as;

  return (
    <Tag
      className={[
        // Typography
        sizeMap[as],
        "tracking-tight leading-tight",
        // Optional accent gradient (premium feel)
        accent
          ? "bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent"
          : "text-white",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
