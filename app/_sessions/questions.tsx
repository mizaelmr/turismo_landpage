"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "../_components/Container";
import Mock from "../_mock/mock.json";

interface AccordionItemProps {
    question: string;
    answer: string;
}

const CardAnswer = ({ question, answer }: AccordionItemProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
                <span className="text-sm sm:text-base">{question}</span>
                {open ? (
                    <Minus className="text-blue-600 flex-shrink-0" size={20} />
                ) : (
                    <Plus className="text-blue-600 flex-shrink-0" size={20} />
                )}
            </button>

            {open && (
                <div className="bg-gray-50 px-6 py-4 text-gray-700">
                    <p className="text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
                </div>
            )}
        </div>
    );
}

export function Questions() {
    return (
        <section id="faq" className="py-20 bg-white">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 dark:text-[#143678]">
                        Perguntas frequentes
                    </h2>
                    
                    <div className="mb-12">
                        {Mock?.sessions[4]?.questions?.map((elem, index) => (
                            <CardAnswer
                                key={index}
                                question={elem?.question}
                                answer={elem?.answer}
                            />
                        ))}
                    </div>
                    
                    {/* CTA Section */}
                    <div className="bg-blue-50 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-[#143678]">
                            Ainda com dúvidas?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Nossa Central de Ajuda está cheia de dicas incríveis para você aproveitar o UPTUR ao máximo!
                        </p>
                        <a 
                            className="inline-flex items-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 transition-colors duration-300" 
                            href="https://api.whatsapp.com/send?1=pt_BR&phone=554497013460&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20a%20UPTUR" target="_blank"
                        >
                            Central de Ajuda
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}