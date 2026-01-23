// app/components/navigation/Navbar.tsx
"use client";

import React from "react";
import Container from "../core/Container";
import Button from "../core/Button";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand?: string;
  items: NavItem[];
};

export default function Navbar({ brand = "Bolalar Ijodkorlari", items }: NavbarProps) {
  return (
       <header className="sticky top-0 z-50">
      {/* Glass bar */}
      <div className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full px-2 py-1"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
              <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              <span className="absolute -inset-6 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-white/10" />
            </span>
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
              {brand}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="rounded-full px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {it.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Mobile menu hint (placeholder)
               Next class’da MobileMenu qo‘shamiz */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/20 transition-colors"
              aria-label="Menyu"
            >
              <span className="h-4 w-5 relative">
                <span className="absolute left-0 top-0 h-0.5 w-5 bg-white/80 rounded" />
                <span className="absolute left-0 top-1.5 h-0.5 w-5 bg-white/60 rounded" />
                <span className="absolute left-0 top-3 h-0.5 w-5 bg-white/80 rounded" />
              </span>
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}