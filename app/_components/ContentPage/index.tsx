import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { REGISTER_URL } from "@/_content/home";
import { getPagina, paginas, type PaginaConteudo } from "@/_content/paginas";

const siteUrl = "https://www.up.tur.br";

export function contentMetadata(slug: string): Metadata {
  const pagina = getPagina(slug);
  const path = `/${pagina.slug}`;

  return {
    title: { absolute: `${pagina.titleTag} | UPTUR` },
    description: pagina.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: pagina.titleTag,
      description: pagina.metaDescription,
    },
  };
}

function jsonLd(pagina: PaginaConteudo) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "UPTUR", item: siteUrl },
          { "@type": "ListItem", position: 2, name: pagina.menu, item: `${siteUrl}/${pagina.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: pagina.faq.map((f) => ({
          "@type": "Question",
          name: f.pergunta,
          acceptedAnswer: { "@type": "Answer", text: f.resposta },
        })),
      },
    ],
  };
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 flex-shrink-0 text-moss" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

export function ContentPage({ slug }: { slug: string }) {
  const pagina = getPagina(slug);
  const relacionadas = pagina.relacionadas
    .map((s) => paginas.find((p) => p.slug === s))
    .filter((p): p is PaginaConteudo => Boolean(p));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(pagina)) }}
      />
      <SiteHeader />
      <main className="bg-white text-ink">
        <section className="relative isolate overflow-hidden border-b border-line bg-paper">
          <div className="bg-grid-light absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]" />
          <div className="mx-auto max-w-4xl px-4 pb-20 pt-14 sm:px-6 lg:pb-28 lg:pt-20">
            <nav aria-label="Você está em" className="text-sm text-mute">
              <Link href="/" className="transition-colors hover:text-ink">UPTUR</Link>
              <span className="mx-2">/</span>
              <span className="text-graphite">{pagina.menu}</span>
            </nav>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-moss">{pagina.chamada}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[56px]">
              {pagina.h1}
            </h1>
            {pagina.intro.map((p) => (
              <p key={p} className="mt-6 max-w-3xl text-lg leading-relaxed text-graphite/80">
                {p}
              </p>
            ))}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              {pagina.download ? (
                <>
                  <a
                    href={pagina.download.url}
                    download
                    className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-graphite"
                  >
                    ↓ {pagina.download.rotulo}
                  </a>
                  <span className="text-sm text-mute">{pagina.download.detalhe}</span>
                </>
              ) : (
                <a
                  href={REGISTER_URL}
                  className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-graphite"
                >
                  Testar grátis por 1 mês →
                </a>
              )}
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-3xl space-y-16 px-4 py-20 sm:px-6 lg:py-24">
          {pagina.secoes.map((secao) => (
            <section key={secao.titulo}>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{secao.titulo}</h2>
              {secao.paragrafos?.map((p) => (
                <p key={p} className="mt-5 text-[17px] leading-[1.75] text-graphite">
                  {p}
                </p>
              ))}
              {secao.lista && (
                <ul className="mt-6 space-y-3.5">
                  {secao.lista.map((item) => (
                    <li key={item} className="flex gap-3 text-[17px] leading-relaxed text-graphite">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {secao.passos && (
                <ol className="mt-8 space-y-6 border-l border-line pl-8">
                  {secao.passos.map((passo, i) => (
                    <li key={passo.titulo} className="relative">
                      <span className="absolute -left-[45px] flex h-7 w-7 items-center justify-center rounded-full bg-moss text-xs font-semibold tabular-nums text-white">
                        {i + 1}
                      </span>
                      <h3 className="font-semibold tracking-tight">{passo.titulo}</h3>
                      <p className="mt-1.5 leading-relaxed text-mute">{passo.texto}</p>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">Perguntas frequentes</h2>
            <div className="mt-6 divide-y divide-line border-y border-line">
              {pagina.faq.map((f) => (
                <details key={f.pergunta} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium">
                    {f.pergunta}
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-line leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-mute">{f.resposta}</p>
                </details>
              ))}
            </div>
          </section>
        </article>

        <section className="bg-ink text-white">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{pagina.cta.titulo}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/55">{pagina.cta.texto}</p>
            <a
              href={REGISTER_URL}
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-line"
            >
              Criar minha conta grátis
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">Leia também</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relacionadas.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="group rounded-2xl border border-line p-6 transition-colors hover:border-ink"
              >
                <span className="font-semibold tracking-tight">{r.menu}</span>
                <span className="mt-2 block text-sm leading-relaxed text-mute">{r.metaDescription.slice(0, 96)}…</span>
                <span className="mt-4 block text-sm text-mute transition-colors group-hover:text-ink">Ler guia →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
