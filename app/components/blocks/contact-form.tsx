"use client";

import { useRef, useState } from "react";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type Errors = Partial<Record<keyof ContactInput, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const liveRegion = useRef<HTMLParagraphElement>(null);

  async function onSubmit(formData: FormData) {
    setPending(true);
    setResult(null);
    const payload = Object.fromEntries(formData.entries());
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      const mapped: Errors = {
        name: parsed.error.flatten().fieldErrors.name?.[0],
        email: parsed.error.flatten().fieldErrors.email?.[0],
        organization: parsed.error.flatten().fieldErrors.organization?.[0],
        message: parsed.error.flatten().fieldErrors.message?.[0],
      };
      setErrors(mapped);
      setPending(false);
      return;
    }

    setErrors({});
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    const data = await response.json();
    setResult(data.message ?? "Request sent");
    setPending(false);
    liveRegion.current?.focus();
  }

  return (
    <Card>
      <form action={onSubmit} className="space-y-4" noValidate>
        <Input name="name" placeholder="Full name" aria-invalid={!!errors.name} />
        {errors.name && <p className="text-sm text-[var(--danger)]">{errors.name}</p>}
        <Input name="email" type="email" placeholder="Work email" aria-invalid={!!errors.email} />
        {errors.email && <p className="text-sm text-[var(--danger)]">{errors.email}</p>}
        <Input name="organization" placeholder="Organization" aria-invalid={!!errors.organization} />
        {errors.organization && <p className="text-sm text-[var(--danger)]">{errors.organization}</p>}
        <Textarea name="message" rows={5} placeholder="Tell us about your goals" aria-invalid={!!errors.message} />
        {errors.message && <p className="text-sm text-[var(--danger)]">{errors.message}</p>}
        <Button type="submit" disabled={pending}>{pending ? "Sending..." : "Send request"}</Button>
        {result && (
          <p tabIndex={-1} ref={liveRegion} className="text-sm text-[var(--success)]">
            {result}
          </p>
        )}
      </form>
    </Card>
  );
}
