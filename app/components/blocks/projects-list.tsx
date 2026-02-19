import type { Project } from "@/lib/content/types";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const tone = { active: "bg-emerald-100 text-emerald-900", pilot: "bg-sky-100 text-sky-900", planned: "bg-amber-100 text-amber-900" };

export function ProjectsList({ items }: { items: Project[] }) {
  return (
    <section className="container-shell space-y-8 py-14">
      <SectionTitle eyebrow="Portfolio" title="Projects designed for scale" description="Each initiative is structured for long-term operations and future CMS-backed publication." />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((project) => (
          <Card key={project.id} className="space-y-3">
            <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${tone[project.status]}`}>{project.status}</p>
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm text-[var(--text-muted)]">{project.summary}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
