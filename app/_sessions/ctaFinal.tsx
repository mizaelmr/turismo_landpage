import Container from "../_components/Container";

export function CtaFinal() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Sua agência vendendo online em minutos
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            1 mês grátis, sem cartão de crédito. Cancele quando quiser.
          </p>
          <a
            href="https://app.up.tur.br/register"
            className="inline-flex items-center justify-center rounded-xl bg-white text-blue-700 font-bold px-10 py-4 transition-all duration-300 shadow-2xl hover:shadow-blue-900/30 hover:-translate-y-1 text-lg"
          >
            Começar Grátis
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
