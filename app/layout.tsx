// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme/ThemeProvider";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bolalar Ijodkorlari Uyushmasi",
  description:
    "Bolalar ijodini qo‘llab-quvvatlaydigan platforma: loyihalar, yangiliklar, hamkorlik va ishtirok imkoniyatlari.",
  metadataBase: new URL("https://example.uz"),
  openGraph: {
    title: "Bolalar Ijodkorlari Uyushmasi",
    description:
      "Bolalar ijodi, loyihalar va yangiliklar — zamonaviy, qulay va chiroyli taqdimot.",
    type: "website",
    locale: "uz_UZ",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body
        className={`${inter.variable} min-h-dvh bg-transparent text-[var(--color-text)] antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
