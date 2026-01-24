// app/components/hero/HeroVideo.tsx
"use client";

import React from "react";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 z-0">
      <video
        className="h-full w-full object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/images/sample-3.jpg"
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.32),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:rgba(2,6,23,0.35)] via-[color:rgba(2,6,23,0.55)] to-[color:rgba(2,6,23,0.92)]" />
    </div>
  );
}