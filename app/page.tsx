import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { faq } from "@/_content/home";
import { Hero } from "./_home/Hero";
import { Recursos } from "./_home/Recursos";
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
} from "./_home/Secoes";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.pergunta,
    acceptedAnswer: { "@type": "Answer", text: f.resposta },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />
      <main>
        <Hero />
        <Pagamentos />
        <Problema />
        <Recursos />
        <ComoFunciona />
        <ParaQuem />
        <Planos />
        <Guias />
        <Duvidas />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsAppFlutuante />
    </>
  );
}
