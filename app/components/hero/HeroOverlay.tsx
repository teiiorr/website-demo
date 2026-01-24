// app/components/hero/HeroOverlay.tsx
"use client";

import React from "react";

export default function HeroOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[color:rgba(124,92,255,0.26)] blur-3xl" />
      <div className="absolute right-[-6rem] top-[-4rem] h-80 w-80 rounded-full bg-[color:rgba(56,189,248,0.24)] blur-3xl" />
      <div className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-[color:rgba(90,59,255,0.2)] blur-3xl" />
    </div>
  );
}