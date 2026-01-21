// app/data/projects.ts

export type ProjectStatus = "Rejada" | "Jarayonda" | "Tugallandi";

export type Project = {
  id: string;
  title: string;
  date: string; // e.g. "2026-01-10"
  status: ProjectStatus;
  excerpt: string;
  coverImage: string; // /public/assets/images/...
  tags: string[];
  details: {
    goal: string;
    duration: string;
    participants: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    id: "p-001",
    title: "Ijodkor bolalar festivali",
    date: "2026-01-10",
    status: "Jarayonda",
    excerpt:
      "Bolalar ijodini bir sahnada jamlaydigan festival: she’r, rasm va mini-spektakllar orqali iste’dodlar ochiladi.",
    coverImage: "/assets/images/sample-1.jpg",
    tags: ["Festival", "San’at", "Ijod"],
    details: {
      goal: "Bolalarning ijodiy ishlari uchun ommaviy platforma yaratish.",
      duration: "Yanvar–Fevral, 2026",
      participants: "Maktablar, to‘garaklar, ustozlar, ota-onalar",
      result:
        "Top ishlardan ko‘rgazma, video lavhalar, g‘oliblar ro‘yxati va qisqa hisobot.",
    },
  },
  {
    id: "p-002",
    title: "Bolalar kitobxonligi haftaligi",
    date: "2025-12-22",
    status: "Tugallandi",
    excerpt:
      "Kitobxonlikni kuchaytirish uchun o‘qish marafoni, uchrashuvlar va bolalar uchun qisqa tavsiyalar to‘plami.",
    coverImage: "/assets/images/sample-2.jpg",
    tags: ["Adabiyot", "Kitobxonlik", "Marafon"],
    details: {
      goal: "Bolalarda muntazam o‘qish odatini shakllantirishga turtki berish.",
      duration: "7 kunlik dastur",
      participants: "O‘quvchilar, kutubxonalar, ustozlar",
      result:
        "Eng faol o‘quvchilar taqdirlandi, tavsiya ro‘yxati va foto-galereya tayyorlandi.",
    },
  },
  {
    id: "p-003",
    title: "Kreativ media laboratoriya",
    date: "2026-02-05",
    status: "Rejada",
    excerpt:
      "Bolalar uchun media savodxonligi: foto, video va hikoya qilish (storytelling) bo‘yicha qisqa master-klasslar.",
    coverImage: "/assets/images/hero-poster.jpg",
    tags: ["Media", "Workshop", "Storytelling"],
    details: {
      goal: "Bolalarga zamonaviy kontent yaratish asoslarini o‘rgatish.",
      duration: "Fevral–Mart, 2026",
      participants: "O‘smirlar, mentorlar, media hamkorlar",
      result:
        "Ishtirokchilar portfoliolari, qisqa roliklar va yakuniy taqdimot kuni.",
    },
  },
];
