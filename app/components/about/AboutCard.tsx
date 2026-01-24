// app/components/about/AboutCard.tsx
"use client";

import { motion } from "framer-motion";
import Heading from "../core/Heading";
import Text from "../core/Text";

type IconType = "spark" | "grid" | "shield";

type AboutCardProps = {
  title: string;
  text: string;
  icon: IconType;
};

function Icon({ type }: { type: IconType }) {
  const iconClassName = "h-6 w-6 fill-[var(--color-primary-contrast)]";

  if (type === "spark") {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName}>
        <path d="M12 2l1.9 5.6L20 9.5l-6.1 1.9L12 17l-1.9-5.6L4 9.5l6.1-1.9L12 2z" />
      </svg>
    );
  }
  if (type === "grid") {
    return (
      <svg viewBox="0 0 24 24" className={iconClassName}>
        <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={iconClassName}>
      <path d="M12 2l8 4v6c0 5-3.8 9.4-8 10-4.2-.6-8-5-8-10V6l8-4z" />
    </svg>
  );
}

export default function AboutCard({ title, text, icon }: AboutCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-surface)] p-6 ring-soft backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(124,92,255,0.22),transparent_72%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:rgba(148,163,255,0.28)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-[0_14px_30px_rgba(92,77,255,0.35)]">
        <Icon type={icon} />
      </div>

      <Heading as="h3" className="mb-3 text-xl">
        {title}
      </Heading>

      <Text muted>{text}</Text>
    </motion.div>
  );
}