"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { LogoHorizontal } from "@/components/Brand";
import { SiteFooter } from "@/components/SiteFooter";
import { locales, whatsappUrl, type Locale } from "@/_content/i18n";
import { conteudo, VIDEO_INTRO, VIDEO_PASSO } from "./conteudo";

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-moss" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-sage" : "text-moss"}`}>{children}</p>;
}

function mmss(seconds: number) {
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function Guia({ initial }: { initial: Locale }) {
  const [lang, setLang] = useState<Locale>(initial);
  const t = conteudo[lang];
  const base = `/primeiros-passos/${t.arquivo}`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoBoxRef = useRef<HTMLDivElement>(null);

  // <html lang> e ?l= acompanham o idioma escolhido
  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("l", lang);
      window.history.replaceState(null, "", url);
    } catch {
      /* ambiente sem history: segue sem atualizar a URL */
    }
  }, [lang, t.htmlLang]);

  const irParaPasso = useCallback((index: number) => {
    const video = videoRef.current;
    if (!video) return;
    videoBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    video.currentTime = VIDEO_INTRO + index * VIDEO_PASSO;
    void video.play().catch(() => {
      /* o navegador pode exigir um toque no play; o vídeo já está no ponto certo */
    });
  }, []);

  const assistir = useCallback(() => {
    videoBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    void videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <>
      {/* Cabeçalho */}
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <LogoHorizontal tone="dark" />
          <div className="flex items-center gap-2 sm:gap-4">
            <div role="group" aria-label={t.header.language} className="flex items-center gap-1 text-xs font-medium">
              {locales.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={l === lang}
                  className={`rounded px-1.5 py-1 uppercase transition-colors ${l === lang ? "text-ink" : "text-mute hover:text-ink"}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a href={t.loginUrl} className="hidden whitespace-nowrap px-2 text-sm text-graphite transition-colors hover:text-ink sm:inline">
              {t.header.login}
            </a>
            <a
              href={t.loginUrl}
              className="whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-graphite"
            >
              {t.header.cta}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero com o vídeo */}
        <section className="relative isolate overflow-hidden bg-paper text-ink">
          <Image src="/hero/estrada-costeira.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[65%_center]" />
          <div className="absolute inset-0 -z-10 bg-paper/90 lg:bg-gradient-to-r lg:from-paper lg:from-[42%] lg:via-paper/85 lg:via-[58%] lg:to-paper/30" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:pb-32 lg:pt-24">
            <div key={`hero-${lang}`} className="animate-fade-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-graphite shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                {t.hero.badge}
              </p>

              <h1 className="mt-7 text-[38px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[58px]">
                {t.hero.tituloInicio} <span className="text-moss">{t.hero.tituloDestaque}</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-graphite/80">{t.hero.subtitulo}</p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={assistir}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)] transition-colors hover:bg-graphite"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M6 4.5v11a.8.8 0 0 0 1.2.7l9-5.5a.8.8 0 0 0 0-1.4l-9-5.5A.8.8 0 0 0 6 4.5Z" />
                  </svg>
                  {t.hero.ctaVideo}
                </button>
                <a
                  href={`${base}.pdf`}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  {t.hero.ctaPdf}
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mute">
                {t.hero.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative animate-fade-up [animation-delay:150ms]">
              <div ref={videoBoxRef} className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_80px_-30px_rgb(29_43_38/0.45)]">
                <div className="flex items-center gap-3 border-b border-line bg-mist/60 px-4 py-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  </div>
                  <span className="rounded-md border border-line bg-white px-3 py-1 text-[11px] text-graphite">suaagencia.up.tur.br</span>
                </div>
                <video
                  key={lang}
                  ref={videoRef}
                  controls
                  playsInline
                  preload="metadata"
                  poster={`/primeiros-passos/poster-${lang}.jpg`}
                  aria-label={t.hero.videoLabel}
                  className="aspect-video w-full bg-ink"
                >
                  <source src={`${base}.mp4`} type="video/mp4" />
                </video>
              </div>

              <div className="animate-float absolute -top-12 right-6 hidden w-56 rounded-2xl bg-ink p-4 text-white shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)] xl:block">
                <p className="text-2xl font-semibold tracking-tight">{t.hero.cardPassos}</p>
                <p className="mt-1 text-xs text-white/60">{t.hero.cardPassosTexto}</p>
              </div>
              <div className="animate-float absolute -bottom-20 -left-10 hidden w-56 rounded-2xl bg-ink p-4 text-white shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)] [animation-delay:-3s] lg:block">
                <p className="text-xs text-white/50">{t.hero.cardTempo}</p>
                <p className="mt-1 text-sm font-medium">{t.hero.cardTempoTexto}</p>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[12%] rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Os 8 passos */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Eyebrow>{t.passos.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{t.passos.titulo}</h2>
              <p className="mt-5 text-lg leading-relaxed text-mute">{t.passos.texto}</p>
            </div>

            <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.passos.itens.map((p, i) => (
                <li key={`${lang}-${i}`} className="group flex flex-col rounded-3xl border border-line bg-paper p-6 transition-colors hover:border-moss">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold tabular-nums text-white">
                      {i + 1}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
                      {t.passos.passoLabel} {i + 1}/8
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.titulo}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite/80">{p.texto}</p>
                  <p className="mt-5 inline-flex w-fit max-w-full items-center gap-2 rounded-xl border border-line bg-white px-3 py-1.5 text-xs font-medium text-petrol">
                    <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                    <span className="text-mute">{t.passos.ondeLabel}:</span> {p.onde}
                  </p>
                  <button
                    type="button"
                    onClick={() => irParaPasso(i)}
                    className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-moss"
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                      <path d="M6 4.5v11a.8.8 0 0 0 1.2.7l9-5.5a.8.8 0 0 0 0-1.4l-9-5.5A.8.8 0 0 0 6 4.5Z" />
                    </svg>
                    {t.passos.verNoVideo}
                    <span className="tabular-nums text-mute">· {mmss(VIDEO_INTRO + i * VIDEO_PASSO)}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PDF */}
        <section className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-28">
          <div className="bg-grid-dark absolute inset-0 -z-10" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <Eyebrow dark>{t.pdf.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{t.pdf.titulo}</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">{t.pdf.texto}</p>
              <a
                href={`${base}.pdf`}
                download
                className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-mist"
              >
                {t.pdf.botao}
                <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
            </div>

            <div className="flex justify-center lg:justify-end">
              <a
                href={`${base}.pdf`}
                download
                aria-label={t.pdf.botao}
                className="relative block w-64 -rotate-3 rounded-2xl bg-white p-5 text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)] transition-transform hover:rotate-0"
              >
                <div className="rounded-lg bg-ink px-4 py-4">
                  <div className="h-2 w-16 rounded-full bg-white/70" />
                  <div className="mt-3 h-2.5 w-32 rounded-full bg-white" />
                </div>
                {[0, 1, 2].map((n) => (
                  <div key={n} className="mt-3 flex items-center gap-3 rounded-lg border border-line p-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-moss text-[11px] font-semibold text-white">{n + 1}</span>
                    <div className="flex-1 space-y-1.5">
                      <div className="h-1.5 w-3/4 rounded-full bg-ink/80" />
                      <div className="h-1.5 w-full rounded-full bg-line" />
                    </div>
                  </div>
                ))}
                <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-mute">{t.pdf.meta}</p>
              </a>
            </div>
          </div>
        </section>

        {/* Ajuda */}
        <section className="bg-paper py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">{t.ajuda.titulo}</h2>
              <p className="mt-3 text-base leading-relaxed text-mute">{t.ajuda.texto}</p>
            </div>
            <a
              href={whatsappUrl[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-petrol px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ink"
            >
              {t.ajuda.botao}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter locale={lang} />
    </>
  );
}
