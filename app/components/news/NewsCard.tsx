// app/components/news/NewsCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NewsItem } from "../../data/news";
import Heading from "../core/Heading";
import Text from "../core/Text";

type NewsCardProps = {
  item: NewsItem;
};

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative flex min-w-[280px] max-w-[340px] snap-start flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-surface)] shadow-[0_18px_40px_rgba(8,14,30,0.45)] backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(65%_65%_at_50%_0%,var(--section-accent-soft),transparent_75%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={item.coverImage}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 280px, 340px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:rgba(8,13,28,0.9)] via-[color:rgba(8,13,28,0.35)] to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--section-accent)]">
          {item.date}
        </span>

        <Heading as="h3" className="text-xl">
          {item.title}
        </Heading>

        <Text size="sm" muted>
          {item.excerpt}
        </Text>

        <div className="mt-auto pt-4">
          <Link
            href={`/news/${item.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--section-accent)] transition-colors duration-300 group-hover:text-[var(--section-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--section-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg)]"
          >
            Batafsil <span className="opacity-70">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
