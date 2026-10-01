import { LogoHorizontal } from "@/components/Brand";
import { LOGIN_URL, REGISTER_URL } from "@/_content/home";

const links = [
  { href: "/#recursos", label: "Recursos" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#planos", label: "Planos" },
  { href: "/#duvidas", label: "Dúvidas" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <LogoHorizontal tone="dark" />

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-mute transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a href={LOGIN_URL} className="whitespace-nowrap px-2 text-sm text-graphite transition-colors hover:text-ink">
            Entrar
          </a>
          <a
            href={REGISTER_URL}
            className="whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-graphite"
          >
            Testar grátis
          </a>
        </div>
      </div>
    </header>
  );
}
