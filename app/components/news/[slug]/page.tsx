import Image from "next/image";
import { notFound } from "next/navigation";
import { getNews, getNewsBySlug } from "@/lib/content/source";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  const news = await getNews();
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) return buildMetadata("Article not found", "", "/news");
  return buildMetadata(article.title, article.excerpt, `/news/${article.slug}`);
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) notFound();

  return (
    <main className="container-shell py-14">
      <article className="mx-auto max-w-3xl space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{article.category} · {article.readTime}</p>
        <h1 className="text-4xl font-semibold tracking-tight">{article.title}</h1>
        <Image src={article.cover} alt="" width={1200} height={700} className="rounded-2xl border" />
        <p className="text-lg leading-8 text-[var(--text-muted)]">{article.body}</p>
      </article>
    </main>
  );
}
