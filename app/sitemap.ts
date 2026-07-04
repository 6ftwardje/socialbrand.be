import { MetadataRoute } from "next";
import { officeCases } from "@/lib/office-cases";

const BASE_URL = "https://office6.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseRoutes = officeCases.map((item) => ({
    url: `${BASE_URL}/cases/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/cases`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...caseRoutes,
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
