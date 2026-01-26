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
          ? [
              // DARK: gradient
              "bg-gradient-to-r from-[var(--color-primary-contrast)] via-[var(--section-accent-strong)] to-[var(--section-accent)] bg-clip-text text-transparent",
              // LIGHT: make it solid black (disable gradient look)
              "data-[theme=light]:bg-none data-[theme=light]:text-[var(--color-text)] data-[theme=light]:text-clip-unset",
            ].join(" ")
          : "text-[var(--color-text)]",
        className,
      ].join(" ")}
      // we use this attribute to style via Tailwind "data-[theme=light]:..."
      data-theme={typeof document !== "undefined" ? document.documentElement.dataset.theme : undefined}
    >
      {children}
    </Tag>
  );
}