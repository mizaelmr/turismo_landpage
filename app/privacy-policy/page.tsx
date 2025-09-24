export default function PrivacyPolicy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título principal */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Política de Privacidade
        </h1>

        {/* Introdução */}
        <p className="text-lg text-gray-600 mb-6">
          Sua privacidade é importante para nós. Esta Política de Privacidade
          explica como coletamos, usamos e protegemos suas informações quando
          você utiliza a plataforma <strong>UPTUR</strong>.
        </p>

        {/* Seção 1 */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Informações que Coletamos
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
            <li>
              Informações fornecidas por você, como nome, e-mail, telefone e
              dados da sua agência de turismo.
            </li>
            <li>
              Informações de uso da plataforma, como páginas acessadas e ações
              realizadas.
            </li>
          </ul>
        </div>

        {/* Seção 2 */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Como Usamos suas Informações
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
            <li>Para fornecer e melhorar nossos serviços.</li>
            <li>
              Para entrar em contato com você em caso de suporte, atualizações
              ou comunicações importantes.
            </li>
            <li>Para fins de segurança e prevenção de fraudes.</li>
          </ul>
        </div>

        {/* Seção 3 */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Compartilhamento de Informações
          </h2>
          <p className="text-lg text-gray-600">
            Não vendemos suas informações pessoais. Podemos compartilhar seus
            dados apenas com parceiros de confiança que nos auxiliam na
            prestação dos serviços, sempre em conformidade com esta Política.
          </p>
        </div>

        {/* Seção 4 */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Seus Direitos
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
            <li>Acessar, corrigir ou excluir suas informações pessoais.</li>
            <li>
              Solicitar informações sobre como seus dados estão sendo usados.
            </li>
            <li>
              Revogar o consentimento para o uso de suas informações, quando
              aplicável.
            </li>
          </ul>
        </div>

        {/* Seção 5 */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Alterações nesta Política
          </h2>
          <p className="text-lg text-gray-600">
            Podemos atualizar esta Política de Privacidade periodicamente. 
            Qualquer alteração será comunicada em nossa plataforma.
          </p>
        </div>

        {/* Seção 6 */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Contato
          </h2>
          <p className="text-lg text-gray-600">
            Se você tiver dúvidas ou solicitações relacionadas à sua
            privacidade, entre em contato conosco pelo e-mail:{" "}
            <a
              href="mailto:contato@uptur.com"
              className="text-blue-600 hover:underline"
            >
              contato@uptur.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
