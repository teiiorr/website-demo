"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Tungi rejimga o‘tish" : "Kunduzgi rejimga o‘tish"}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[var(--color-text)] shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-border-strong)]"
    >
      <span
        className={`absolute transition-all duration-300 ${isLight ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 11a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zm7.5-3.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1H18a1 1 0 1 1 0-2h1.5zM7 12a1 1 0 0 1-1 1H4.5a1 1 0 1 1 0-2H6a1 1 0 0 1 1 1zm10.45-4.95a1 1 0 0 1 0 1.4l-1.06 1.06a1 1 0 1 1-1.4-1.41l1.06-1.05a1 1 0 0 1 1.4 0zM8.01 15.55a1 1 0 0 1 0 1.41l-1.06 1.05a1 1 0 1 1-1.4-1.41l1.06-1.05a1 1 0 0 1 1.4 0zm8.04 1.41a1 1 0 0 1-1.4 0l-1.06-1.05a1 1 0 0 1 1.4-1.41l1.06 1.05a1 1 0 0 1 0 1.41zm-8.04-8.46a1 1 0 0 1-1.4 0L5.55 7.44a1 1 0 1 1 1.4-1.41l1.06 1.06a1 1 0 0 1 0 1.41zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
          />
        </svg>
      </span>
      <span
        className={`absolute transition-all duration-300 ${isLight ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.2 14.7a8.4 8.4 0 0 1-10.9-10 1 1 0 0 0-1.3-1.2 10 10 0 1 0 13.5 13.4 1 1 0 0 0-1.3-1.2z"
          />
        </svg>
      </span>
    </button>
  );
}