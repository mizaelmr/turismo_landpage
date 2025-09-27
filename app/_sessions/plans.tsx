import Container from "../_components/Container";

export function Plans() {
  // Função para remover acentos e converter para minúsculo
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const plans = [
    {
      id: 1,
      name: "Básico",
      price: "R$ 99/mês",
      benefits: [
        "Sem limite de reservas",
        "Controle de pacotes",
        "Relatórios financeiros",
        "Relatórios gerenciais",
        "Suporte por e-mail",
        "Página de pacotes",
        "Embarque por QRcode",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Completo",
      price: "R$ 199/mês",
      benefits: [
        "Sem limite de reservas",
        "Tudo do plano básico",
        "Suporte por chat e-mail",
        "Página de pacotes",
        "Embarque por QRcode",
        "Importação de dados",
        "Treinamento da UPTUR",
        "API Rest de Integração",
        "Notificação de WhatsApp",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Premium",
      price: "R$ 299/mês",
      benefits: [
        "Sem limite de reservas",
        "Tudo do plano completo",
        "Suporte por chat e-mail",
        "Treinamento da UPTUR",
        "API Rest de Integração",
        "Notificação por e-mail",
        "Notificação de WhatsApp com seu número",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="planos"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 dark:text-[#143678]">
            Escolha seu Plano
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comece sua jornada no turismo com nosso plano completo e acessível
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">R$</span>
                    <span className="text-6xl font-bold text-blue-600 mx-2">
                      {plan.price.replace("R$ ", "").replace("/mês", "")}
                    </span>
                    <span className="text-xl text-gray-600">/mês</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a 
                  href={`https://turismo.tecvalle.com.br/register?plano=${encodeURIComponent(normalizeText(plan.name))}`}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Assinar Agora
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informações Adicionais
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
          <a
            href="#contato"
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            Entre em contato conosco
          </a>
        </div> */}
      </Container>
    </section>
  );
}
