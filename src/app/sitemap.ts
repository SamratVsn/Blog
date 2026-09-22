import type { MetadataRoute } from "next";
import { getAllMeta } from "@/lib/articles";
import { site, topics } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllMeta();
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/articles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/topics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...topics.map((t) => ({
      url: `${site.url}/topics/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/articles/${a.slug}`,
      lastModified: new Date(a.updated ?? a.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
