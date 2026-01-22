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
      <Container className="relative z-10 min-h-[70svh]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            absolute
            left-0
            bottom-24
            md:bottom-32
            max-w-3xl
          "
        >
          <div className="mb-10">
            <TypingHeading
              text="Bolalar ijodkorlari uyushmasi"
              speed={0.045}
              className="mb-3"
              showCaret
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