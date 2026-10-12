import type { MetadataRoute } from "next";
import { EVENT, NEWS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/programme", "/evenements", "/exposants", "/presse", "/faq"];
  const now = new Date();
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${EVENT.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
  const news: MetadataRoute.Sitemap = NEWS.map((item) => ({
    url: `${EVENT.url}/evenements/${item.slug}`,
    lastModified: new Date(`${item.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...pages, ...news];
}
