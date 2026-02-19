"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";

const AmbientScene = dynamic(() => import("@/components/three/ambient-scene"), { ssr: false });

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <AmbientScene />
      <div className="container-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--brand)]">Future-ready creative education</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Building a generation of makers, storytellers, and founders.</h1>
          <p className="max-w-xl text-lg text-[var(--text-muted)]">A premium platform connecting youth programs, public innovation, and mission-aligned partners through measurable, human-centered outcomes.</p>
          <div className="flex gap-3">
            <ButtonLink href="/projects">Explore projects</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">Start partnership</ButtonLink>
          </div>
        </motion.div>
        <div className="glass relative rounded-3xl p-3 shadow-[var(--shadow-card)]">
          <Image src="/images/hero-poster.svg" alt="Creative Union hero poster" width={1200} height={700} priority className="aspect-video rounded-2xl object-cover" />
          <video className="pointer-events-none absolute inset-3 hidden rounded-2xl object-cover md:block" autoPlay muted loop playsInline preload="none" poster="/images/hero-poster.svg">
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
