// app/components/projects/ProjectStatusBadge.tsx
"use client";

import React from "react";
import { ProjectStatus } from "../../data/projects";

type Props = {
  status: ProjectStatus;
};

const statusStyles: Record<ProjectStatus, string> = {
  Rejada:
    "bg-white/15 text-white ring-1 ring-white/25",
  Jarayonda:
    "bg-emerald-400/15 text-emerald-200 ring-1 ring-emerald-300/30",
  Tugallandi:
    "bg-sky-400/15 text-sky-200 ring-1 ring-sky-300/30",
};

export default function ProjectStatusBadge({ status }: Props) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md",
        statusStyles[status],
      ].join(" ")}
    >
      {status}
    </span>
  );
}
