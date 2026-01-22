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
    "bg-gradient-to-r from-[#ff7a59] via-[#ff4ecd] to-[#22d3ee] text-black hover:opacity-95",

  secondary:
    "bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
  ghost: "bg-transparent text-white hover:bg-white/10",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-colors shadow-soft";

  
export default function Button({
  children,
  className = "",
  variant = "primary",
  onClick,
  href,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-colors";

  const classes = [
    baseClasses,
    variantMap[variant],
    className,
  ].join(" ");

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={classes}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={classes}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
