import { ContactBlock } from "@/components/blocks/contact-block";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata("Contact | Creative Union", "Start a partnership conversation with our team.", "/contact");

export default function ContactPage() {
  return <main><ContactBlock /></main>;
}
