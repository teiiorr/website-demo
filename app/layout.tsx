// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { buildMetadata, jsonLdPlaceholder } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata(
  "Creative Union | Youth Innovation Platform",
  "A premium youth innovation platform connecting programs, projects, partners, and impact storytelling."
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = jsonLdPlaceholder("/");

  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
