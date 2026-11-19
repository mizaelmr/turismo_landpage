import type { Metadata } from "next";
import { headers } from "next/headers";
import { Guia } from "./Guia";
import type { Locale } from "@/_content/i18n";

// Página de boas-vindas enviada por WhatsApp/e-mail depois do cadastro da agência.
// O idioma vem do ?l=pt|es|en (cada template do WhatsApp aponta para o seu) ou do navegador.
// Fica fora do Google: é conteúdo para quem já é cliente.
export const metadata: Metadata = {
  title: "Primeiros passos",
  robots: { index: false, follow: false },
};

function pickLocale(param: string | undefined, acceptLanguage: string | null): Locale {
  if (param === "pt" || param === "es" || param === "en") return param;
  const first = (acceptLanguage ?? "").toLowerCase();
  if (first.startsWith("es")) return "es";
  if (first.startsWith("en")) return "en";
  return "pt";
}

export default async function PrimeirosPassos({ searchParams }: { searchParams: Promise<{ l?: string }> }) {
  const { l } = await searchParams;
  const h = await headers();
  return <Guia initial={pickLocale(l, h.get("accept-language"))} />;
}
