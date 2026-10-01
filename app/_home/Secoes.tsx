import Image from "next/image";
import Link from "next/link";
import { Monograma } from "@/components/Brand";
import { paginas } from "@/_content/paginas";
import { faq, planos, REGISTER_URL, WHATSAPP_URL } from "@/_content/home";

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-sage" : "text-moss"}`}>{children}</p>
  );
}

function Check({ className = "text-ink" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`mt-0.5 h-4 w-4 flex-shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

export function Pagamentos() {
  return (
    <section aria-label="Pagamentos integrados" className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <p className="text-sm text-mute">Seus clientes pagam online, com confirmação automática:</p>
        <div className="flex items-center gap-10 opacity-70 grayscale">
          <Image src="/payment-logos/pix.svg" alt="Pix" width={80} height={28} className="h-6 w-auto" />
          <Image src="/payment-logos/mercadopago.svg" alt="Mercado Pago" width={120} height={28} className="h-7 w-auto" />
          <span className="text-sm font-semibold tracking-tight text-graphite">Cartão de crédito</span>
        </div>
      </div>
    </section>
  );
}

export function Problema() {
  const linhas = [
    ["Poltrona anotada no caderno ou na planilha", "Mapa do ônibus atualizado na hora da venda"],
    ["Comprovante de Pix perdido no WhatsApp", "Pagamento online com baixa automática"],
    ["Cliente esperando resposta para reservar", "Link de reserva funcionando 24 horas"],
    ["Lista impressa riscada no embarque", "Check-in por QR Code no celular"],
    ["Sem saber quanto ainda falta receber", "Financeiro de cada pacote em tempo real"],
  ];
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Eyebrow>Por que mudar</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Excursão organizada no improviso custa venda.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-mute">
            Cada mensagem sem resposta é um cliente que esfria. Cada poltrona controlada à mão é um risco de vender duas vezes.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-line bg-white">
          <div className="grid grid-cols-2 border-b border-line text-xs font-semibold uppercase tracking-[0.16em]">
            <p className="px-5 py-4 text-mute sm:px-7">Hoje</p>
            <p className="bg-petrol px-5 py-4 text-white sm:px-7">Com UPTUR</p>
          </div>
          {linhas.map(([antes, depois]) => (
            <div key={antes} className="grid grid-cols-2 border-b border-line text-sm last:border-b-0">
              <p className="px-5 py-5 text-mute line-through decoration-line sm:px-7">{antes}</p>
              <p className="flex gap-2 bg-petrol px-5 py-5 font-medium text-white sm:px-7">
                <Check className="text-sage" />
                {depois}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  const passos = [
    ["Cadastre o pacote", "Destino, datas, preço, fotos, cidades de embarque e o ônibus. Do celular ou do computador, em minutos."],
    ["Divulgue o link", "O pacote entra no site da sua agência. Mande o link nos grupos, no status e no Instagram."],
    ["Receba e embarque", "O cliente escolhe a poltrona e paga sozinho. No dia, você confere todo mundo pelo QR Code."],
  ];
  return (
    <section id="como-funciona" className="scroll-mt-16 bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Do cadastro ao embarque em três passos.
          </h2>
        </div>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {passos.map(([titulo, texto], i) => (
            <li key={titulo} className="bg-white p-8 lg:p-10">
              <span className="text-5xl font-semibold tabular-nums tracking-tight text-sage">0{i + 1}</span>
              <h3 className="mt-8 text-xl font-semibold">{titulo}</h3>
              <p className="mt-3 leading-relaxed text-mute">{texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ParaQuem() {
  const perfis = [
    ["Excursionistas", "Bate-volta, praia, romaria, show, compras e parques."],
    ["Agências de turismo rodoviário", "Viagens em grupo com vários ônibus e cidades de embarque."],
    ["Pacotes de hospedagem", "Venda só a hospedagem, sem transporte incluído."],
    ["Quem está começando", "Comece com CPF e organize tudo desde a primeira viagem."],
  ];
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Eyebrow>Para quem é</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Feito para quem vende experiência, não para quem gosta de planilha.
          </h2>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {perfis.map(([titulo, texto]) => (
            <li key={titulo} className="flex items-baseline justify-between gap-6 py-6">
              <h3 className="text-lg font-semibold tracking-tight">{titulo}</h3>
              <p className="max-w-xs text-right text-sm text-mute">{texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Planos() {
  return (
    <section id="planos" className="scroll-mt-16 bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Planos</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Preço simples. Sem fidelidade.</h2>
          <p className="mt-5 text-lg text-mute">Comece com 1 mês grátis e escolha o plano quando estiver pronto.</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-3">
          {planos.map((p) => (
            <div
              key={p.nome}
              className={`relative flex flex-col rounded-3xl p-8 ${
                p.destaque ? "bg-petrol text-white shadow-[0_40px_80px_-30px_rgb(46_82_88/0.7)] lg:-my-4 lg:py-12" : "border border-line bg-white"
              }`}
            >
              {p.destaque && (
                <span className="absolute right-8 top-8 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-ink">
                  Mais escolhido
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.nome}</h3>
              <p className={`mt-2 text-sm ${p.destaque ? "text-white/55" : "text-mute"}`}>{p.descricao}</p>
              <p className="mt-8 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tabular-nums tracking-tight">{p.preco}</span>
                <span className={p.destaque ? "text-white/55" : "text-mute"}>{p.periodo}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {p.itens.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className={p.destaque ? "text-sage" : "text-moss"} />
                    <span className={p.destaque ? "text-white/85" : "text-graphite"}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={REGISTER_URL}
                className={`mt-10 rounded-full py-3.5 text-center text-sm font-semibold transition-colors ${
                  p.destaque ? "bg-white text-ink hover:bg-line" : "bg-ink text-white hover:bg-graphite"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Guias() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Conteúdo gratuito</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Guias para excursionistas.</h2>
          </div>
          <Link href="/planilha-de-excursao-gratis" className="text-sm font-semibold underline decoration-line underline-offset-4 hover:decoration-ink">
            Baixar a planilha de excursão grátis →
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {paginas.map((p, i) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-line p-6 transition-colors hover:border-ink"
            >
              <span className="text-xs tabular-nums text-mute">0{i + 1}</span>
              <span className="mt-10 font-semibold leading-snug tracking-tight">{p.menu}</span>
              <span className="mt-4 text-sm text-mute transition-colors group-hover:text-ink">Ler guia →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Duvidas() {
  return (
    <section id="duvidas" className="scroll-mt-16 bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <Eyebrow>Dúvidas</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Perguntas frequentes.</h2>
          <p className="mt-5 text-lg text-mute">Não achou sua resposta? Fale com a gente no WhatsApp.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full border border-ink px-6 py-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-white"
          >
            Chamar no WhatsApp
          </a>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faq.map((f) => (
            <details key={f.pergunta} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-tight">
                {f.pergunta}
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-line text-xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-mute">{f.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 lg:py-36">
        <Monograma tone="light" className="mx-auto h-auto w-24" />
        <h2 className="mt-10 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">Mais destinos para o seu negócio.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/55">
          Cadastre sua próxima excursão hoje e mande o link de reserva para seus clientes ainda esta semana.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={REGISTER_URL} className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-line">
            Criar conta grátis
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Falar no WhatsApp
          </a>
        </div>
        <p className="mt-6 text-sm text-white/40">1 mês grátis · sem cartão de crédito · sem fidelidade</p>
      </div>
    </section>
  );
}

export function WhatsAppFlutuante() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-[0_10px_30px_-5px_rgb(0_0_0/0.5)] ring-1 ring-white/15 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 16 16" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M13.601 2.326A7.926 7.926 0 0 0 8.004 0C3.583 0 .07 3.512.07 7.934c0 1.398.368 2.769 1.067 3.975L0 16l4.197-1.102a7.9 7.9 0 0 0 3.807.97h.003c4.42 0 7.933-3.512 7.933-7.934a7.892 7.892 0 0 0-2.339-5.608zM8.004 14.5a6.57 6.57 0 0 1-3.356-.92l-.24-.143-2.494.654.666-2.434-.157-.25a6.566 6.566 0 0 1-1.004-3.483c0-3.62 2.947-6.567 6.585-6.567a6.54 6.54 0 0 1 4.65 1.925 6.548 6.548 0 0 1 1.934 4.646c0 3.62-2.947 6.572-6.584 6.572zm3.635-4.934c-.198-.099-1.17-.578-1.35-.646-.181-.066-.313-.099-.445.1s-.511.646-.627.777c-.114.131-.23.148-.428.05-.198-.1-.837-.308-1.595-.986-.59-.527-.99-1.178-1.107-1.376-.115-.197-.012-.304.086-.402.09-.089.198-.23.297-.346.099-.115.132-.197.198-.33.065-.131.033-.247-.017-.345-.05-.099-.445-1.072-.61-1.468-.16-.385-.323-.333-.445-.339-.115-.006-.247-.007-.379-.007s-.346.05-.527.247c-.181.198-.693.678-.693 1.654s.71 1.918.809 2.048c.099.131 1.394 2.133 3.379 2.992.472.205.84.327 1.127.419.474.151.905.13 1.246.079.38-.057 1.17-.478 1.338-.94.165-.462.165-.858.116-.94-.05-.083-.181-.131-.38-.23z" />
      </svg>
    </a>
  );
}
