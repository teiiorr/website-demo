"use client";

import { motion } from "framer-motion";
import Container from "../core/Container";
import Section from "../core/Section";
import Text from "../core/Text";
import Button from "../core/Button";
import HeroVideo from "./HeroVideo";
import HeroOverlay from "./HeroOverlay";
import TypingHeading from "../core/TypingHeading";

export default function HeroSection() {
  return (
    // IMPORTANT: relative + overflow-hidden so the absolute video stays inside the hero
    <Section className="relative min-h-[100svh] overflow-hidden pt-28 pb-20">
      {/* Background video */}
      <HeroVideo />

      {/* Overlay */}
      <HeroOverlay />

      {/* Content */}
      <Container className="relative z-10 flex min-h-[70svh] items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          // 👇 небольшой lift на десктопе, чтобы карточка «дышала»
          className="max-w-3xl rounded-3xl border border-[color:var(--color-border)]/70 bg-[color:var(--color-surface-strong)]/85 p-6 shadow-soft backdrop-blur-2xl sm:p-8 lg:p-10 lg:mb-12"
        >
          <div className="mb-6 sm:mb-8">
            <TypingHeading
              text="Bolalar ijodkorlari uyushmasi"
              speed={0.05}
              className="mb-3"
              showCaret
              mobileBreakAt="uyushmasi"
            />

            <Text size="lg" muted className="max-w-2xl">
              Bolalar Ijodkorlari Uyushmasi bolalar isteʼdodini qo‘llab-quvvatlaydi,
              yangi loyihalar yaratadi va jamiyat uchun foydali tashabbuslarni
              rivojlantiradi.
            </Text>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="#projects" variant="primary">
              Loyihalarni ko‘rish
            </Button>
            <Button href="#about" variant="secondary">
              Biz haqimizda
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
