"use client";

import { useState } from "react";

// Demonstração ilustrativa da tela de reserva: o visitante clica numa poltrona livre e o resumo muda.
const FILEIRAS = 10;
const OCUPADAS = new Set([1, 2, 3, 5, 6, 8, 9, 10, 12, 15, 16, 17, 19, 20, 23, 24, 25, 27, 28, 31, 32, 35, 36, 39]);
const PRECO = 289;

function lado(numero: number) {
  const pos = (numero - 1) % 4;
  return pos === 0 || pos === 3 ? "Janela" : "Corredor";
}

function Poltrona({
  numero,
  selecionada,
  onSelect,
}: {
  numero: number;
  selecionada: boolean;
  onSelect: (n: number) => void;
}) {
  const ocupada = OCUPADAS.has(numero);
  const base =
    "flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-medium tabular-nums transition-all sm:h-8 sm:w-8 sm:text-[11px]";

  if (ocupada) {
    return (
      <span className={`${base} bg-line text-mute/60`} aria-label={`Poltrona ${numero} ocupada`}>
        {numero}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(numero)}
      aria-pressed={selecionada}
      aria-label={`Poltrona ${numero} livre`}
      className={
        selecionada
          ? `${base} bg-petrol text-white ring-2 ring-petrol ring-offset-2`
          : `${base} border border-line bg-white text-graphite hover:border-ink hover:text-ink`
      }
    >
      {numero}
    </button>
  );
}

export function ReservaDemo() {
  const [poltrona, setPoltrona] = useState(14);
  const livres = FILEIRAS * 4 - OCUPADAS.size;

  return (
    <div className="overflow-hidden rounded-2xl bg-white text-ink shadow-[0_50px_100px_-40px_rgb(0_0_0/0.35),0_0_0_1px_rgb(0_0_0/0.06)]">
      {/* barra do navegador */}
      <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-1 text-[11px] text-mute ring-1 ring-line">
          suaagencia.up.tur.br/reserva
        </span>
      </div>

      <div className="grid gap-6 p-5 sm:grid-cols-[auto_1fr] sm:p-6">
        {/* mapa do ônibus */}
        <div className="mx-auto">
          <div className="rounded-[28px] border border-line px-3 pb-4 pt-3 sm:px-4">
            <div className="mb-3 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.16em] text-mute">
              <span>Frente</span>
              <span>{livres} livres</span>
            </div>
            <div className="space-y-1.5">
              {Array.from({ length: FILEIRAS }, (_, f) => {
                const b = f * 4;
                return (
                  <div key={f} className="flex items-center gap-1.5">
                    <Poltrona numero={b + 1} selecionada={poltrona === b + 1} onSelect={setPoltrona} />
                    <Poltrona numero={b + 2} selecionada={poltrona === b + 2} onSelect={setPoltrona} />
                    <span className="w-4 sm:w-5" />
                    <Poltrona numero={b + 3} selecionada={poltrona === b + 3} onSelect={setPoltrona} />
                    <Poltrona numero={b + 4} selecionada={poltrona === b + 4} onSelect={setPoltrona} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* resumo da reserva */}
        <div className="flex flex-col">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-mute">Excursão</p>
          <h3 className="mt-1 text-lg font-semibold leading-snug">Porto Seguro · 5 dias</h3>
          <p className="text-sm text-mute">12 a 16 de novembro</p>

          <dl className="mt-5 space-y-3 border-y border-line py-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-mute">Poltrona</dt>
              <dd className="font-medium tabular-nums">
                {poltrona} · {lado(poltrona)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-mute">Embarque</dt>
              <dd className="font-medium">Salvador · 06h00</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-mute">Total</dt>
              <dd className="font-semibold tabular-nums">R$ {PRECO},00</dd>
            </div>
          </dl>

          <div className="mt-auto pt-5">
            <span className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-3 text-sm font-semibold text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.5 21.5 12 12 21.5 2.5 12z" opacity=".35" />
                <path d="m12 6.5 5.5 5.5-5.5 5.5L6.5 12z" />
              </svg>
              Pagar com Pix
            </span>
            <p className="mt-3 text-center text-[11px] text-mute">Clique numa poltrona livre para testar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
