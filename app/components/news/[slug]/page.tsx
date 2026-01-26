// app/news/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "../../../components/core/Container";
import Section from "../../../components/core/Section";
import Heading from "../../../components/core/Heading";
import Text from "../../../components/core/Text";
import Button from "../../../components/core/Button";
import { news } from "../../../data/news";


type PageProps = {
  params: { slug: string };
};

export default function NewsDetailPage({ params }: PageProps) {
  const item = news.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      <Section className="bg-noise section-news pt-28">
        <Container>
          <div className="mb-6">
            <Button href="/#news" variant="secondary">
              ← Yangiliklarga qaytish
            </Button>
          </div>

          <div className="max-w-3xl">
            <Heading as="h1" accent className="mb-4">
              {item.title}
            </Heading>

            <Text muted className="mb-6">
              {item.date}
            </Text>

            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl border border-[color:var(--color-border)]/70">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
                priority
              />
            </div>

            <div className="news-content grid gap-4">
              {item.content.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
