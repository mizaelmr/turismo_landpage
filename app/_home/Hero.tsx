import Image from "next/image";
import { REGISTER_URL, WHATSAPP_URL } from "@/_content/home";
import { ReservaDemo } from "./ReservaDemo";

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-moss" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-paper text-ink">
      {/* Foto: Unsplash (licença gratuita) — estrada costeira entre morros verdes */}
      <Image
        src="/hero/estrada-costeira.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[65%_center]"
      />
      {/* véu claro do lado do texto, para leitura; no celular cobre tudo */}
      <div className="absolute inset-0 -z-10 bg-paper/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-paper lg:from-[38%] lg:via-paper/80 lg:via-[52%] lg:to-paper/0" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-paper" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-graphite shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            Para excursionistas e agências de turismo rodoviário
          </p>

          <h1 className="mt-7 text-[40px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[64px]">
            Sistema para excursões:{" "}
            <span className="text-moss">venda 24h com mapa de poltronas e embarque por QR Code</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-graphite/80">
            Seu destino, nosso comando. O cliente escolhe a poltrona, paga por Pix e recebe o cartão de embarque.
            Você acompanha tudo num painel só, sem planilha e sem caderno.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={REGISTER_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(0_0_0/0.5)] transition-colors hover:bg-graphite"
            >
              Testar grátis por 1 mês
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              Falar com um especialista
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mute">
            <li className="flex items-center gap-2"><Check />Sem cartão de crédito</li>
            <li className="flex items-center gap-2"><Check />Sem fidelidade</li>
            <li className="flex items-center gap-2"><Check />Começa com CPF</li>
          </ul>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <ReservaDemo />

          {/* pagamento aprovado */}
          <div className="animate-float absolute -top-14 right-8 hidden w-60 rounded-2xl bg-ink p-4 text-white shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)] xl:block">
            <div className="flex items-center justify-between text-[11px] text-white/50">
              <span>Nova reserva</span>
              <span>agora</span>
            </div>
            <p className="mt-2 text-sm font-medium">Pagamento aprovado via Pix</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">R$ 578,00</p>
            <p className="mt-1 text-[11px] text-white/50">2 passageiros · poltronas 21 e 22</p>
          </div>

          {/* embarque em tempo real */}
          <div className="animate-float absolute -bottom-32 -left-8 hidden w-64 rounded-2xl bg-ink p-4 text-white shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)] [animation-delay:-3s] lg:block">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Embarque · Salvador</p>
              <span className="text-[11px] tabular-nums text-white/50">38/42</span>
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[90%] rounded-full bg-white" />
            </div>
            <ul className="mt-3 space-y-2 text-xs">
              <li className="flex justify-between text-white/80"><span>✓ Maria S. · 14</span><span className="tabular-nums text-white/40">06:42</span></li>
              <li className="flex justify-between text-white/80"><span>✓ João P. · 15</span><span className="tabular-nums text-white/40">06:44</span></li>
              <li className="flex justify-between text-white/40"><span>○ Ana C. · 30</span><span>aguardando</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
