// app/components/partners/PartnersSection.tsx
"use client";

import Container from "../core/Container";
import Section from "../core/Section";
import Heading from "../core/Heading";
import Text from "../core/Text";
import PartnersCarousel from "./PartnersCarousel";

export default function PartnersSection() {
  return (
    <Section id="partners" className="bg-noise">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Heading as="h2" className="mb-4">
            Hamkorlar
          </Heading>
          <Text muted>
            Hamkorlarimiz uyushmaning ochiqligi va ishonchliligini ko‘rsatadi.
            Logolar karusel ko‘rinishida beriladi — ixcham, zamonaviy va qulay.
          </Text>
        </div>

        <PartnersCarousel />
      </Container>
    </Section>
  );
}
