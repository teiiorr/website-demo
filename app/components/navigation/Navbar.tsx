// app/components/navigation/Navbar.tsx
"use client";

import React, { useEffect, useState } from "react";
import Container from "../core/Container";
import ThemeToggle from "../theme/ThemeToggle";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand?: string;
  items: NavItem[];
};

export default function Navbar({ brand = "Bolalar Ijodkorlari", items }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[color:var(--color-border)]/70 bg-[color:var(--color-surface-strong)]/95 backdrop-blur-2xl shadow-[0_14px_30px_rgba(6,12,28,0.4)]">
        <Container className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 rounded-full border border-transparent px-2 py-1 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(148,163,184,0.22)]"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-full border border-[color:rgba(148,163,184,0.25)] bg-gradient-to-br from-[color:rgba(29,78,216,0.35)] via-[color:rgba(29,78,216,0.12)] to-[color:rgba(14,165,233,0.22)] shadow-[0_12px_30px_rgba(30,64,175,0.35)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary-contrast)]" />
              <span className="absolute -inset-7 -z-10 rounded-full bg-[color:rgba(29,78,216,0.32)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-[var(--color-text)] sm:text-base">
              {brand}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(148,163,184,0.26)] hover:bg-[color:rgba(29,78,216,0.12)] hover:text-[var(--color-text)]"
              >
                {it.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Menyu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgba(148,163,184,0.28)] bg-[color:rgba(29,78,216,0.12)] text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:rgba(148,163,184,0.4)] hover:bg-[color:rgba(29,78,216,0.2)] md:hidden"
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-[var(--color-text)] transition-all duration-300 ${
                    menuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-[color:rgba(226,232,240,0.7)] transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-[var(--color-text)] transition-all duration-300 ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu layer */}
      <div
        className={`md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-300`}
      >
        {/* overlay */}
        <button
          type="button"
          aria-label="Menyuni yopish"
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 z-40 bg-[color:rgba(15,23,42,0.5)] backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* panel */}
        <nav
          id="mobile-menu"
          className={`absolute left-0 right-0 z-50 mx-4 mt-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-strong)] p-4 shadow-[0_18px_40px_rgba(6,12,28,0.35)] transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={handleLinkClick}
                className="rounded-xl border border-transparent px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:border-[color:var(--color-border)] hover:bg-[color:rgba(59,130,246,0.12)]"
              >
                {it.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}