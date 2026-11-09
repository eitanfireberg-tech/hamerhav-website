import type { MetadataRoute } from "next";
import { SEO } from "@/lib/content";

export const dynamic = "force-static";

// Single-page site: hash fragments (#about etc.) are dropped by crawlers, so only list real URLs.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SEO.url}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
