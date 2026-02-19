import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Provide a valid email"),
  organization: z.string().min(2, "Organization is required"),
  message: z.string().min(20, "Please share more detail"),
});

export type ContactInput = z.infer<typeof contactSchema>;
