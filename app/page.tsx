// app/page.tsx
import { Hero } from "@/components/blocks/hero";
import { NewsGrid } from "@/components/blocks/news-grid";
import { ProjectsList } from "@/components/blocks/projects-list";
import { PartnersGrid } from "@/components/blocks/partners-grid";
import { ContactBlock } from "@/components/blocks/contact-block";

import {
  getNews,
  getPartners,
  getProjects,
} from "@/lib/content/source";

export default async function HomePage() {
  const [news, projects, partners] = await Promise.all([
    getNews(),
    getProjects(),
    getPartners(),
  ]);

  return (
    <main>
      <Hero />
      <NewsGrid items={news} compact />
      <ProjectsList items={projects} />
      <PartnersGrid items={partners} />
      <ContactBlock />
    </main>
  );
}
