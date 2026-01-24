// app/components/navigation/Navbar.tsx
"use client";

import React from "react";
import Container from "../core/Container";


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
      <div className="border-b border-[color:var(--color-border)]/80 bg-[color:var(--color-surface-strong)]/95 backdrop-blur-2xl shadow-[0_18px_40px_rgba(8,12,32,0.55)]">
        <Container className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 rounded-full border border-transparent px-2 py-1 transition-colors hover:border-[color:rgba(148,163,255,0.22)]"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-full border border-[color:rgba(148,163,255,0.25)] bg-gradient-to-br from-[color:rgba(124,92,255,0.35)] via-[color:rgba(124,92,255,0.12)] to-[color:rgba(56,189,248,0.22)] shadow-[0_12px_30px_rgba(92,77,255,0.35)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary-contrast)]" />
              <span className="absolute -inset-7 -z-10 rounded-full bg-[color:rgba(124,92,255,0.32)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-[var(--color-text)] sm:text-base">
              {brand}
            </span>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-all duration-300 hover:border-[color:rgba(148,163,255,0.26)] hover:bg-[color:rgba(124,92,255,0.12)] hover:text-[var(--color-text)]"
              >
                {it.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
           <button
             className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:rgba(148,163,255,0.28)] bg-[color:rgba(124,92,255,0.12)] text-[var(--color-text)] transition-all duration-300 hover:border-[color:rgba(148,163,255,0.4)] hover:bg-[color:rgba(124,92,255,0.2)] md:hidden"
              aria-label="Menyu"
            >
              <span className="relative h-4 w-5">
                <span className="absolute left-0 top-0 h-0.5 w-5 rounded bg-[var(--color-text)]" />
                <span className="absolute left-0 top-1.5 h-0.5 w-5 rounded bg-[color:rgba(229,231,255,0.7)]" />
                <span className="absolute left-0 top-3 h-0.5 w-5 rounded bg-[var(--color-text)]" />
              </span>
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
}
