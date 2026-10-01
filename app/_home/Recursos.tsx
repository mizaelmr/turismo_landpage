import Image from "next/image";

function Tile({
  titulo,
  texto,
  children,
  className = "",
}: {
  titulo: string;
  texto: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={`group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-[0_20px_60px_-30px_rgb(0_0_0/0.35)] ${className}`}>
      <div className="relative flex min-h-[200px] flex-1 items-center justify-center overflow-hidden bg-paper p-6">{children}</div>
      <div className="p-6 sm:p-7">
        <h3 className="text-lg font-semibold tracking-tight">{titulo}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mute">{texto}</p>
      </div>
    </article>
  );
}

function MiniMapa() {
  const ocupadas = new Set([0, 1, 4, 6, 7, 9, 12, 13, 15, 18, 19, 22]);
  return (
    <div className="grid grid-cols-[repeat(2,auto)_16px_repeat(2,auto)] gap-1.5 rounded-[22px] border border-line bg-white p-4 shadow-sm">
      {Array.from({ length: 24 }, (_, i) => {
        const n = i + 1;
        const cls = n === 11 ? "bg-petrol text-white" : ocupadas.has(i) ? "bg-line text-mute/60" : "border border-line text-graphite";
        return (
          <span key={i} className="contents">
            {i % 4 === 2 && <span />}
            <span className={`flex h-7 w-7 items-center justify-center rounded-md text-[10px] tabular-nums ${cls}`}>{n}</span>
          </span>
        );
      })}
    </div>
  );
}

function QrFake() {
  // padrão fixo só para ilustrar um QR Code
  const cells = "1111111010110111111110000010111010000011011101011010101110110111010011010111011011101001101011101100000100101010000011111111010101011111110000000011001000000000".split("");
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-line">
      <div className="grid grid-cols-[repeat(13,8px)] gap-0">
        {cells.slice(0, 169).map((c, i) => (
          <span key={i} className={`h-2 w-2 ${c === "1" ? "bg-ink" : "bg-white"}`} />
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] font-medium">Maria S. · Poltrona 14</p>
      <p className="text-center text-[10px] text-mute">✓ embarcou às 06:42</p>
    </div>
  );
}

export function Recursos() {
  return (
    <section id="recursos" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">Recursos</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Tudo o que uma excursão precisa, do anúncio ao embarque.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mute">
            Feito para a rotina de quem organiza viagem de ônibus, van ou micro-ônibus. Sem módulos extras, sem instalação.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Tile
            className="lg:col-span-2"
            titulo="Site da agência vendendo 24 horas"
            texto="Cada pacote que você cadastra aparece no site da sua agência, com fotos, datas, preço e botão de reserva. É só mandar o link no WhatsApp e no Instagram."
          >
            <div className="w-full max-w-xl overflow-hidden rounded-xl shadow-[0_20px_50px_-20px_rgb(0_0_0/0.4)] ring-1 ring-line transition-transform duration-500 group-hover:-translate-y-1">
              <div className="flex items-center gap-1.5 bg-white px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
              </div>
              <Image
                src="/screenshots/site-publicado-pacotes.png"
                alt="Site de uma agência com pacotes de excursão publicados pelo UPTUR"
                width={1280}
                height={515}
                className="h-auto w-full"
              />
            </div>
          </Tile>

          <Tile
            titulo="Mapa de poltronas"
            texto="Monte o mapa de cada ônibus no editor visual. O cliente escolhe o assento na reserva e nunca há poltrona vendida duas vezes."
          >
            <MiniMapa />
          </Tile>

          <Tile
            titulo="Pix e cartão com baixa automática"
            texto="Integração com o Mercado Pago. O pagamento confirma a reserva sozinho e a poltrona de quem não pagou no prazo volta para a venda."
          >
            <div className="w-full max-w-[260px] space-y-2">
              {[
                ["Carla M.", "Pix", "R$ 289,00", "Pago"],
                ["Roberto A.", "Cartão", "R$ 578,00", "Pago"],
                ["Fernanda L.", "Pix", "R$ 289,00", "Aguardando"],
              ].map(([nome, meio, valor, status]) => (
                <div key={nome} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-xs shadow-sm ring-1 ring-line">
                  <div>
                    <p className="font-medium">{nome}</p>
                    <p className="text-mute">{meio}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold tabular-nums">{valor}</p>
                    <p className={status === "Pago" ? "text-moss" : "text-mute"}>{status === "Pago" ? "● Pago" : "○ Aguardando"}</p>
                  </div>
                </div>
              ))}
            </div>
          </Tile>

          <Tile
            titulo="Embarque por QR Code"
            texto="Cada passageiro recebe o próprio cartão de embarque. No dia, você lê pelo celular e vê em tempo real quem embarcou e quem falta."
          >
            <QrFake />
          </Tile>

          <Tile
            titulo="WhatsApp e e-mail automáticos"
            texto="Confirmação de reserva, pagamento e lembrete de viagem chegam sozinhos no WhatsApp e no e-mail do cliente. No Pro+, saem do número da sua agência."
          >
            <div className="w-full max-w-[270px] space-y-2 text-xs">
              <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 leading-relaxed text-white">
                Olá, Carla! Sua reserva para Porto Seguro está confirmada. Poltrona 14 ✓
              </p>
              <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 leading-relaxed text-white">
                Lembrete: embarque amanhã às 06h00 em Salvador.
              </p>
              <p className="w-fit rounded-2xl rounded-bl-md bg-white px-4 py-2.5 shadow-sm ring-1 ring-line">Obrigada! 🙌</p>
            </div>
          </Tile>

          <Tile
            titulo="Financeiro e relatórios"
            texto="Veja quanto entrou, quanto falta receber e a ocupação de cada pacote. Relatórios de pacotes e hospedagem em PDF."
          >
            <div className="w-full max-w-[260px] rounded-2xl bg-white p-5 shadow-sm ring-1 ring-line">
              <p className="text-[11px] text-mute">Recebido no mês</p>
              <p className="text-2xl font-semibold tabular-nums tracking-tight">R$ 24.860</p>
              <div className="mt-4 flex h-20 items-end gap-2">
                {[38, 52, 45, 70, 62, 88, 76].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-md ${i === 5 ? "bg-moss" : "bg-line"}`} />
                ))}
              </div>
            </div>
          </Tile>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2.5">
          {[
            "Várias cidades de embarque",
            "Lista de espera",
            "Pacotes só de hospedagem",
            "Quartos e acomodações",
            "Ônibus, micro-ônibus e van",
            "Cancelamento automático de reserva não paga",
            "Lembrete de viagem",
            "Equipe com permissões",
            "Funciona no celular",
          ].map((t) => (
            <li key={t} className="rounded-full border border-line px-4 py-2 text-sm text-graphite">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
