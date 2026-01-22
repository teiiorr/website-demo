"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";

type TypingHeadingProps = {
  text: string;
  speed?: number; // seconds per character
  className?: string;
  showCaret?: boolean;
};

export default function TypingHeading({
  text,
  speed = 0.05,
  className,
  showCaret = true,
}: TypingHeadingProps) {
  const letters = Array.from(text);

  return (
    <Heading as="h1" accent className={className}>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: speed,
            },
          },
        }}
        className="inline-block"
      >
        {letters.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>

      {showCaret && (
        <motion.span
          aria-hidden="true"
          className="ml-1 inline-block h-[1em] w-[2px] bg-current align-[-0.1em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      )}
    </Heading>
  );
}