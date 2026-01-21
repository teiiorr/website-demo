// app/components/hero/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Container from "../core/Container";
import Section from "../core/Section";
import Heading from "../core/Heading";
import Text from "../core/Text";
import Button from "../core/Button";
import HeroVideo from "./HeroVideo";
import HeroOverlay from "./HeroOverlay";

export default function HeroSection() {
  return (
    <Section className="min-h-[100svh] pt-28 pb-20">
      {/* Background video */}
      <HeroVideo />

      {/* Gradient / noise / blur overlay */}
      <HeroOverlay />

      {/* Content */}
      <Container className="relative z-10 flex min-h-[70svh] items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <Heading as="h1" accent className="mb-6">
            Bolalar ijodi uchun zamonaviy va ochiq platforma
          </Heading>

          <Text size="lg" muted className="mb-10">
            Bolalar Ijodkorlari Uyushmasi bolalar isteʼdodini qo‘llab-quvvatlaydi,
            yangi loyihalar yaratadi va jamiyat uchun foydali tashabbuslarni
            rivojlantiradi.
          </Text>

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
