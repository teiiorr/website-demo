// app/components/news/NewsSlider.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { news } from "../../data/news";
import NewsCard from "./NewsCard";

export default function NewsSlider() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(wrapperRef, { once: true, amount: 0.2 });

  const scrollBy = (offset: number) => {
    sliderRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const handleKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollBy(360);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollBy(-360);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--color-text-muted)]">
          So‘nggi yangiliklar
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-360)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[var(--color-text)] transition-all duration-300 hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--section-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]"
            aria-label="Oldingi xabarlar"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollBy(360)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[var(--color-text)] transition-all duration-300 hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--section-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]"
            aria-label="Keyingi xabarlar"
          >
            →
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div
          ref={sliderRef}
          tabIndex={0}
          onKeyDown={handleKey}
          role="region"
          aria-label="Xabarlar karuseli"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pr-6 focus:outline-none scroll-px-6"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor:
              "rgba(37,99,235,0.6) rgba(15,23,42,0.7)",
          }}
        >
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
