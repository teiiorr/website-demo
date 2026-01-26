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
      className="
        group relative flex
        h-[520px] min-w-[280px] max-w-[360px]
        snap-start flex-col overflow-hidden
        rounded-2xl border border-[color:var(--color-border)]/80
        bg-[color:var(--color-surface)]
        shadow-[var(--shadow-card)]
        backdrop-blur-2xl
      "
    >
      {/* glow */}
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(65%_65%_at_50%_0%,var(--section-accent-soft),transparent_75%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* IMAGE — больше на десктопе */}
      <div className="relative h-64 w-full overflow-hidden sm:h-72 md:h-80 lg:h-[340px]">
        <Image
          src={item.coverImage}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 280px, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:rgba(8,13,28,0.6)] via-[color:rgba(8,13,28,0.18)] to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--section-accent)]">
          {item.date}
        </span>

        {/* TITLE — максимум 2 строки */}
        <Heading
          as="h3"
          className="
            text-lg leading-snug
            overflow-hidden
            [display:-webkit-box]
            [-webkit-line-clamp:2]
            [-webkit-box-orient:vertical]
          "
        >
          {item.title}
        </Heading>

        {/* EXCERPT — максимум 2 строки */}
        <Text
          size="sm"
          muted
          className="
            text-[color:var(--color-text-muted)]
            overflow-hidden
            [display:-webkit-box]
            [-webkit-line-clamp:2]
            [-webkit-box-orient:vertical]
          "
        >
          {item.excerpt}
        </Text>

        {/* CTA всегда снизу */}
        <div className="mt-auto pt-3">
          <Link
            href={`/news/${item.slug}`}
            className="
              inline-flex items-center gap-2
              text-sm font-semibold
              text-[var(--section-accent)]
              transition-colors duration-300
              group-hover:text-[var(--section-accent-strong)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[color:var(--section-accent)]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[color:var(--color-bg)]
            "
          >
            Batafsil <span className="opacity-70">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}