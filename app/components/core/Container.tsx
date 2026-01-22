// app/components/core/Container.tsx
import React from "react";
import type { JSX } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLElement>;

export default function Container({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: ContainerProps) {
  const classes = [
    "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10",
    "relative",
    className,
  ].join(" ");

  return React.createElement(
    Tag,
    { ...(rest as any), className: classes },
    children
  );
}