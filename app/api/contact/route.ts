import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { trackEvent } from "@/lib/analytics/events";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  trackEvent("contact_submitted", { email: parsed.data.email });

  return NextResponse.json({ ok: true, message: "Thanks, we will respond within 2 business days." });
}
