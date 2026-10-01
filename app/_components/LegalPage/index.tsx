import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export type SecaoLegal = {
  titulo: string;
  paragrafos?: React.ReactNode[];
  itens?: { rotulo: string; texto: string }[];
  destaque?: string;
};

const CONTATO = "contato@uptur.com";

export function LegalPage({
  titulo,
  intro,
  secoes,
  outra,
}: {
  titulo: string;
  intro: React.ReactNode;
  secoes: SecaoLegal[];
  outra: { href: string; label: string };
}) {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-ink">
        <section className="border-b border-line bg-paper">
          <div className="mx-auto max-w-3xl px-4 pb-16 pt-14 sm:px-6 lg:pb-20 lg:pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">Institucional</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{titulo}</h1>
            <p className="mt-6 text-lg leading-relaxed text-graphite/80">{intro}</p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <ol className="space-y-12">
            {secoes.map((s, i) => (
              <li key={s.titulo}>
                <h2 className="flex gap-4 text-xl font-semibold tracking-tight sm:text-2xl">
                  <span className="tabular-nums text-mute">{String(i + 1).padStart(2, "0")}</span>
                  {s.titulo}
                </h2>
                <div className="mt-5 space-y-4 pl-0 sm:pl-12">
                  {s.destaque && (
                    <p className="rounded-2xl border border-line bg-paper px-5 py-4 font-medium">{s.destaque}</p>
                  )}
                  {s.itens && (
                    <ul className="space-y-3">
                      {s.itens.map((item) => (
                        <li key={item.rotulo} className="leading-relaxed text-graphite">
                          <strong className="font-semibold text-ink">{item.rotulo}:</strong> {item.texto}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.paragrafos?.map((p, j) => (
                    <p key={j} className="leading-relaxed text-graphite">
                      {p}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex flex-col gap-4 rounded-3xl border border-line p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Ficou alguma dúvida?</p>
              <p className="mt-1 text-sm text-mute">Escreva para a nossa equipe.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${CONTATO}`} className="rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-graphite">
                {CONTATO}
              </a>
              <Link href={outra.href} className="rounded-full border border-line px-6 py-3 text-center text-sm font-semibold transition-colors hover:border-ink">
                {outra.label}
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
