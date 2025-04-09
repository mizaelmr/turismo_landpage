import ParagrafoComponent from "@/components/paragrafos";
import star from "../../public/star.svg";

export function Understand() {
    return (
        <>
            <section className="py-12 lg:py-20 lg:pb-28 padding-x-all-sections bg-[#FEFDF9]">
                <div className="max-w-[1224px] mx-auto lg:max-w-7xl">
                    <div className="md:mt-6 flex flex-col items-center lg:items-start w-full lg:w-auto">
                        <p className="mb-3 text-base-text text-center m-auto font-normal leading-4 text-[#454843]">
                            Controle total
                        </p>
                        <h2 className="font-bold max-w-[375px] text-3xl text-black text-base-text text-center m-auto md:max-w-[575px] md:text-5xl">
                            Entenda por que controlar suas finanças com a Organizze
                        </h2>
                        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-baseline justify-center gap-x-10 gap-y-10 lg:gap-x-24 lg:gap-y-20">
                            <ParagrafoComponent
                                icon={star}
                                title="Suas contas e cartões num só lugar"
                                description="Comece cadastrando suas contas e cartões para ter uma visão mais clara do controle de finanças."
                            />
                            <ParagrafoComponent
                                icon={star}
                                title="Cadastre todos os seus gastos"
                                description="Mantenha tudo sob controle cadastrando suas contas e despesas organizadas por categorias."
                            />
                            <ParagrafoComponent
                                icon={star}
                                title="Saiba o destino de cada centavo"
                                description="Informe sua renda e ganhos extras para ter previsibilidade financeira e tomar decisões inteligentes."
                            />
                            <ParagrafoComponent
                                icon={star}
                                title="Transforme controle financeiro em hábito"
                                description="Lance os gastos do dia a dia, acompanhe os relatórios e assuma o total controle das finanças."
                            />
                            <ParagrafoComponent
                                icon={star}
                                title="Transforme controle financeiro em hábito"
                                description="Lance os gastos do dia a dia, acompanhe os relatórios e assuma o total controle das finanças."
                            />
                            <ParagrafoComponent
                                icon={star}
                                title="Transforme controle financeiro em hábito"
                                description="Lance os gastos do dia a dia, acompanhe os relatórios e assuma o total controle das finanças."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}