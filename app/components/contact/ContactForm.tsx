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

    setSent(true);
    setForm({ name: "", contact: "", message: "" });
  };

  const inputClasses =
    "h-12 rounded-xl border border-[color:rgba(148,163,255,0.28)] bg-[color:rgba(15,23,42,0.72)] px-4 text-[var(--color-text)] outline-none transition-all duration-300 placeholder:text-[color:rgba(154,164,212,0.7)] focus:border-[color:var(--color-border-strong)] focus:bg-[color:rgba(30,41,79,0.85)] focus:ring-2 focus:ring-[color:rgba(124,92,255,0.35)]";

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)]/80 bg-[color:var(--color-surface)] p-7 ring-soft backdrop-blur-2xl"
    >
     <div className="pointer-events-none absolute -inset-28 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(124,92,255,0.24),transparent_76%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <Heading as="h3" className="mb-2 text-2xl">
        Murojaat qoldirish
      </Heading>
      <Text muted className="mb-6">
        Formani to‘ldiring.
      </Text>

      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[var(--color-text-soft)]">Ism</span>
          <input
            value={form.name}
            onChange={onChange("name")}
            placeholder="Ismingiz"
            className={inputClasses}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[var(--color-text-soft)]">
            Telefon yoki Email
          </span>
          <input
            value={form.contact}
            onChange={onChange("contact")}
            placeholder="+998… yoki email"
            className={inputClasses}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-[var(--color-text-soft)]">Xabar</span>
          <textarea
            value={form.message}
            onChange={onChange("message")}
            placeholder="Qisqacha yozing…"
            rows={5}
            className={`${inputClasses} h-auto resize-none py-3`}
          />
        </label>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button
            variant={canSend ? "primary" : "ghost"}
            className={canSend ? "" : "pointer-events-none opacity-60"}
          >
            Yuborish
          </Button>

          <span className="text-sm text-[var(--color-text-muted)]">
            Minimal talab: ism 2+, kontakt 5+, xabar 10+ belgi
          </span>
        </div>

        {sent && (
          <div className="mt-2 rounded-xl border border-[color:rgba(56,189,248,0.4)] bg-[color:rgba(14,165,233,0.16)] px-4 py-3 text-sm font-medium text-[#dbeafe]">
            Murojaat qabul qilindi (demo). Tez orada bog‘lanamiz.
          </div>
        )}
      </div>
      
    </motion.form>
  );
}