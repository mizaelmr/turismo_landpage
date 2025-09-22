"use client";

import { useEffect, useRef } from "react";

interface Metric {
  label: string;
  value: number;
  color: string;
  isPercent?: boolean;
}

const metrics: Metric[] = [
  { label: "Agências ativas", value: 1200, color: "text-cyan-600" },
  { label: "Reservas realizadas", value: 350000, color: "text-indigo-600" },
  {
    label: "Tempo economizado",
    value: 40,
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Nossos resultados em números
            </h2>
            <p className="text-gray-600 mt-3 text-lg max-w-xl">
              Mais que depoimentos: métricas reais que mostram o impacto da
              automação na sua agência.
            </p>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <a
              href="#demo"
              className="px-5 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl shadow-lg transition"
            >
              Solicitar demo
            </a>
            <a
              href="#cases"
              className="px-5 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition"
            >
              Ver cases completos
            </a>
          </div>
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
      </div>
    </section>
  );
}
