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
      name: "Gratuito",
      tagline: "Ideal para começar sem risco",
      price: null,
      priceLabel: "Grátis",
      priceSub: "por 1 mês",
      cta: "Começar Grátis",
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
      name: "Profissional",
      tagline: "Para agências que querem crescer",
      price: "9,90",
      priceLabel: null,
      priceSub: "no 1º mês",
      fullPrice: "197,00",
      cta: "Assinar Agora",
      benefits: [
        "Tudo do plano Gratuito",
        "Suporte por chat e e-mail",
        "Notificações via WhatsApp",
        "Importação de dados",
        "Treinamento e onboarding",
        "API de integração",
      ],
      popular: true,
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
            1 mês grátis, sem cartão de crédito. Se quiser escalar, o plano profissional sai por R$ 9,90 no primeiro mês — depois R$ 197,00/mês com tudo que sua agência precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{plan.tagline}</p>
                <div className="mb-6">
                  {plan.priceLabel ? (
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-6xl font-bold text-blue-600">
                        {plan.priceLabel}
                      </span>
                      <span className="text-xl text-gray-600 mt-1">{plan.priceSub}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">R$</span>
                        <span className="text-6xl font-bold text-blue-600 mx-2">
                          {plan.price}
                        </span>
                        <span className="text-xl text-gray-600">{plan.priceSub}</span>
                      </div>
                      {"fullPrice" in plan && plan.fullPrice && (
                        <span className="text-sm text-gray-400 mt-1">
                          depois R$ {plan.fullPrice}/mês
                        </span>
                      )}
                    </div>
                  )}
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
                  {plan.cta}
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
