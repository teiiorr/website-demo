// app/components/news/NewsSection.tsx
"use client";

import Container from "../core/Container";
import Section from "../core/Section";
import Heading from "../core/Heading";
import Text from "../core/Text";
import NewsSlider from "../news/NewsSlider";

export default function NewsSection() {
  return (
    <Section id="news" className="section-news">
      <Container>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Heading as="h2" className="mb-4" accent>
              Yangiliklar
            </Heading>
            <Text muted>
              Uyushma yangiliklari, muhim e’lonlar va loyiha natijalari bo‘yicha
              doimiy ravishda yangilanadigan xabarlar.
            </Text>
          </div>
        </div>

        <NewsSlider />
      </Container>
    </Section>
  );
}
