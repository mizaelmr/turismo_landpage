import Link from 'next/link';
import { ArrowLeft, Shield, Database, Eye, Users, FileText, Lock, Mail, CheckCircle, AlertTriangle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
      {/* Header com botão de voltar */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
            <div className="flex items-center gap-2">
              <Lock className="w-6 h-6 text-purple-600" />
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sua privacidade é nossa prioridade. Esta política explica como o <span className="font-bold text-purple-600">UPTUR</span> 
              coleta, usa e protege suas informações pessoais com total transparência e segurança.
            </p>
          </div>

          {/* Cards da política */}
          <div className="space-y-8">
            {/* Card 1 - Informações que Coletamos */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    1. Informações que Coletamos
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Dados pessoais:</strong> Nome, e-mail, telefone e informações da sua agência de turismo.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Dados de uso:</strong> Páginas acessadas, ações realizadas e tempo de permanência na plataforma.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Dados técnicos:</strong> Endereço IP, tipo de navegador e informações do dispositivo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Como Usamos suas Informações */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    2. Como Usamos suas Informações
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Prestação de serviços:</strong> Para fornecer e melhorar nossos serviços de automação.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Comunicação:</strong> Para suporte técnico, atualizações e comunicações importantes.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Segurança:</strong> Para fins de segurança, prevenção de fraudes e proteção da plataforma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Compartilhamento de Informações */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    3. Compartilhamento de Informações
                  </h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">Nosso Compromisso</span>
                    </div>
                    <p className="text-green-700">
                      <strong>Não vendemos suas informações pessoais.</strong> Seus dados são sagrados para nós.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Podemos compartilhar seus dados apenas com parceiros de confiança que nos auxiliam na 
                    prestação dos serviços, sempre em conformidade com esta Política e com estritos 
                    contratos de proteção de dados.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Seus Direitos */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    4. Seus Direitos
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Acesso:</strong> Solicitar uma cópia das suas informações pessoais.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Correção:</strong> Corrigir informações incorretas ou desatualizadas.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Exclusão:</strong> Solicitar a exclusão das suas informações pessoais.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Portabilidade:</strong> Receber seus dados em formato estruturado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Segurança dos Dados */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    5. Segurança dos Dados
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Criptografia:</strong> Todos os dados são criptografados em trânsito e em repouso.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Controle de acesso:</strong> Apenas pessoal autorizado tem acesso aos dados.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Monitoramento:</strong> Sistemas de monitoramento 24/7 para detectar ameaças.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - Alterações na Política */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    6. Alterações nesta Política
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Podemos atualizar esta Política de Privacidade periodicamente para refletir 
                    mudanças em nossos serviços ou requisitos legais. Qualquer alteração será 
                    comunicada através da plataforma ou por e-mail, e entraremos em vigor 
                    imediatamente após a publicação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer da página */}
          <div className="mt-16 text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proteção Total dos Seus Dados
              </h3>
              <p className="text-gray-600 mb-6">
                Sua privacidade é fundamental para nós. Entre em contato para qualquer dúvida ou solicitação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="mailto:contato@uptur.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  contato@uptur.com
                </Link>
                <Link 
                  href="/terms-service"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Termos de Serviço
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
