import type { MetadataRoute } from "next";
import { EVENT } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: EVENT.fullTitle,
    short_name: EVENT.shortName,
    description:
      "Salon de l'entreposage agricole et du warrantage — Région du Tchologo, Côte d'Ivoire.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F8F7",
    theme_color: "#0D6B3D",
    lang: "fr",
    categories: ["events", "business", "agriculture"],
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
    ],
  };
}
