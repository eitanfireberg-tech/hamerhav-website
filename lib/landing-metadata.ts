import type { Metadata } from "next";
import { SITE, SEO, type LandingPage } from "@/lib/content";

// Root layout metadata is shallow-merged, so every nested object (openGraph, twitter, alternates)
// must be fully redefined here or the page inherits the homepage values.
export function landingMetadata(page: LandingPage): Metadata {
  const path = `/${page.slug}/`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SEO.url}${path}`,
      siteName: SITE.name,
      locale: SEO.locale,
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: page.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/og-image.jpg"],
    },
  };
}
