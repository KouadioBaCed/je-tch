import type { MetadataRoute } from "next";
import { EVENT } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/programme", "/exposants", "/presse", "/faq"];
  const now = new Date();
  return routes.map((route) => ({
    url: `${EVENT.url}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
