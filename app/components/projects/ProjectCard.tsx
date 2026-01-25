// app/components/projects/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../../data/projects";
import Heading from "../core/Heading";
import Text from "../core/Text";
import ProjectStatusBadge from "./ProjectStatusBadge";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative flex min-w-[280px] max-w-[340px] flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-surface)] backdrop-blur-2xl"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-28 bg-[radial-gradient(65%_65%_at_50%_0%,var(--section-accent-soft),transparent_75%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 280px, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:rgba(8,13,28,0.9)] via-[color:rgba(8,13,28,0.4)] to-transparent" />
        <div className="absolute left-3 top-3">
          <ProjectStatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Heading as="h3" className="text-xl">
          {project.title}
        </Heading>

        <Text size="sm" muted>
          {project.excerpt}
        </Text>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[color:rgba(148,163,184,0.3)] bg-[color:var(--section-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-text-soft)]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--section-accent)] transition-colors duration-300 group-hover:text-[var(--section-accent-strong)]">
            Batafsil <span className="opacity-70">→</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
