import type { NewsArticle, Partner, Project } from "./types";

const news: NewsArticle[] = [
  {
    slug: "creative-labs-2026",
    title: "Creative Labs 2026 opens with 120 young creators",
    excerpt: "A new cohort explores storytelling, robotics, and civic design.",
    body: "Our 2026 cohort began with a three-day sprint focused on prototype thinking and collaboration. Mentors from education and industry guided students through rapid ideation, user testing, and public presentation.",
    publishedAt: "2026-01-12",
    readTime: "4 min",
    category: "Programs",
    cover: "/images/news-1.svg",
  },
  {
    slug: "partner-network-growth",
    title: "Partner network expands to regional innovation hubs",
    excerpt: "The new partnership model supports access beyond major cities.",
    body: "Through a distributed network model, our platform can now deliver workshops and micro-grants across regional centers, enabling more equitable participation in creative education.",
    publishedAt: "2025-12-20",
    readTime: "3 min",
    category: "Partnerships",
    cover: "/images/news-2.svg",
  },
  {
    slug: "student-led-showcase",
    title: "Student-led showcase presents 42 launch-ready concepts",
    excerpt: "From inclusive toys to climate tools, students ship bold ideas.",
    body: "The winter showcase highlighted product thinking and social impact. Evaluation focused on feasibility, ethics, and real-world relevance, with selected teams moving into incubation.",
    publishedAt: "2025-11-08",
    readTime: "5 min",
    category: "Showcase",
    cover: "/images/news-3.svg",
  },
];

const projects: Project[] = [
  { id: "p1", name: "Maker Bus", summary: "Mobile labs for schools outside city centers.", status: "active" },
  { id: "p2", name: "Story Atlas", summary: "Digital storytelling toolkit in Uzbek and Russian.", status: "pilot" },
  { id: "p3", name: "Junior Impact Studio", summary: "Social innovation curriculum for ages 12-16.", status: "planned" },
];

const partners: Partner[] = [
  { id: "pa1", name: "Future Classroom Foundation", focus: "EdTech access" },
  { id: "pa2", name: "City Innovation Office", focus: "Public sector pilots" },
  { id: "pa3", name: "Spark Ventures", focus: "Youth entrepreneurship" },
  { id: "pa4", name: "Open Media Lab", focus: "Creative media production" },
];

export async function getNews() {
  return news;
}

export async function getNewsBySlug(slug: string) {
  return news.find((entry) => entry.slug === slug) ?? null;
}

export async function getProjects() {
  return projects;
}

export async function getPartners() {
  return partners;
}
