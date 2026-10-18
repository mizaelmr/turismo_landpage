import { LogoHorizontal } from "@/components/Brand";
import { LOGIN_URL } from "@/_content/home";
import { dict, homePath, locales, registerUrl, type Locale } from "@/_content/i18n";

export function SiteHeader({ locale = "pt" }: { locale?: Locale }) {
  const t = dict[locale].header;
  const links = t.links;
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
          <nav aria-label={t.languageLabel} className="flex items-center gap-1 text-xs font-medium">
            {locales.map((l) => (
              <a
                key={l}
                href={homePath[l]}
                hrefLang={l === "pt" ? "pt-BR" : l}
                aria-current={l === locale ? "true" : undefined}
                className={`rounded px-1.5 py-1 uppercase transition-colors ${l === locale ? "text-ink" : "text-mute hover:text-ink"}`}
              >
                {l}
              </a>
            ))}
          </nav>
          <a href={LOGIN_URL} className="hidden whitespace-nowrap px-2 text-sm text-graphite transition-colors hover:text-ink sm:inline">
            {t.login}
          </a>
          <a
            href={registerUrl[locale]}
            className="whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-graphite"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
