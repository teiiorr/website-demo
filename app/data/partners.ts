"use client";

export type Partner = {
  id: string;
  name: string;
  logo: string;
};

export const partners: Partner[] = [
  {
    id: "partner-next",
    name: "Davlat Bojxona Xizmati",
    logo: "/assets/logos/dbv@2x.avif",
  },
  {
    id: "partner-vercel",
    name: "Madaniyat vazirligi",
    logo: "/assets/logos/madaniyat@2x.avif",
  },
  {
    id: "partner-file",
    name: "O'zbekiston Prokuraturasi",
    logo: "/assets/logos/prokuratura@2x.avif",
  },
  {
    id: "partner-globe",
    name: "Davlat Soliq Qo'mitasi",
    logo: "/assets/logos/soliq@2x.avif",
  },
  {
    id: "partner-window",
    name: "Yoshlar Agentligi",
    logo: "/assets/logos/yoshlar-agentligi@2x.avif",
  },
];