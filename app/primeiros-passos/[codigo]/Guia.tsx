"use client";

import { useState } from "react";
import { LogoHorizontal } from "@/components/Brand";
import { LOGIN_URL } from "@/_content/home";
import { whatsappUrl, type Locale } from "@/_content/i18n";

type Texto = {
  titulo: string;
  sub: string;
  video: string;
  baixar: string;
  baixarSub: string;
  entrar: string;
  ajuda: string;
  ajudaBtn: string;
  arquivo: string;
  htmlLang: string;
};

const textos: Record<Locale, Texto> = {
  pt: {
    titulo: "Primeiros passos na up.tur",
    sub: "Veja em 1 minuto e meio como vender sua primeira viagem.",
    video: "Vídeo: passo a passo",
    baixar: "Baixar o PDF",
    baixarSub: "O mesmo guia em 2 páginas, para guardar.",
    entrar: "Entrar no sistema",
    ajuda: "Precisa de ajuda?",
    ajudaBtn: "Falar no WhatsApp",
    arquivo: "primeiros-passos-pt",
    htmlLang: "pt-BR",
  },
  es: {
    titulo: "Primeros pasos en up.tur",
    sub: "Mira en 1 minuto y medio cómo vender tu primer viaje.",
    video: "Video: paso a paso",
    baixar: "Descargar el PDF",
    baixarSub: "La misma guía en 2 páginas, para guardar.",
    entrar: "Entrar al sistema",
    ajuda: "¿Necesitas ayuda?",
    ajudaBtn: "Escribir por WhatsApp",
    arquivo: "primeros-pasos-es",
    htmlLang: "es",
  },
  en: {
    titulo: "Getting started with up.tur",
    sub: "Watch in a minute and a half how to sell your first trip.",
    video: "Video: step by step",
    baixar: "Download the PDF",
    baixarSub: "The same guide in 2 pages, to keep.",
    entrar: "Log in",
    ajuda: "Need help?",
    ajudaBtn: "Message us on WhatsApp",
    arquivo: "getting-started-en",
    htmlLang: "en",
  },
};

const rotulos: Record<Locale, string> = { pt: "PT", es: "ES", en: "EN" };

export function Guia({ initial }: { initial: Locale }) {
  const [lang, setLang] = useState<Locale>(initial);
  const t = textos[lang];
  const base = `/primeiros-passos/${t.arquivo}`;

  return (
    <main lang={t.htmlLang} className="min-h-screen bg-paper text-ink">
      <header className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6">
        <LogoHorizontal tone="dark" />
        <div role="group" aria-label="Idioma / Language / Idioma" className="flex gap-1 rounded-full border border-line bg-white p-1">
          {(Object.keys(rotulos) as Locale[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                lang === l ? "bg-ink text-white" : "text-mute hover:text-ink"
              }`}
            >
              {rotulos[l]}
            </button>
          ))}
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{t.titulo}</h1>
        <p className="mt-3 text-lg text-mute">{t.sub}</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-ink shadow-sm">
          <video
            key={lang}
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full"
            aria-label={t.video}
          >
            <source src={`${base}.mp4`} type="video/mp4" />
          </video>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href={`${base}.pdf`}
            download
            className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-moss"
          >
            <p className="text-base font-semibold">{t.baixar}</p>
            <p className="mt-1 text-sm text-mute">{t.baixarSub}</p>
          </a>
          <a
            href={LOGIN_URL}
            className="rounded-2xl bg-ink p-6 text-white transition-colors hover:bg-graphite"
          >
            <p className="text-base font-semibold">{t.entrar}</p>
            <p className="mt-1 text-sm text-sage">app.up.tur.br</p>
          </a>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl bg-mist p-6 sm:flex-row sm:items-center">
          <p className="text-base font-semibold">{t.ajuda}</p>
          <a
            href={whatsappUrl[lang]}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-petrol px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            {t.ajudaBtn}
          </a>
        </div>
      </section>
    </main>
  );
}
