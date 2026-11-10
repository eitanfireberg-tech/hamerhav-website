import type { MetadataRoute } from "next";
import { SEO, LANDING_PAGES } from "@/lib/content";

export const dynamic = "force-static";

// Hash fragments (#about etc.) are dropped by crawlers, so only list real URLs.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SEO.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...LANDING_PAGES.map((p) => ({
      url: `${SEO.url}/${p.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
