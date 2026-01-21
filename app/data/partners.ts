// app/components/partners/PartnersSection.tsx
"use client";

export type Partner = {
  id: string;
  name: string;
  logo: string;
};

export const partners: Partner[] = [
  {
    id: "partner-next",
    name: "Next.js",
    logo: "/next.svg",
  },
  {
    id: "partner-vercel",
    name: "Vercel",
    logo: "/vercel.svg",
  },
  {
    id: "partner-file",
    name: "File",
    logo: "/file.svg",
  },
  {
    id: "partner-globe",
    name: "Globe",
    logo: "/globe.svg",
  },
  {
    id: "partner-window",
    name: "Window",
    logo: "/window.svg",
  },
];