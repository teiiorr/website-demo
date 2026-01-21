// app/components/hero/HeroVideo.tsx
"use client";

import React from "react";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Video */}
      <video
        className="h-full w-full object-cover opacity-80"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/images/hero-poster.jpg"
      >
        {/* Sample video (put in /public/assets/videos/hero.mp4) */}
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Extra soft vignette for premium depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
    </div>
  );
}
