// app/components/contact/ContactForm.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Heading from "../core/Heading";
import Text from "../core/Text";
import Button from "../core/Button";

type FormState = {
  name: string;
  contact: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    contact: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
      setSent(false);
    };

  const canSend =
    form.name.trim().length >= 2 &&
    form.contact.trim().length >= 5 &&
    form.message.trim().length >= 10;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) return;

    // MVP demo: backend yo‘q, faqat success state
    setSent(true);
    setForm({ name: "", contact: "", message: "" });
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl bg-white/5 p-7 ring-soft backdrop-blur-xl"
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute -inset-24 bg-white/10 opacity-0 blur-3xl transition-opacity duration-300 [animation:glowPulse_6s_ease-in-out_infinite]" />

      <Heading as="h3" className="mb-2 text-2xl">
        Murojaat qoldirish
      </Heading>
      <Text muted className="mb-6">
        Formani to‘ldiring.
      </Text>

      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm text-white/70">Ism</span>
          <input
            value={form.name}
            onChange={onChange("name")}
            placeholder="Ismingiz"
            className="h-12 rounded-xl bg-black/40 px-4 text-white outline-none ring-1 ring-white/10 transition focus:ring-white/25"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-white/70">Telefon yoki Email</span>
          <input
            value={form.contact}
            onChange={onChange("contact")}
            placeholder="+998… yoki email"
            className="h-12 rounded-xl bg-black/40 px-4 text-white outline-none ring-1 ring-white/10 transition focus:ring-white/25"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-white/70">Xabar</span>
          <textarea
            value={form.message}
            onChange={onChange("message")}
            placeholder="Qisqacha yozing…"
            rows={5}
            className="rounded-xl bg-black/40 px-4 py-3 text-white outline-none ring-1 ring-white/10 transition focus:ring-white/25 resize-none"
          />
        </label>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button
            variant={canSend ? "primary" : "ghost"}
            className={canSend ? "" : "opacity-60 pointer-events-none"}
          >
            Yuborish
          </Button>

          <span className="text-sm text-white/60">
            Minimal talab: ism 2+, kontakt 5+, xabar 10+ belgi
          </span>
        </div>

        {sent && (
          <div className="mt-2 rounded-xl bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200 ring-1 ring-emerald-300/20">
            Murojaat qabul qilindi (demo). Tez orada bog‘lanamiz.
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.08;
          }
          50% {
            opacity: 0.16;
          }
        }
      `}</style>
    </motion.form>
  );
}
