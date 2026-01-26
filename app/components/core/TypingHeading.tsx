"use client";

import { motion } from "framer-motion";
import Heading from "./Heading";

type TypingHeadingProps = {
  text: string;
  speed?: number;
  className?: string;
  showCaret?: boolean;
  mobileBreakAt?: string;
  onDone?: () => void;
};

export default function TypingHeading({
  text,
  speed = 0.05,
  className,
  showCaret = true,
  mobileBreakAt,
  onDone,
}: TypingHeadingProps) {
  const renderLetters = (value: string) =>
    Array.from(value).map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  const breakIndex = mobileBreakAt ? text.indexOf(mobileBreakAt) : -1;
  const beforeBreak = breakIndex > -1 ? text.slice(0, breakIndex).trimEnd() : text;
  const afterBreak = breakIndex > -1 ? text.slice(breakIndex).trimStart() : "";

  // считаем примерную длительность печати
  const totalChars = text.replace(/\s/g, "").length;
  const typingDuration = Math.max(0.5, totalChars * speed);

  return (
    <Heading as="h1" accent className={`overflow-visible whitespace-pre-line ${className ?? ""}`}>
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
        // когда набор закончился — вызываем onDone
        onAnimationComplete={() => {
          // staggerChildren даёт завершение чуть позже — добавим небольшой буфер
          window.setTimeout(() => onDone?.(), Math.round(typingDuration * 200));
        }}
        className="inline-block"
      >
        {renderLetters(beforeBreak)}
        {breakIndex > -1 && (
          <>
            <span aria-hidden="true" className="hidden sm:inline">
              {"\u00A0"}
            </span>
            <br className="sm:hidden" />
            {renderLetters(afterBreak)}
          </>
        )}
      </motion.span>

      {showCaret && (
        <motion.span
          aria-hidden="true"
          className="ml-2 inline-block h-[1em] w-[2px] bg-current align-[-0.1em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0] }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      )}
    </Heading>
  );
}