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

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,64,175,0.3),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:rgba(8,13,28,0.35)] via-[color:rgba(8,13,28,0.62)] to-[color:rgba(6,10,20,0.96)]" />
    </div>
  );
}
