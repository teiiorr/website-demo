// app/components/partners/PartnersCarousel.tsx
"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { partners } from "../../data/partners";

export default function PartnersCarousel() {
  const items = useMemo(() => [...partners, ...partners], []);

  return (
      <div className="group relative overflow-hidden rounded-[28px] border border-[color:var(--color-border)]/80 bg-[color:rgba(12,18,45,0.85)] shadow-soft">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(124,92,255,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[color:rgba(2,6,23,0.95)] via-[color:rgba(2,6,23,0.7)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[color:rgba(2,6,23,0.95)] via-[color:rgba(2,6,23,0.7)] to-transparent" />
      <div className="relative py-10">
        <div className="flex gap-8 px-8 will-change-transform [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex min-w-max items-center gap-8 animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
            {items.map((p, idx) => (
              <div
                key={`${p.id}-${idx}`}
                className="group/logo relative flex h-28 w-48 items-center justify-center overflow-hidden rounded-2xl border border-[color:rgba(148,163,255,0.22)] bg-[color:rgba(15,23,42,0.82)] px-8 transition-all duration-300 hover:-translate-y-1 hover:border-[color:rgba(148,163,255,0.4)] hover:bg-[color:rgba(30,41,79,0.92)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(124,92,255,0.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover/logo:opacity-100" />
                <div className="relative h-16 w-full">
                  <Image
                    src={p.logo}
                    alt={`${p.name} logotipi`}
                    fill
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-contain opacity-90 transition-opacity duration-300 group-hover/logo:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}