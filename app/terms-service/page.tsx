import Link from 'next/link';
import { ArrowLeft, Shield, Users, FileText, Lock, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header com botão de voltar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">UPTUR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              Termos de Serviço
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bem-vindo ao <span className="font-bold text-blue-600">UPTUR</span>! 
              Nossa plataforma de automação para agências de turismo está comprometida 
              com a transparência e proteção dos seus direitos.
            </p>
          </div>

          {/* Cards dos termos */}
          <div className="space-y-8">
            {/* Card 1 - Uso da Plataforma */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    1. Uso da Plataforma
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Você concorda em usar a plataforma apenas para fins legais e de acordo 
                        com todas as leis e regulamentos aplicáveis.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Você é responsável por manter a confidencialidade de suas credenciais 
                        de acesso e por todas as atividades que ocorram em sua conta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Propriedade Intelectual */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    2. Propriedade Intelectual
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Todo o conteúdo e materiais disponíveis na plataforma são de propriedade 
                        do UPTUR ou de seus licenciadores e são protegidos por leis de propriedade 
                        intelectual.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Você concorda em não copiar, modificar, distribuir ou criar obras derivadas 
                        com base na plataforma sem autorização prévia por escrito do UPTUR.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Privacidade */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    3. Privacidade e Proteção de Dados
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Coletamos e usamos suas informações pessoais de acordo com nossa{" "}
                    <Link 
                      href="/privacy-policy" 
                      className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                    >
                      Política de Privacidade
                    </Link>. Ao usar a plataforma, você concorda com a coleta e o uso dessas 
                    informações conforme descrito.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Responsabilidades */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    4. Responsabilidades e Limitações
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        O UPTUR não se responsabiliza por danos diretos ou indiretos decorrentes 
                        do uso da plataforma.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        Reservamo-nos o direito de suspender ou encerrar contas que violem 
                        estes termos de serviço.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Alterações */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    5. Alterações nos Termos
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Podemos atualizar estes Termos de Serviço periodicamente. 
                    Qualquer alteração será comunicada através da plataforma ou por e-mail. 
                    O uso continuado da plataforma após as alterações constitui aceitação 
                    dos novos termos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer da página */}
          <div className="mt-16 text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Dúvidas sobre nossos Termos?
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa equipe está sempre disponível para esclarecer qualquer questão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="mailto:contato@uptur.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📧</span>
                  contato@uptur.com
                </Link>
                <Link 
                  href="/privacy-policy"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
                >
                  <span className="mr-2">🔒</span>
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
