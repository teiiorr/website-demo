// app/components/core/Section.tsx
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={[
        // Vertical rhythm (premium spacing)
        "relative py-20 sm:py-28 lg:py-32",
        // Subtle separation for dark UI
        "overflow-hidden",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
