import Link from "next/link";
import Container from "../_components/Container";

export function Support() {
  return (
    <section className="py-20 bg-gray-50">
      <Container className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#143678]">
          Suporte Sempre ao Seu Lado
        </h2>
        <p className="text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
          Conte com nossa equipe de especialistas para tirar dúvidas e aprender
          rapidamente a usar o sistema.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center">
            {/* <PlayCircleIcon
              size={56}
              weight="fill"
              className="text-green-500 mb-4"
            /> */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-[#143678]">
              Atendimento via WhatsApp
            </h3>
            <p className="text-gray-600 mt-2">
              Suporte rápido e prático direto no WhatsApp. Nossa equipe responde
              em tempo real.
            </p>
            <a target="_blank"
              href="https://api.whatsapp.com/send?1=pt_BR&phone=554497013460&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20a%20UPTUR"
              className="mt-6 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md transition"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center">
            {/* <PlayCircleIcon
              size={56}
              weight="fill"
              className="text-blue-500 mb-4"
            /> */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-[#143678]">
              Tutoriais em Vídeo Aula
            </h3>
            <p className="text-gray-600 mt-2">
              Acesse nossa biblioteca de vídeos explicativos e aprenda passo a
              passo.
            </p>
            <Link
              href="/videos"
              className="mt-6 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition"
            >
              Assistir Tutoriais
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
