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
  h1: "text-4xl font-semibold sm:text-5xl lg:text-6xl",
  h2: "text-3xl font-semibold sm:text-4xl lg:text-5xl",
  h3: "text-2xl font-semibold sm:text-3xl lg:text-4xl",
  h4: "text-xl font-medium sm:text-2xl",
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
        sizeMap[as],
        "leading-tight tracking-tight",
        accent
          ? "bg-gradient-to-r from-[var(--color-primary-contrast)] via-[#cbd5ff] to-[var(--color-accent)] bg-clip-text text-transparent"
          : "text-[var(--color-text)]",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}