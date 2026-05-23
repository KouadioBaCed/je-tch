import type { MetadataRoute } from "next";
import { EVENT } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${EVENT.url}/sitemap.xml`,
    host: EVENT.url,
  };
}
