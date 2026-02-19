import type { Partner } from "@/lib/content/types";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function PartnersGrid({ items }: { items: Partner[] }) {
  return (
    <section className="container-shell space-y-8 py-14">
      <SectionTitle eyebrow="Ecosystem" title="Trusted partners" description="Cross-sector collaborators accelerating opportunities for young creators." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((partner) => (
          <Card key={partner.id} className="space-y-2">
            <h3 className="font-semibold">{partner.name}</h3>
            <p className="text-sm text-[var(--text-muted)]">{partner.focus}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
