// app/components/partners/PartnersCarousel.tsx
"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { partners } from "../../data/partners";

export default function PartnersCarousel() {
  const track = useMemo(() => [...partners, ...partners], []);

  return (
    <section className="group relative overflow-hidden rounded-[28px] border border-[color:var(--color-border)]/50 bg-[#FFF6D8] shadow-soft">
      {/* мягкий свет под неон */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,210,120,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#FFF6D8] via-[#FFF6D8]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#FFF6D8] via-[#FFF6D8]/70 to-transparent" />

      <div className="relative py-10">
        {/* viewport */}
        <div className="overflow-hidden px-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {/* moving track */}
          <div className="flex w-max animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
            {/* first row */}
            <div className="flex items-center">
              {track.map((p, idx) => (
                <div key={`a-${p.id}-${idx}`} className="shrink-0">
                  <div className="relative h-32 w-[22rem] sm:h-36 sm:w-[26rem] lg:h-40 lg:w-[30rem]">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logotipi`}
                      fill
                      sizes="(max-width: 640px) 352px, (max-width: 1024px) 416px, 480px"
                      className="object-contain opacity-95"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* duplicate row for seamless loop */}
            <div className="flex items-center" aria-hidden="true">
              {track.map((p, idx) => (
                <div key={`b-${p.id}-${idx}`} className="shrink-0">
                  <div className="relative h-32 w-[22rem] sm:h-36 sm:w-[26rem] lg:h-40 lg:w-[30rem]">
                    <Image
                      src={p.logo}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 352px, (max-width: 1024px) 416px, 480px"
                      className="object-contain opacity-95"
                    />
                  </div>
                </div>
              ))}
            </div>
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
    </section>
  );
}