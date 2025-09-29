export function Video() {
  return (
    <section className="py-16 bg-white" id="demo-video">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-[#143678]">
          Veja como funciona a UPTUR
        </h2>
        <p className="text-xl text-gray-500 mb-8">
          Veja como é simples gerenciar sua agência de turismo com nossa
          plataforma on-line.
        </p>
        <div className="relative overflow-hidden rounded-2xl shadow-lg max-w-4xl mx-auto">
          <iframe
            className="w-full h-96 sm:h-[480px]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demonstração do Sistema de Automação de Agência de Turismo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-center items-center w-full mt-8">
          <a
            href="#planos"
            className="px-12 py-8 bg-gradient-to-r w-225 from-blue-600 to-indigo-600 text-white text-xl font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            VEJA OS PLANOS
          </a>
        </div>
      </div>
    </section>
  );
}
