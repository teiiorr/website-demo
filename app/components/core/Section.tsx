// app/components/core/Section.tsx
import React from "react";
import type { JSX } from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
  ...rest
}: SectionProps) {
  const classes = [
    "relative py-20 sm:py-28 lg:py-32",
    "overflow-hidden",
    className,
  ].join(" ");

  return React.createElement(
    Tag,
    { ...(rest as any), id, className: classes },
    children
  );
}