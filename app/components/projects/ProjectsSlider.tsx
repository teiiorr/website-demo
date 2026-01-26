// app/components/projects/ProjectsSlider.tsx
"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

type FilterValue = "all" | "Rejada" | "Jarayonda" | "Tugallandi";

const filters: { label: string; value: FilterValue }[] = [
  { label: "Hammasi", value: "all" },
  { label: "Rejada", value: "Rejada" },
  { label: "Jarayonda", value: "Jarayonda" },
  { label: "Tugatilgan", value: "Tugallandi" },
];

export default function ProjectsSlider() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const items = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.status === activeFilter);
  }, [activeFilter]);

  return (
    <div ref={ref} className="relative">
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = filter.value === activeFilter;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={[
                "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--section-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]",
                isActive
                  ? "border-[color:var(--section-accent)] bg-[color:var(--section-accent-soft)] text-[var(--color-text)]"
                  : "border-[color:var(--color-border)] bg-transparent text-[var(--color-text-muted)] hover:border-[color:var(--color-border-strong)] hover:bg-[color:rgba(59,130,246,0.12)] hover:text-[var(--color-text)]",
              ].join(" ")}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {items.length ? (
          items.map((p) => <ProjectCard key={p.id} project={p} />)
        ) : (
          <div className="rounded-2xl border border-dashed border-[color:var(--color-border)]/70 bg-[color:var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
            Tanlangan holat bo‘yicha loyiha topilmadi.
          </div>
        )}
      </motion.div>
    </div>
  );
}