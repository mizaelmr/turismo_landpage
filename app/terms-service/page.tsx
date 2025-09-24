export default function TermsService() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título principal */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Termos de Serviço
        </h1>

        {/* Introdução */}
        <p className="text-lg text-gray-600 mb-6">
          Bem-vindo ao <strong>UPTUR</strong>! Ao utilizar nossa plataforma de automação 
          para agências de turismo, você concorda com os seguintes termos de serviço:
        </p>

        {/* Seção 1 */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Uso da Plataforma
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
            <li>
              Você concorda em usar a plataforma apenas para fins legais e de acordo 
              com todas as leis e regulamentos aplicáveis.
            </li>
            <li>
              Você é responsável por manter a confidencialidade de suas credenciais 
              de acesso e por todas as atividades que ocorram em sua conta.
            </li>
          </ul>
        </div>

        {/* Seção 2 */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Propriedade Intelectual
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
            <li>
              Todo o conteúdo e materiais disponíveis na plataforma são de propriedade 
              do UPTUR ou de seus licenciadores e são protegidos por leis de propriedade 
              intelectual.
            </li>
            <li>
              Você concorda em não copiar, modificar, distribuir ou criar obras derivadas 
              com base na plataforma sem autorização prévia por escrito do UPTUR.
            </li>
          </ul>
        </div>

        {/* Seção 3 */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Privacidade
          </h2>
          <p className="text-lg text-gray-600">
            Coletamos e usamos suas informações pessoais de acordo com nossa{" "}
            <a href="/politica-de-privacidade" className="text-blue-600 hover:underline">
              Política de Privacidade
            </a>. Ao usar a plataforma, você concorda com a coleta e o uso dessas 
            informações conforme descrito.
          </p>
        </div>
      </div>
    </section>
  );
}
