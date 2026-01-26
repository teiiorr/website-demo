// app/components/partners/PartnersCarousel.tsx
"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { partners } from "../../data/partners";

export default function PartnersCarousel() {
  const track = useMemo(() => [...partners, ...partners], []);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[color:rgba(0,0,0,0.08)] bg-[#F5EEDC]">
      <div className="py-10">
        <div className="overflow-hidden px-4">
          <div className="flex w-max animate-[marquee_32s_linear_infinite]">
            {/* first pass */}
            <div className="flex items-center">
              {track.map((p, idx) => (
                <div key={`a-${p.id}-${idx}`} className="shrink-0">
                  <div className="relative h-28 w-[22rem] sm:h-32 sm:w-[26rem] lg:h-36 lg:w-[30rem]">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      fill
                      sizes="(max-width: 640px) 352px, (max-width: 1024px) 416px, 480px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* duplicate pass for seamless loop */}
            <div className="flex items-center" aria-hidden="true">
              {track.map((p, idx) => (
                <div key={`b-${p.id}-${idx}`} className="shrink-0">
                  <div className="relative h-28 w-[22rem] sm:h-32 sm:w-[26rem] lg:h-36 lg:w-[30rem]">
                    <Image
                      src={p.logo}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 352px, (max-width: 1024px) 416px, 480px"
                      className="object-contain"
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