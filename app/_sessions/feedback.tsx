'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Container from "../_components/Container"
import 'swiper/css'
import 'swiper/css/pagination'
import Mock from "../_mock/mock.json"

export function Feedback() {
    const testimonials = Mock.sessions[2]?.testimonials || [];

    return (
        <section id="depoimentos" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
            
            <Container>
                <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        Depoimentos reais
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                        {Mock.sessions[2]?.title || "Quem já embarcou com a gente"}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {Mock.sessions[2]?.subtitle || "Depoimentos de quem confia no UPTUR"}
                    </p>
                </div>

                <div className="relative z-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 h-full">
                                    {/* Quote icon */}
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                        </svg>
                                    </div>
                                    
                                    {/* Quote text */}
                                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                        "{testimonial.quote}"
                                    </p>
                                    
                                    {/* Author */}
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                            <div className="text-sm text-gray-600">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
                {/* Bottom CTA */}
                {/* <div className="text-center mt-16 relative z-10">
                    <div className="inline-flex items-center justify-center rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 transition-all duration-300">
                        Ver mais depoimentos
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div> */}
            </Container>
        </section>
    )
}
