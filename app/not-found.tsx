import Link from "next/link";
import { Monograma } from "@/components/Brand";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="bg-grid-light flex min-h-[70vh] flex-col items-center justify-center bg-paper px-4 py-24 text-center text-ink">
        <Monograma tone="dark" className="h-auto w-16 opacity-80" />
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-moss">Erro 404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Essa página não existe.</h1>
        <p className="mt-5 max-w-md text-lg text-mute">O link pode estar errado ou a página mudou de endereço.</p>
        <Link href="/" className="mt-10 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-graphite">
          Voltar para o início
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
