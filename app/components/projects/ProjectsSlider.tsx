// app/components/projects/ProjectsSlider.tsx
"use client";

import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSlider() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const items = useMemo(() => projects, []);

  return (
    <div ref={ref} className="relative">
      {/* subtle edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="overflow-x-auto pb-4"
      >
        <div className="flex gap-6 pr-6">
          {items.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </motion.div>

      {/* helper hint */}
      <div className="mt-4 flex items-center justify-between text-sm text-white/55">
        <span>⬅️ / ➡️ Süring yoki skroll qiling</span>
        <span className="hidden sm:block">“Batafsil” — MVP’da modal keyin qo‘shamiz</span>
      </div>
    </div>
  );
}
