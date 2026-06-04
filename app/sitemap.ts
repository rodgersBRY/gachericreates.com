import type { MetadataRoute } from "next";
import { collections } from "@/lib/data/collections";

const base = "https://gachericreates.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, priority: 1 },
    { url: `${base}/gallery`, priority: 0.9 },
    { url: `${base}/prints`, priority: 0.8 },
    { url: `${base}/safaris`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.6 },
    { url: `${base}/contact`, priority: 0.5 },
  ];

  const collectionRoutes: MetadataRoute.Sitemap = collections.map((c) => ({
    url: `${base}/gallery/${c.id}`,
    priority: 0.7,
  }));

  return [...staticRoutes, ...collectionRoutes];
}
