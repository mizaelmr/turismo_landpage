import Container from "@/_components/Container";

export function Mobility() {
  return (
    <section className="py-16 bg-white text-black" id="mobilidade">
      <Container>
        <div className="px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Texto */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Mobilidade para sua Agência
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Gerencie sua agência de turismo de onde estiver. Nosso sistema
                foi projetado para oferecer{" "}
                <strong>flexibilidade e praticidade</strong> no dia a dia:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">📱</span>
                  Compatível com Android, iOS e navegadores mobile
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500 text-xl">🔔</span>
                  Notificações em tempo real sobre reservas e clientes
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sky-400 text-xl">🌐</span>
                  Acesso seguro em qualquer lugar com internet
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-800 text-xl">🔄</span>
                  Sincronização automática entre dispositivos
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  Funcionalidades offline (quando aplicável)
                </li>
              </ul>
            </div>

            {/* Imagem */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
                alt="Aplicativo Mobile Turismo"
                className="max-w-md"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
