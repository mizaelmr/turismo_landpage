import Container from "../_components/Container";

const situacoes = [
  "Organiza reservas em caderno, planilha ou só pelo WhatsApp",
  "Vende pacotes de excursão, viagem em grupo ou turismo rodoviário",
  "Também vende pacotes só de hospedagem, sem transporte incluído",
  "Quer vender fora do horário comercial, sem depender de atendente",
  "Precisa agilizar a conferência de embarque na hora do ônibus sair",
  "Quer receber pagamento online sem montar isso do zero",
];

export function ParaQuemE() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              O UPTUR é pra você que...
            </h2>
          </div>

          <div className="space-y-4">
            {situacoes.map((situacao) => (
              <div
                key={situacao}
                className="flex items-start gap-4 bg-blue-50 rounded-xl p-5"
              >
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-800 text-lg">{situacao}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
