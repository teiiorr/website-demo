import { SectionTitle } from "@/components/ui/section-title";
import { ContactForm } from "./contact-form";

export function ContactBlock() {
  return (
    <section className="container-shell grid gap-8 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-start">
      <SectionTitle eyebrow="Contact" title="Build something meaningful together" description="Tell us your goals and constraints. Our team will follow up with a practical collaboration path." />
      <ContactForm />
    </section>
  );
}
