// app/components/about/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Container from "../core/Container";
import Section from "../core/Section";
import Heading from "../core/Heading";
import Text from "../core/Text";
import AboutCard from "./AboutCard";

export default function AboutSection() {
  return (
    <Section id="about" className="section-about">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Heading as="h2" className="mb-4" accent>
            Biz haqimizda
          </Heading>
          <Text muted>
            Uyushma bolalar ijodini qo‘llab-quvvatlaydi: adabiyot, san’at, media va
            kreativ yo‘nalishlarda yangi imkoniyatlar yaratadi.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid auto-rows-fr gap-6 md:grid-cols-3"
        >
          <AboutCard
            title="Missiya"
            text="Bolalar isteʼdodini ko‘rsatish va rivojlantirish uchun ishonchli maydon yaratish."
            icon="spark"
          />

          <AboutCard
            title="Yo‘nalishlar"
            text="Adabiyot, san’at, media va kreativ texnologiyalar orqali rivojlanish."
            icon="grid"
          />

          <AboutCard
            title="Qadriyatlar"
            text="Ochiqlik, qo‘llab-quvvatlash va bolalar kelajagiga ishonch."
            icon="shield"
          />
        </motion.div>
      </Container>
    </Section>
  );
}