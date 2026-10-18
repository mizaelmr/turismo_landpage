import type { Metadata } from "next";
import { dict } from "@/_content/i18n";
import { HomePage } from "../_home/HomePage";

const t = dict.en.meta;

export const metadata: Metadata = {
  title: { absolute: t.title },
  description: t.description,
  alternates: {
    canonical: "/en",
    languages: { "pt-BR": "/", es: "/es", en: "/en", "x-default": "/en" },
  },
  openGraph: { locale: "en_US", url: "/en", title: t.title, description: t.description },
  twitter: { title: t.title, description: t.description },
};

export default function HomeEn() {
  return <HomePage locale="en" />;
}
