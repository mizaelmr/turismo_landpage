"use client";

import { Lock, ShieldCheck, Cloud, Database } from "@phosphor-icons/react";

export function Security() {
  const items = [
    {
      icon: <Lock className="w-10 h-10 text-green-600" />,
      title: "SSL Seguro",
      description: "Todas as conexões criptografadas.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "LGPD Compliance",
      description: "Conformidade total com a lei de proteção de dados.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-sky-600" />,
      title: "99,9% Uptime",
      description: "Alta disponibilidade garantida.",
    },
    {
      icon: <Database className="w-10 h-10 text-gray-700" />,
      title: "Backups Automáticos",
      description: "Dados protegidos com redundância.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nosso Compromisso com a Sua Segurança
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Trabalhamos com os mais altos padrões de segurança e transparência
          para garantir que sua agência de turismo esteja protegida.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
