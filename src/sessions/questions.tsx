"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/Container";


interface AccordionItemProps {
    question: string;
    answer: string;
}


const CardAnswer = ({ question, answer }: AccordionItemProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="mb-2 border border-gray-300 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-zinc-800"
            >
                {question}
                {open ? (
                    <Minus className="text-green-600" size={20} />
                ) : (
                    <Plus className="text-green-600" size={20} />
                )}
            </button>

            {open && (
                <div className="bg-[#E7FBF0] px-5 py-4 text-zinc-700">
                    <p dangerouslySetInnerHTML={{ __html: answer }} />
                </div>
            )}
        </div>
    );

}

export function Questions() {
    return (
        <section className="w-full flex flex-col items-center px-3 py-12 md:py-20 bg-[#FEFDF9]">
            <Container>
                <div className="mb-6 lg:mb-10 w-full max-w-[922px]">
                    <h2 className="text-black md:text-5xl font-bold text-center mb-6 lg:mb-10">
                        Perguntas frequentes
                    </h2>
                    <CardAnswer
                        question="O que é o Organizze?"
                        answer="O Organizze é um aplicativo de controle financeiro que ajuda você a organizar suas contas, despesas e receitas de forma simples e prática."
                    />
                    <CardAnswer
                        question="O que é o Organizze?"
                        answer="O Organizze é um aplicativo de controle financeiro que ajuda você a organizar suas contas, despesas e receitas de forma simples e prática."
                    />
                    <CardAnswer
                        question="O que é o Organizze?"
                        answer="O Organizze é um aplicativo de controle financeiro que ajuda você a organizar suas contas, despesas e receitas de forma simples e prática."
                    />
                    <CardAnswer
                        question="O que é o Organizze?"
                        answer="O Organizze é um aplicativo de controle financeiro que ajuda você a organizar suas contas, despesas e receitas de forma simples e prática."
                    />
                </div>
                <div className="w-full bg-[#FFF0E0] mt-10 rounded-[16px] px-6 py-6 lg:py-9 lg:px-10 flex flex-col items-center sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center lg:flex lg:flex-row lg:items-center lg:justify-between xl:w-full max-w-[922px] xl:flex xl:flex-row xl:items-center xl:justify-between">
                    <div>
                        <h3 className="text-center text-black font-normal lg:text-left text-[22px] lg:text-[28px] text-base-text leading-8 font-bold mb-2">
                            Ainda com dúvidas?

                        </h3>
                        <span className="max-w-[627px] font-normal mb-4 lg:mb-0 block text-sm lg:text-base text-[#454843] leading-6 text-center lg:text-left">
                            Caso tenha ficado com alguma dúvida sobre o uso do app, nossa Central de Ajuda está cheia de dicas incríveis para você aproveitar o Organizze ao máximo!
                        </span>
                    </div>
                    <a className="rounded-lg text-base tracking-tig transition-colors font-normal ease-in-out duration-300 select-none inline-flex min-w-fit items-center text-[#1A1C19] font-semibold py-4 px-6 bg-[#FEB872] hover:bg-[#FEB882]" href="">
                        Acesse a Central de Ajuda
                        <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="#1A1C19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </Container>
        </section>
    )
}