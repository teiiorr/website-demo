// app/components/core/Container.tsx
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={[
        // Layout
        "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10",
        // Helps sections feel premium (keeps content aligned even with blur bg)
        "relative",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
