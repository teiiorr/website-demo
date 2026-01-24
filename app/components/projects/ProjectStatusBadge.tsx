// app/components/projects/ProjectStatusBadge.tsx
"use client";

import React from "react";
import { ProjectStatus } from "../../data/projects";

type Props = {
  status: ProjectStatus;
};

const statusStyles: Record<ProjectStatus, string> = {
  Rejada:
    "border border-[color:rgba(250,204,21,0.35)] bg-[color:rgba(250,204,21,0.18)] text-[#fef3c7]",
  Jarayonda:
    "border border-[color:rgba(34,211,238,0.38)] bg-[color:rgba(34,211,238,0.18)] text-[#cffafe]",
  Tugallandi:
    "border border-[color:rgba(129,140,248,0.4)] bg-[color:rgba(129,140,248,0.2)] text-[#e0e7ff]",
};

export default function ProjectStatusBadge({ status }: Props) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-md",
        statusStyles[status],
      ].join(" ")}
    >
      {status}
    </span>
  );
}