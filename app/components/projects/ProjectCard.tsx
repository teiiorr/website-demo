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
      className="group relative flex min-w-[280px] max-w-[320px] flex-col overflow-hidden rounded-2xl bg-white/5 ring-soft backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-24 bg-white/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 280px, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-3 top-3">
          <ProjectStatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="flex h-full flex-col gap-3 p-5">
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
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto inline-flex items-center gap-2 text-sm text-white/80">
          <span className="underline underline-offset-4">Batafsil</span>
          <span className="opacity-60">→</span>
        </div>
      </div>
    </motion.article>
  );
}
