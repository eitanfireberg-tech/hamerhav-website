import type { MetadataRoute } from "next";
import { SEO } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SEO.url;

  return [
    {
      url: base,
      lastModified: new Date("2026-03-26"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
