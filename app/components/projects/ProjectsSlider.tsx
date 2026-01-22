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
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="overflow-x-auto pb-4"
        style={{ scrollbarWidth: "thin" }} // Firefox: small scrollbar
      >
        <div className="flex gap-6 pr-6">
          {items.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}