import Container from "../_components/Container";

const steps = [
  {
    number: "01",
    title: "Cadastre seus pacotes",
    description:
      "Monte o pacote com datas, preços, poltronas disponíveis e fotos — direto do celular ou computador.",
  },
  {
    number: "02",
    title: "Publique e venda 24h",
    description:
      "O pacote entra no seu site automaticamente. O cliente escolhe a poltrona e paga pelo Mercado Pago, sem precisar de atendente.",
  },
  {
    number: "03",
    title: "Gerencie tudo em um painel",
    description:
      "Reservas, financeiro e embarque por QR Code num lugar só — sem planilha, sem lista impressa.",
  },
];

export function ComoFunciona() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600">
            Sem instalar nada e sem curva de aprendizado longa — sua agência
            vendendo online em poucos passos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100/50"
            >
              <div className="text-5xl font-bold text-blue-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
