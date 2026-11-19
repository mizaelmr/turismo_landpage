import type { Metadata } from "next";
import { headers } from "next/headers";
import { Guia } from "./Guia";
import type { Locale } from "@/_content/i18n";

// Página de boas-vindas enviada por WhatsApp/e-mail depois do cadastro da agência.
// O [codigo] só serve de rastreio no link (ex.: código do team); não é lido aqui.
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

export default async function PrimeirosPassos({
  searchParams,
}: {
  params: Promise<{ codigo: string }>;
  searchParams: Promise<{ l?: string }>;
}) {
  const { l } = await searchParams;
  const h = await headers();
  return <Guia initial={pickLocale(l, h.get("accept-language"))} />;
}
