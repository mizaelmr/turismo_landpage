import Image from "next/image";
import Container from "../_components/Container";
import Mock from "../_mock/mock.json";

export function Financial() {
    const plans = Mock.sessions[3]?.plans || [];
    
    return (
        <section id="planos" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
            
            <Container>
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        Escolha seu plano
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                        {Mock.sessions[3].title}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {Mock.sessions[3].subtitle}
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                                index === 1 
                                    ? 'border-blue-500 shadow-xl scale-105' 
                                    : 'border-gray-100/50'
                            }`}
                        >
                            {/* Popular badge */}
                            {index === 1 && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Mais Popular
                                    </div>
                                </div>
                            )}
                            
                            {/* Plan header */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                                    {plan.price !== "R$ 0" && <span className="text-gray-600">/mês</span>}
                                </div>
                                <p className="text-gray-600">{plan.description}</p>
                            </div>
                            
                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            {/* CTA Button */}
                            <div className="text-center">
                                <a
                                    href="https://auth.UPTUR.com.br/cadastro"
                                    className={`inline-flex items-center justify-center w-full rounded-xl font-semibold px-6 py-3 transition-all duration-300 ${
                                        index === 1
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                                    }`}
                                >
                                    {plan.cta}
                                    {index === 1 && (
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    )}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Bottom info */}
                <div className="text-center mt-12 relative z-10">
                    <p className="text-gray-600 mb-4">
                        Todos os planos incluem suporte 24/7 e atualizações gratuitas
                    </p>
                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Cancelamento gratuito
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Teste grátis por 7 dias
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Sem fidelidade
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
