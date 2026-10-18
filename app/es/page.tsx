import type { Metadata } from "next";
import { dict } from "@/_content/i18n";
import { HomePage } from "../_home/HomePage";

const t = dict.es.meta;

export const metadata: Metadata = {
  title: { absolute: t.title },
  description: t.description,
  alternates: {
    canonical: "/es",
    languages: { "pt-BR": "/", es: "/es", en: "/en", "x-default": "/en" },
  },
  openGraph: { locale: "es_ES", url: "/es", title: t.title, description: t.description },
  twitter: { title: t.title, description: t.description },
};

export default function HomeEs() {
  return <HomePage locale="es" />;
}
