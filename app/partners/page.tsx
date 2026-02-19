import { PartnersGrid } from "@/components/blocks/partners-grid";
import { getPartners } from "@/lib/content/source";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata("Partners | Creative Union", "Meet organizations building outcomes with us.", "/partners");

export default async function PartnersPage() {
  const partners = await getPartners();
  return <main><PartnersGrid items={partners} /></main>;
}
