import type { Locale } from "@/_content/i18n";

// Textos do guia "Primeiros passos" em pt, es e en. Os 8 passos seguem o roteiro do vídeo e do PDF:
// o vídeo começa o passo N em INTRO + N * PASSO segundos (usado pelo botão "Ver no vídeo").
export const VIDEO_INTRO = 4.5;
export const VIDEO_PASSO = 8.5;

export type Passo = { titulo: string; texto: string; onde: string };

export type Conteudo = {
  htmlLang: string;
  arquivo: string;
  header: { login: string; cta: string; language: string };
  hero: {
    badge: string;
    tituloInicio: string;
    tituloDestaque: string;
    subtitulo: string;
    ctaVideo: string;
    ctaPdf: string;
    bullets: string[];
    cardPassos: string;
    cardPassosTexto: string;
    cardTempo: string;
    cardTempoTexto: string;
    videoLabel: string;
  };
  passos: {
    eyebrow: string;
    titulo: string;
    texto: string;
    ondeLabel: string;
    verNoVideo: string;
    passoLabel: string;
    itens: Passo[];
  };
  pdf: { eyebrow: string; titulo: string; texto: string; botao: string; meta: string };
  ajuda: { titulo: string; texto: string; botao: string };
  loginUrl: string;
};

const LOGIN = "https://app.up.tur.br/login";

export const conteudo: Record<Locale, Conteudo> = {
  pt: {
    htmlLang: "pt-BR",
    arquivo: "primeiros-passos-pt",
    loginUrl: LOGIN,
    header: { login: "Entrar", cta: "Abrir o sistema", language: "Idioma" },
    hero: {
      badge: "Passo a passo para agências novas",
      tituloInicio: "Sua primeira viagem à venda",
      tituloDestaque: "em 8 passos.",
      subtitulo:
        "Assista ao vídeo de 1 minuto e meio e siga o roteiro: do endereço do seu site até o controle do financeiro. Tudo no seu ritmo, sem precisar de ajuda técnica.",
      ctaVideo: "Assistir ao vídeo",
      ctaPdf: "Baixar o PDF",
      bullets: ["Vídeo de 1 min 18 s", "Guia em PDF", "Sem termos técnicos"],
      cardPassos: "8 passos",
      cardPassosTexto: "do site ao financeiro",
      cardTempo: "Hoje",
      cardTempoTexto: "publique seu 1º pacote",
      videoLabel: "Vídeo: primeiros passos na up.tur",
    },
    passos: {
      eyebrow: "O roteiro",
      titulo: "Do site no ar à primeira reserva.",
      texto: "Cada passo diz onde clicar no menu. Toque em “Ver no vídeo” para ir direto ao trecho.",
      ondeLabel: "Onde",
      verNoVideo: "Ver no vídeo",
      passoLabel: "Passo",
      itens: [
        { titulo: "Seu site já está no ar", texto: "Ele tem endereço próprio. Compartilhe esse link com seus clientes.", onde: "Meu site" },
        { titulo: "Cadastre cidades e destinos", texto: "Defina de onde o ônibus sai e para onde ele vai.", onde: "Pacotes › Cidades de Embarque" },
        { titulo: "Ônibus e hospedagem", texto: "Opcional: cadastre o ônibus e os hotéis da viagem.", onde: "Hospedagem › Hotéis / Pousadas" },
        { titulo: "Crie seu pacote", texto: "Informe datas, preço e vagas. Depois é só publicar.", onde: "Pacotes › Pacotes" },
        { titulo: "Receba pagamentos", texto: "Conecte sua conta de pagamento (Mercado Pago ou Stripe) para receber Pix e cartão.", onde: "Administração" },
        { titulo: "Divulgue seu site", texto: "Envie o link no WhatsApp e coloque nas suas redes sociais.", onde: "Meu site" },
        { titulo: "Acompanhe as reservas", texto: "Veja reservas e passageiros e faça o controle de embarque.", onde: "Reservas › Controle de Embarque" },
        { titulo: "Controle seu financeiro", texto: "Veja o que já entrou e o que ainda falta receber.", onde: "Financeiro › Resumo" },
      ],
    },
    pdf: {
      eyebrow: "Para guardar",
      titulo: "O mesmo guia, em PDF.",
      texto: "Baixe, imprima ou mande para sua equipe. Os 8 passos em poucas páginas, com o caminho exato no menu.",
      botao: "Baixar o PDF",
      meta: "PDF · português",
    },
    ajuda: {
      titulo: "Travou em algum passo?",
      texto: "Fale com a gente pelo WhatsApp ou pelo menu Suporte, dentro do sistema.",
      botao: "Falar no WhatsApp",
    },
  },
  es: {
    htmlLang: "es",
    arquivo: "primeros-pasos-es",
    loginUrl: LOGIN,
    header: { login: "Entrar", cta: "Abrir el sistema", language: "Idioma" },
    hero: {
      badge: "Guía paso a paso para agencias nuevas",
      tituloInicio: "Tu primer viaje a la venta",
      tituloDestaque: "en 8 pasos.",
      subtitulo:
        "Mira el video de 1 minuto y medio y sigue la guía: desde la dirección de tu sitio hasta el control de tus finanzas. A tu ritmo, sin ayuda técnica.",
      ctaVideo: "Ver el video",
      ctaPdf: "Descargar el PDF",
      bullets: ["Video de 1 min 18 s", "Guía en PDF", "Sin términos técnicos"],
      cardPassos: "8 pasos",
      cardPassosTexto: "del sitio a las finanzas",
      cardTempo: "Hoy",
      cardTempoTexto: "publica tu 1.er paquete",
      videoLabel: "Video: primeros pasos en up.tur",
    },
    passos: {
      eyebrow: "La guía",
      titulo: "Del sitio en línea a la primera reserva.",
      texto: "Cada paso indica dónde hacer clic en el menú. Toca “Ver en el video” para ir directo a ese tramo.",
      ondeLabel: "Dónde",
      verNoVideo: "Ver en el video",
      passoLabel: "Paso",
      itens: [
        { titulo: "Tu sitio ya está en línea", texto: "Tiene su propia dirección. Comparte ese enlace con tus clientes.", onde: "Mi sitio" },
        { titulo: "Registra ciudades y destinos", texto: "Define desde dónde sale el autobús y a dónde va.", onde: "Paquetes › Ciudades de embarque" },
        { titulo: "Autobús y hospedaje", texto: "Opcional: registra el autobús y los hoteles del viaje.", onde: "Hospedaje › Hoteles / Posadas" },
        { titulo: "Crea tu paquete", texto: "Indica fechas, precio y cupos. Después solo publícalo.", onde: "Paquetes › Paquetes" },
        { titulo: "Recibe pagos", texto: "Conecta tu cuenta de pago (Stripe) para recibir tarjeta y otros medios.", onde: "Administración" },
        { titulo: "Difunde tu sitio", texto: "Envía el enlace por WhatsApp y ponlo en tus redes sociales.", onde: "Mi sitio" },
        { titulo: "Sigue las reservas", texto: "Mira reservas y pasajeros y controla el abordaje.", onde: "Reservas › Control de embarque" },
        { titulo: "Controla tus finanzas", texto: "Mira lo que ya entró y lo que falta por cobrar.", onde: "Finanzas › Resumen" },
      ],
    },
    pdf: {
      eyebrow: "Para guardar",
      titulo: "La misma guía, en PDF.",
      texto: "Descárgala, imprímela o envíala a tu equipo. Los 8 pasos en pocas páginas, con la ruta exacta en el menú.",
      botao: "Descargar el PDF",
      meta: "PDF · español",
    },
    ajuda: {
      titulo: "¿Te trabaste en algún paso?",
      texto: "Escríbenos por WhatsApp o desde el menú Soporte, dentro del sistema.",
      botao: "Escribir por WhatsApp",
    },
  },
  en: {
    htmlLang: "en",
    arquivo: "getting-started-en",
    loginUrl: LOGIN,
    header: { login: "Log in", cta: "Open the system", language: "Language" },
    hero: {
      badge: "Step-by-step guide for new agencies",
      tituloInicio: "Your first trip on sale",
      tituloDestaque: "in 8 steps.",
      subtitulo:
        "Watch the minute-and-a-half video and follow the guide: from your website address to tracking your finances. At your own pace, no technical help needed.",
      ctaVideo: "Watch the video",
      ctaPdf: "Download the PDF",
      bullets: ["1 min 18 s video", "PDF guide", "No jargon"],
      cardPassos: "8 steps",
      cardPassosTexto: "from website to finances",
      cardTempo: "Today",
      cardTempoTexto: "publish your 1st package",
      videoLabel: "Video: getting started with up.tur",
    },
    passos: {
      eyebrow: "The guide",
      titulo: "From a live website to your first booking.",
      texto: "Each step tells you where to click in the menu. Tap “Watch in the video” to jump straight to that part.",
      ondeLabel: "Where",
      verNoVideo: "Watch in the video",
      passoLabel: "Step",
      itens: [
        { titulo: "Your website is live", texto: "It has its own address. Share this link with your customers.", onde: "My website" },
        { titulo: "Add cities and destinations", texto: "Set where the bus departs from and where it goes.", onde: "Packages › Boarding cities" },
        { titulo: "Bus and accommodation", texto: "Optional: add the bus and the hotels for the trip.", onde: "Accommodation › Hotels / Inns" },
        { titulo: "Create your package", texto: "Enter dates, price and seats. Then just publish it.", onde: "Packages › Packages" },
        { titulo: "Get paid", texto: "Connect your payment account (Stripe) to accept cards and other methods.", onde: "Administration" },
        { titulo: "Promote your website", texto: "Send the link on WhatsApp and add it to your social networks.", onde: "My website" },
        { titulo: "Track your bookings", texto: "See bookings and passengers and manage boarding.", onde: "Bookings › Boarding control" },
        { titulo: "Control your finances", texto: "See what has come in and what is still to be received.", onde: "Finance › Summary" },
      ],
    },
    pdf: {
      eyebrow: "To keep",
      titulo: "The same guide, as a PDF.",
      texto: "Download it, print it or send it to your team. The 8 steps in a few pages, with the exact path in the menu.",
      botao: "Download the PDF",
      meta: "PDF · English",
    },
    ajuda: {
      titulo: "Stuck on a step?",
      texto: "Message us on WhatsApp or from the Support menu inside the system.",
      botao: "Message us on WhatsApp",
    },
  },
};
