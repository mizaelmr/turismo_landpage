import type { Metadata } from "next";
import { HomePage } from "./_home/HomePage";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    // Versões da landing em outros idiomas (para agências de fora do Brasil)
    languages: { "pt-BR": "/", es: "/es", en: "/en", "x-default": "/en" },
  },
};

export default function Home() {
  return <HomePage locale="pt" />;
}
