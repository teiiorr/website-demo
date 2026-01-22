// app/components/projects/ProjectStatusBadge.tsx
"use client";

import React from "react";
import { ProjectStatus } from "../../data/projects";

type Props = {
  status: ProjectStatus;
};

const statusStyles: Record<ProjectStatus, string> = {
  Rejada:
    "bg-amber-400 text-amber-950 font-semibold",
  Jarayonda:
    "bg-emerald-500 text-white font-semibold",
  Tugallandi:
    "bg-sky-500 text-white font-semibold",
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
