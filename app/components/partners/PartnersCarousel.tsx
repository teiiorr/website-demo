// app/components/partners/PartnersCarousel.tsx
"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { partners } from "../../data/partners";

export default function PartnersCarousel() {
  const items = useMemo(() => [...partners, ...partners], []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-soft backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-black/70 to-transparent" />

      <div className="group">
        <div className="flex gap-6 px-6 py-7 will-change-transform [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex min-w-max items-center gap-6 animate-[marquee_22s_linear_infinite] group-hover:[animation-play-state:paused]">
            {items.map((p, idx) => (
              <div
                key={`${p.id}-${idx}`}
                className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10"
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/10">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="text-sm text-white/80">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
