import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { dict, htmlLang, type Locale } from "@/_content/i18n";
import { Hero } from "./Hero";
import { Recursos } from "./Recursos";
import {
  ComoFunciona,
  CtaFinal,
  Duvidas,
  Guias,
  Pagamentos,
  ParaQuem,
  Planos,
  Problema,
  WhatsAppFlutuante,
} from "./Secoes";

// Home da landing em qualquer idioma ("/" pt, "/es", "/en").
export function HomePage({ locale }: { locale: Locale }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: htmlLang[locale],
    mainEntity: dict[locale].faq.items.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  return (
    <>
      {locale !== "pt" && (
        // O layout raiz é em pt-BR; nas versões em outros idiomas o <html lang> acompanha a página
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(htmlLang[locale])}` }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader locale={locale} />
      <main>
        <Hero locale={locale} />
        <Pagamentos locale={locale} />
        <Problema locale={locale} />
        <Recursos locale={locale} />
        <ComoFunciona locale={locale} />
        <ParaQuem locale={locale} />
        <Planos locale={locale} />
        <Guias locale={locale} />
        <Duvidas locale={locale} />
        <CtaFinal locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <WhatsAppFlutuante locale={locale} />
    </>
  );
}
