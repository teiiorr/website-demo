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
    "bg-gradient-to-r from-[var(--color-primary)] via-[#8b7bff] to-[var(--color-accent)] text-[var(--color-primary-contrast)] shadow-[0_18px_45px_rgba(124,92,255,0.45)] hover:from-[#917bff] hover:via-[var(--color-primary)] hover:to-[#22d3ee]",
  secondary:
    "border border-[color:var(--color-border)] bg-[color:var(--color-surface-elevated)] text-[var(--color-text)] shadow-[0_16px_35px_rgba(10,14,40,0.45)] hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-strong)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--color-text-soft)] hover:border-[color:rgba(148,163,255,0.18)] hover:bg-[color:rgba(124,92,255,0.12)] hover:text-[var(--color-text)]",
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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]";
const classes = [baseClasses, variantMap[variant], className].join(" ");

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
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