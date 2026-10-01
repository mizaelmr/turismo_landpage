import Link from "next/link";
import { Assinatura } from "@/components/Brand";
import { paginas } from "@/_content/paginas";
import { INSTAGRAM_URL, LOGIN_URL, REGISTER_URL, WHATSAPP_URL } from "@/_content/home";

const produto = [
  { href: "/#recursos", label: "Recursos" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#planos", label: "Planos e preços" },
  { href: REGISTER_URL, label: "Criar conta grátis" },
  { href: LOGIN_URL, label: "Entrar" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Assinatura tone="light" className="h-auto w-32" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              Tecnologia para agências de turismo que evoluem. Mais destinos para o seu negócio.
            </p>
          </div>

          <nav aria-label="Produto" className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Produto</h3>
            <ul className="mt-5 space-y-3">
              {produto.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Conteúdo" className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Para excursionistas</h3>
            <ul className="mt-5 space-y-3">
              {paginas.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="text-sm text-white/70 transition-colors hover:text-white">
                    {p.menu}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Fale com a gente</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white">
                  WhatsApp (87) 98856-7300
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white">
                  Instagram @uptur.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} UPTUR · up.tur.br · CNPJ 22.909.017/0001-07</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">Política de Privacidade</Link>
            <Link href="/terms-service" className="transition-colors hover:text-white">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
