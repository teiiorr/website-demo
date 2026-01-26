"use client";

import React, { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  shouldPlay?: boolean;
};

export default function HeroVideo({ shouldPlay = true }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (shouldPlay) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [shouldPlay, isMobile]);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        key={isMobile ? "mobile" : "desktop"}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      >
        {isMobile ? (
          <source src="/assets/video/hero-mobile.mp4" type="video/mp4" />
        ) : (
          <source src="/assets/video/hero.mp4" type="video/mp4" />
        )}
      </video>
    </div>
  );
}