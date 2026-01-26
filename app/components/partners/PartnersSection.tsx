// app/components/partners/PartnersSection.tsx
"use client";

import Container from "../core/Container";
import Section from "../core/Section";
import Heading from "../core/Heading";
import Text from "../core/Text";
import PartnersCarousel from "./PartnersCarousel";

export default function PartnersSection() {
  return (
    <Section id="partners" className="section-partners">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Heading as="h2" className="mb-4" accent>
            Hamkorlar
          </Heading>
          <Text muted>
            Biz bilan birga ishlayotgan tashkilotlar ishonch va sifatni belgilaydi.
          </Text>
        </div>

        <PartnersCarousel />
      </Container>
    </Section>
  );
}
