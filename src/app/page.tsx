import type { Metadata } from "next";
import { JetpoHome } from "@/components/jetpo/JetpoHome";

export const metadata: Metadata = {
  title: "JET-PO 2027 — Les Journées de l'Entreposage dans le Poro",
  description:
    "JET-PO 2027 à Korhogo, du 28 au 30 octobre 2027. Thème : Stocker mieux, innover, progresser.",
};

export default function HomePage() {
  return <JetpoHome />;
}
