import { NewsGrid } from "@/components/blocks/news-grid";
import { getNews } from "@/lib/content/source";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata("News | Creative Union", "Read updates from programs, partners, and project launches.", "/news");

export default async function NewsPage() {
  const news = await getNews();
  return <main><NewsGrid items={news} /></main>;
}
