import { MetadataRoute } from "next";
import { cases } from "@/lib/content";

const BASE_URL = "https://socialbrand.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseEntries: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${BASE_URL}/cases/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/aanbod`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/cases`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...caseEntries,
    { url: `${BASE_URL}/over-ons`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
