"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../core/Section";
import HeroVideo from "./HeroVideo";
import TypingHeading from "../core/TypingHeading";

export default function HeroSection() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <Section className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28">
      {/* Video starts ONLY after intro */}
      <HeroVideo shouldPlay={introDone} />

      {/* INTRO OVERLAY */}
      <AnimatePresence>
        {!introDone && (
          <motion.div
            className="absolute inset-0 z-50 grid place-items-center bg-[color:var(--color-bg)]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            <div className="w-full max-w-5xl px-4 sm:px-6">
              <div className="mx-auto max-w-[22rem] sm:max-w-none">
                {/* Mobile: 3 words = 3 lines */}
                <div className="block sm:hidden">
                  <TypingHeading
                    text={`BOLALAR\nIJODKORLARI\nUYUSHMASI`}
                    speed={0.045}
                    className="text-3xl leading-[1.1] tracking-tight text-center"
                    showCaret
                    onDone={() => setIntroDone(true)}
                  />
                </div>

                {/* Tablet / Desktop */}
                <div className="hidden sm:block">
                  <TypingHeading
                    text={`BOLALAR IJODKORLARI\nUYUSHMASI`}
                    speed={0.045}
                    className="text-6xl lg:text-7xl leading-[1.05] tracking-tight text-center"
                    showCaret
                    onDone={() => setIntroDone(true)}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.55 }}
                  className="mt-5 text-center text-xs sm:text-base text-[color:var(--color-text-muted)]"
                >
                  bolalar isteʼdodini qo‘llab-quvvatlaydigan uyushma
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}