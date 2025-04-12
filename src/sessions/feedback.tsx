'use client'
import { CradFeedback } from "@/components/cardFeedback"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Container from "@/components/Container";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Mock from "@/mock/mock.json";


export function Feedback() {
    const feedbacks = [
        {
            name: 'Rafael0731',
            title: 'Eficiente e prático!',
            text: 'Conseguiu substituir minha planilha de Excel de forma impecável. Agora tenho total controle das minhas finanças com poucos cliques. A interface é limpa, intuitiva e as funcionalidades me ajudam a organizar tudo com clareza e agilidade. Recomendo muito!'
        },
        {
            name: 'Leo Pieta',
            title: 'Recomendo a todos',
            text: 'Estou usando o app há 1 ano e está sendo incrível. Antes eu me perdia nas contas e esquecia datas importantes, mas agora tudo fica registrado e organizado. Os relatórios mensais são super úteis e me ajudam a planejar melhor meus gastos.'
        },
        {
            name: 'Ollimesmo',
            title: 'Mudou a minha vida',
            text: 'Uso há mais de 3 ANOS, e pagar a assinatura foi uma das melhores decisões que tomei. O app é atualizado constantemente, sempre com melhorias, e o suporte é super atencioso. Hoje não consigo imaginar minha vida financeira sem ele!'
        },
        {
            name: 'NinjazinXPTO',
            title: 'Ótimo app',
            text: 'Excelente aplicativo, atende a todas as minhas necessidades de controle financeiro. As categorias personalizáveis e a facilidade para lançar gastos e receitas tornam tudo muito prático. Já indiquei para vários amigos e todos adoraram também.'
        },
        {
            name: 'FulanoX',
            title: 'O melhor até agora',
            text: 'Com o yourPilot passei a ter total controle financeiro da minha casa e do meu negócio. A possibilidade de sincronizar contas, receber alertas e acompanhar metas faz toda a diferença. É o app mais completo e confiável que já usei.'
        },
        {
            name: 'BeltranoZ',
            title: 'Simplesmente perfeito',
            text: 'App intuitivo, funcional e com ótimo suporte! Tudo o que eu precisava para sair do vermelho e começar a economizar. Hoje tenho uma reserva de emergência organizada e consigo visualizar exatamente para onde vai cada centavo que gasto.'
        },
        {
            name: 'Nicollas',
            title: 'Simplesmente perfeito',
            text: 'App intuitivo, funcional e com ótimo suporte! Tudo o que eu precisava para sair do vermelho e começar a economizar. Hoje tenho uma reserva de emergência organizada e consigo visualizar exatamente para onde vai cada centavo que gasto.'
        }
    ]



    return (
        <section className="w-full flex flex-col py-12 md:py-16 relative bg-[#f1f5fd]">
            <Container>
                <div>
                    <p className="text-base font-normal leading-4 font-serif text-[#3A424A] text-center mb-3">
                        O que eles estão falando
                    </p>
                    <h2 className="max-w-[700px] text-black mb-2 md:mb-10 text-3xl md:text-5xl mx-auto text-center text-base-text font-bold">
                        {Mock.sessions[2].title}
                    </h2>
                </div>
                <div style={{ width: '922px !important' }}  >
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="px-4"
                    >
                        {Mock.sessions[2]?.testimonials?.map((feedback, index) => (
                            <SwiperSlide key={index} className="max-w-[300px]">
                                <CradFeedback
                                    name={feedback.name}
                                    title={feedback.role}
                                    text={feedback.quote}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </Container>

        </section>
    );
}