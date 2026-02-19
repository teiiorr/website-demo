import Link from "next/link";
import Image from "next/image";
import type { NewsArticle } from "@/lib/content/types";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function NewsGrid({ items, compact = false }: { items: NewsArticle[]; compact?: boolean }) {
  return (
    <section className="container-shell space-y-8 py-14">
      <SectionTitle eyebrow="Newsroom" title="Latest updates" description="Program launches, ecosystem partnerships, and measurable progress from across our network." />
      <div className="grid gap-5 md:grid-cols-3">
        {items.slice(0, compact ? 3 : items.length).map((article) => (
          <Card key={article.slug} className="overflow-hidden p-0">
            <Image src={article.cover} alt="" width={1200} height={700} className="aspect-[16/10] w-full object-cover" />
            <div className="space-y-3 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{article.category}</p>
              <h3 className="text-lg font-semibold"><Link href={`/news/${article.slug}`}>{article.title}</Link></h3>
              <p className="text-sm text-[var(--text-muted)]">{article.excerpt}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
