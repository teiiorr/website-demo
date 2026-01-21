// app/components/core/Button.tsx
import React from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  href?: string;
};

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-white/90",
  secondary:
    "bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
  ghost:
    "bg-transparent text-white hover:bg-white/10",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  onClick,
  href,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-colors";

  // If href exists → render <a>, otherwise <button>
  const Component: any = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={[
          baseClasses,
          variantMap[variant],
          className,
        ].join(" ")}
      >
        {children}
      </Component>
    </motion.div>
  );
}
