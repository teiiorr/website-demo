import type { Metadata } from "next";

const baseUrl = "https://website-demo.local";

export function buildMetadata(title: string, description: string, path = "/"): Metadata {
  const url = new URL(path, baseUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "Creative Union",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function jsonLdPlaceholder(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Creative Union",
    url: new URL(path, baseUrl).toString(),
  };
}
