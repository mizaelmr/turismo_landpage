import Container from "../_components/Container";

export function Demo() {
  return (
    <section
      id="demonstracao"
      className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/steps.svg')] opacity-5 bg-center bg-no-repeat bg-cover"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl translate-y-48 translate-x-48"></div>

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Demo ao vivo
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Veja a plataforma{" "}
            <span className="text-blue-200">funcionando de verdade</span>
          </h2>

          <p className="text-xl text-blue-100 leading-relaxed mb-10">
            Acesse nosso site de demonstração e explore todas as funcionalidades
            que a UPTUR oferece para a sua agência de turismo.
          </p>

          {/* CTA Button */}
          <a
            href="https://empresa1.up.tur.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-blue-700 font-bold px-10 py-4 rounded-xl shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/30 text-lg"
          >
            <svg
              className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Acessar demonstração
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

          {/* Disclaimer */}
          <p className="mt-6 text-blue-200/70 text-sm">
            Nenhum cadastro necessário · Acesso imediato · Dados de exemplo
          </p>
        </div>
      </Container>
    </section>
  );
}
