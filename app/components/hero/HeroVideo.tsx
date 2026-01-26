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

    // Safari fallback
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    } else {
      media.addListener(update);
      return () => media.removeListener(update);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      if (!shouldPlay) return;
      // не всегда нужно сбрасывать, но если хочешь "с начала" — оставь
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    if (shouldPlay) {
      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.addEventListener("loadedmetadata", tryPlay, { once: true });
        video.addEventListener("canplay", tryPlay, { once: true });
      }
    } else {
      video.pause();
    }

    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [shouldPlay]);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        key={isMobile ? "mobile" : "desktop"}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src={isMobile ? "/assets/video/hero-mobile.mp4" : "/assets/video/hero.mp4"}
          type="video/mp4"
        />
      </video>
    </div>
  );
}