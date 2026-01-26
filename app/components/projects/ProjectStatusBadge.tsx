// app/components/projects/ProjectStatusBadge.tsx
"use client";

import React from "react";
import { ProjectStatus } from "../../data/projects";

type Props = {
  status: ProjectStatus;
};

const statusStyles: Record<ProjectStatus, string> = {
  Rejada:
    "bg-yellow-500 text-white",      // 🟡 planned
  Jarayonda:
    "bg-green-700 text-white",       // 🟢 in progress
  Tugallandi:
    "bg-sky-600 text-white",         // 🔵 completed
};

export default function ProjectStatusBadge({ status }: Props) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        statusStyles[status],
      ].join(" ")}
    >
      {status}
    </span>
  );
}