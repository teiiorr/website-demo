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
      {/* Sun */}
      <span
        className={`absolute transition-all duration-300 ${
          isLight ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-0 -rotate-90"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.9" y1="4.9" x2="6.3" y2="6.3" />
          <line x1="17.7" y1="17.7" x2="19.1" y2="19.1" />
          <line x1="17.7" y1="6.3" x2="19.1" y2="4.9" />
          <line x1="4.9" y1="19.1" x2="6.3" y2="17.7" />
        </svg>
      </span>

      {/* Moon */}
      <span
        className={`absolute transition-all duration-300 ${
          isLight ? "scale-75 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </span>
    </button>
  );
}