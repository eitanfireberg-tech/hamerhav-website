import type { MetadataRoute } from "next";
import { SEO } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SEO.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#treatment`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#approaches`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#specialties`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#courses`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
