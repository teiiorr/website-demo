// app/components/core/Section.tsx
import React from "react";
import type { HTMLAttributes, JSX, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className = "",
  id,
  as: Component = "section",
  ...rest
}: SectionProps) {
  const classes = [
    "relative overflow-hidden py-24 sm:py-32 lg:py-36",
    className,
  ].join(" ");

  return React.createElement(Component, { ...rest, id, className: classes }, children);
}