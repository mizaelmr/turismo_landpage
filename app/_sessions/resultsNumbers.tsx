"use client";

import { useEffect, useRef } from "react";
import Container from "../_components/Container";

interface Metric {
  label: string;
  value: number;
  color: string;
  isPercent?: boolean;
}

const metrics: Metric[] = [
  { label: "Agências ativas", value: 250, color: "text-cyan-600" },
  { label: "Reservas realizadas", value: 50000, color: "text-indigo-600" },
  {
    label: "Tempo economizado",
    value: 72,
    color: "text-emerald-600",
    isPercent: true,
  },
  {
    label: "Satisfação média",
    value: 95,
    color: "text-pink-600",
    isPercent: true,
  },
];

export function ResultsNumbers() {
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLDivElement;
            const target = +counter.getAttribute("data-target")!;
            let count = 0;
            const increment = target / 100;

            const updateCount = () => {
              if (count < target) {
                count = Math.ceil(count + increment);
                if (target <= 100) {
                  counter.innerText = count + "%";
                } else {
                  counter.innerText = "+" + count.toLocaleString("pt-BR");
                }
                setTimeout(updateCount, 20);
              } else {
                if (target <= 100) {
                  counter.innerText = target + "%";
                } else {
                  counter.innerText = "+" + target.toLocaleString("pt-BR");
                }
              }
            };

            updateCount();
            observer.unobserve(counter); // Para não repetir a animação
          }
        });
      },
      { threshold: 0.5 } // 50% do elemento visível para disparar
    );

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <Container>
        <div className="flex flex-col justify-center items-center md:items-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#143678]">
              Nossos resultados em números
            </h2>
            <p className="text-xl text-gray-600 mt-3 text-center max-w-xl">
              Mais que depoimentos: métricas reais que mostram o impacto da
              automação na sua agência de viagem.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-${
                metric.color.split("-")[1]
              }-200 transition`}
            >
              <div
                className={`text-4xl font-bold ${metric.color} metric`}
                data-target={metric.value}
                ref={(el) => {
                  if (el) countersRef.current[index] = el;
                }}
              >
                0
              </div>
              <div className="text-gray-600 mt-2">{metric.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
