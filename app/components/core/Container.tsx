// app/components/core/Container.tsx
import React from "react";
import type { HTMLAttributes, JSX, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
} & HTMLAttributes<HTMLElement>;

export default function Container({
  children,
  className = "",
  as: Component = "div",
  ...rest
}: ContainerProps) {
  const classes = [
    "relative mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10",
    className,
  ].join(" "); 

  return React.createElement(Component, { ...rest, className: classes }, children);
}
