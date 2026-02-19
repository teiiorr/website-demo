import { ProjectsList } from "@/components/blocks/projects-list";
import { getProjects } from "@/lib/content/source";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata("Projects | Creative Union", "Explore active and planned initiatives.", "/projects");

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <main><ProjectsList items={projects} /></main>;
}
