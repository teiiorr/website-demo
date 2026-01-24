// app/components/contact/ContactSection.tsx
"use client";

import Container from "../core/Container";
import Section from "../core/Section";
import Heading from "../core/Heading";
import Text from "../core/Text";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <Section id="contact" className="bg-noise">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="max-w-xl">
            <Heading as="h2" className="mb-4">
              Bog‘lanish
            </Heading>
            <Text muted className="mb-8">
              Taklif, g‘oya yoki hamkorlik bo‘yicha murojaat qoldiring — biz tez
              orada javob beramiz.
            </Text>

            <div className="rounded-2xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-surface)] p-6 ring-soft backdrop-blur-2xl">
              <div className="grid gap-4 text-sm text-[var(--color-text-soft)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[var(--color-text-muted)]">Telefon</span>
                  <span>+998 (88) 464-96-69</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[var(--color-text-muted)]">Email</span>
                  <span>info@teiiordev.uz</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[var(--color-text-muted)]">Manzil</span>
                  <span>Toshkent shahri (Ziyo ko'chasi, 2A)</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-white/60">Ish vaqti</span>
                  <span className="text-[var(--color-text-muted)]">Ish vaqti</span>
                  <span>Dush–Shanba, 10:00–19:00</span>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}