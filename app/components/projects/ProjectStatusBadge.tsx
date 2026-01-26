// app/components/projects/ProjectStatusBadge.tsx
"use client";

import React from "react";
import { ProjectStatus } from "../../data/projects";

type Props = {
  status: ProjectStatus;
};

const statusStyles: Record<ProjectStatus, string> = {
  Rejada:
    "border border-[color:rgba(59,130,246,0.35)] bg-[color:rgba(59,130,246,0.18)] text-[#dbeafe]",
  Jarayonda:
    "border border-[color:rgba(14,165,233,0.38)] bg-[color:rgba(14,165,233,0.18)] text-[#bae6fd]",
  Tugallandi:
    "border border-[color:rgba(34,197,94,0.35)] bg-[color:rgba(34,197,94,0.18)] text-[#bbf7d0]",
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