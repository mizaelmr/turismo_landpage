import { REGISTER_URL, WHATSAPP_URL } from "./home";

// Landing em três idiomas: "/" (português, Brasil), "/es" e "/en" (agências de fora do Brasil).
// Fora do Brasil o conteúdo é adaptado, não só traduzido: preço em dólar,
// pagamento com cartão pela Stripe (sem Pix/Mercado Pago) e 15 dias grátis.
export type Locale = "pt" | "es" | "en";

export const locales: Locale[] = ["pt", "es", "en"];

export const homePath: Record<Locale, string> = { pt: "/", es: "/es", en: "/en" };

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", es: "es", en: "en" };

// Cadastro já abre no idioma da página (o painel aceita ?change_language=)
export const registerUrl: Record<Locale, string> = {
  pt: REGISTER_URL,
  es: `${REGISTER_URL}?change_language=es`,
  en: `${REGISTER_URL}?change_language=en`,
};

export const whatsappUrl: Record<Locale, string> = {
  pt: WHATSAPP_URL,
  es: "https://api.whatsapp.com/send?phone=5587988567300&text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20UPTUR",
  en: "https://api.whatsapp.com/send?phone=5587988567300&text=Hi,%20I%27d%20like%20to%20know%20more%20about%20UPTUR",
};

type Plano = {
  nome: string;
  preco: string;
  periodo: string;
  descricao: string;
  itens: string[];
  cta: string;
  destaque: boolean;
};

export type Dict = {
  meta: { title: string; description: string };
  header: { links: { href: string; label: string }[]; login: string; cta: string; languageLabel: string };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    talk: string;
    bullets: string[];
    cardNewBooking: string;
    cardNow: string;
    cardApproved: string;
    cardAmount: string;
    cardPassengers: string;
    boardingTitle: string;
    waiting: string;
  };
  demo: {
    url: string;
    front: string;
    free: string;
    window: string;
    aisle: string;
    seatTaken: (n: number) => string;
    seatFree: (n: number) => string;
    trip: string;
    tripName: string;
    tripDates: string;
    seat: string;
    boarding: string;
    boardingValue: string;
    total: string;
    totalValue: string;
    pay: string;
    tryIt: string;
  };
  payments: { aria: string; text: string; card: string; showBrazilLogos: boolean };
  problem: { eyebrow: string; title: string; text: string; today: string; withUs: string; rows: [string, string][] };
  features: {
    eyebrow: string;
    title: string;
    text: string;
    site: [string, string];
    siteAlt: string;
    seats: [string, string];
    pay: [string, string];
    payRows: [string, string, string, boolean][];
    paid: string;
    awaiting: string;
    qr: [string, string];
    qrName: string;
    qrBoarded: string;
    msgs: [string, string];
    msg1: string;
    msg2: string;
    msg3: string;
    finance: [string, string];
    financeLabel: string;
    financeValue: string;
    chips: string[];
  };
  how: { eyebrow: string; title: string; steps: [string, string][] };
  forWho: { eyebrow: string; title: string; profiles: [string, string][] };
  plans: { eyebrow: string; title: string; subtitle: string; popular: string; items: Plano[] };
  guides: { show: boolean; eyebrow: string; title: string; download: string; read: string };
  faq: { eyebrow: string; title: string; subtitle: string; button: string; items: { pergunta: string; resposta: string }[] };
  cta: { title: string; text: string; create: string; talk: string; note: string };
  footer: {
    tagline: string;
    product: string;
    productLinks: { href: string; label: string }[];
    showGuides: boolean;
    guides: string;
    contact: string;
    privacy: string;
    terms: string;
    whatsappAria: string;
  };
};

const pt: Dict = {
  meta: {
    title: "Sistema para Excursões e Agências de Turismo | UPTUR",
    description:
      "Venda excursões online 24h com mapa de poltronas, pagamento por Pix e embarque por QR Code. Sistema para agências de turismo rodoviário. Teste grátis por 15 dias.",
  },
  header: {
    links: [
      { href: "/#recursos", label: "Recursos" },
      { href: "/#como-funciona", label: "Como funciona" },
      { href: "/#planos", label: "Planos" },
      { href: "/#duvidas", label: "Dúvidas" },
    ],
    login: "Entrar",
    cta: "Testar grátis",
    languageLabel: "Idioma",
  },
  hero: {
    badge: "Para excursionistas e agências de turismo rodoviário",
    titleStart: "Sistema para excursões:",
    titleHighlight: "venda 24h com mapa de poltronas e embarque por QR Code",
    subtitle:
      "Seu destino, nosso comando. O cliente escolhe a poltrona, paga por Pix e recebe o cartão de embarque. Você acompanha tudo num painel só, sem planilha e sem caderno.",
    cta: "Testar grátis por 15 dias",
    talk: "Falar com um especialista",
    bullets: ["15 dias grátis", "Sem fidelidade", "Cancele quando quiser"],
    cardNewBooking: "Nova reserva",
    cardNow: "agora",
    cardApproved: "Pagamento aprovado via Pix",
    cardAmount: "R$ 578,00",
    cardPassengers: "2 passageiros · poltronas 21 e 22",
    boardingTitle: "Embarque · Salvador",
    waiting: "aguardando",
  },
  demo: {
    url: "suaagencia.up.tur.br/reserva",
    front: "Frente",
    free: "livres",
    window: "Janela",
    aisle: "Corredor",
    seatTaken: (n) => `Poltrona ${n} ocupada`,
    seatFree: (n) => `Poltrona ${n} livre`,
    trip: "Excursão",
    tripName: "Porto Seguro · 5 dias",
    tripDates: "12 a 16 de novembro",
    seat: "Poltrona",
    boarding: "Embarque",
    boardingValue: "Salvador · 06h00",
    total: "Total",
    totalValue: "R$ 289,00",
    pay: "Pagar com Pix",
    tryIt: "Clique numa poltrona livre para testar",
  },
  payments: {
    aria: "Pagamentos integrados",
    text: "Seus clientes pagam online, com confirmação automática:",
    card: "Cartão de crédito",
    showBrazilLogos: true,
  },
  problem: {
    eyebrow: "Por que mudar",
    title: "Excursão organizada no improviso custa venda.",
    text: "Cada mensagem sem resposta é um cliente que esfria. Cada poltrona controlada à mão é um risco de vender duas vezes.",
    today: "Hoje",
    withUs: "Com UPTUR",
    rows: [
      ["Poltrona anotada no caderno ou na planilha", "Mapa do ônibus atualizado na hora da venda"],
      ["Comprovante de Pix perdido no WhatsApp", "Pagamento online com baixa automática"],
      ["Cliente esperando resposta para reservar", "Link de reserva funcionando 24 horas"],
      ["Lista impressa riscada no embarque", "Check-in por QR Code no celular"],
      ["Sem saber quanto ainda falta receber", "Financeiro de cada pacote em tempo real"],
    ],
  },
  features: {
    eyebrow: "Recursos",
    title: "Tudo o que uma excursão precisa, do anúncio ao embarque.",
    text: "Feito para a rotina de quem organiza viagem de ônibus, van ou micro-ônibus. Sem módulos extras, sem instalação.",
    site: [
      "Site da agência vendendo 24 horas",
      "Cada pacote que você cadastra aparece no site da sua agência, com fotos, datas, preço e botão de reserva. É só mandar o link no WhatsApp e no Instagram.",
    ],
    siteAlt: "Site de uma agência com pacotes de excursão publicados pelo UPTUR",
    seats: [
      "Mapa de poltronas",
      "Monte o mapa de cada ônibus no editor visual. O cliente escolhe o assento na reserva e nunca há poltrona vendida duas vezes.",
    ],
    pay: [
      "Pix e cartão com baixa automática",
      "Integração com o Mercado Pago. O pagamento confirma a reserva sozinho e a poltrona de quem não pagou no prazo volta para a venda.",
    ],
    payRows: [
      ["Carla M.", "Pix", "R$ 289,00", true],
      ["Roberto A.", "Cartão", "R$ 578,00", true],
      ["Fernanda L.", "Pix", "R$ 289,00", false],
    ],
    paid: "● Pago",
    awaiting: "○ Aguardando",
    qr: [
      "Embarque por QR Code",
      "Cada passageiro recebe o próprio cartão de embarque. No dia, você lê pelo celular e vê em tempo real quem embarcou e quem falta.",
    ],
    qrName: "Maria S. · Poltrona 14",
    qrBoarded: "✓ embarcou às 06:42",
    msgs: [
      "WhatsApp e e-mail automáticos",
      "Confirmação de reserva, pagamento e lembrete de viagem chegam sozinhos no WhatsApp e no e-mail do cliente. No Pro+, saem do número da sua agência.",
    ],
    msg1: "Olá, Carla! Sua reserva para Porto Seguro está confirmada. Poltrona 14 ✓",
    msg2: "Lembrete: embarque amanhã às 06h00 em Salvador.",
    msg3: "Obrigada! 🙌",
    finance: [
      "Financeiro e relatórios",
      "Veja quanto entrou, quanto falta receber e a ocupação de cada pacote. Relatórios de pacotes e hospedagem em PDF.",
    ],
    financeLabel: "Recebido no mês",
    financeValue: "R$ 24.860",
    chips: [
      "Várias cidades de embarque",
      "Lista de espera",
      "Pacotes só de hospedagem",
      "Quartos e acomodações",
      "Ônibus, micro-ônibus e van",
      "Cancelamento automático de reserva não paga",
      "Lembrete de viagem",
      "Equipe com permissões",
      "Funciona no celular",
    ],
  },
  how: {
    eyebrow: "Como funciona",
    title: "Do cadastro ao embarque em três passos.",
    steps: [
      ["Cadastre o pacote", "Destino, datas, preço, fotos, cidades de embarque e o ônibus. Do celular ou do computador, em minutos."],
      ["Divulgue o link", "O pacote entra no site da sua agência. Mande o link nos grupos, no status e no Instagram."],
      ["Receba e embarque", "O cliente escolhe a poltrona e paga sozinho. No dia, você confere todo mundo pelo QR Code."],
    ],
  },
  forWho: {
    eyebrow: "Para quem é",
    title: "Feito para quem vende experiência, não para quem gosta de planilha.",
    profiles: [
      ["Excursionistas", "Bate-volta, praia, romaria, show, compras e parques."],
      ["Agências de turismo rodoviário", "Viagens em grupo com vários ônibus e cidades de embarque."],
      ["Pacotes de hospedagem", "Venda só a hospedagem, sem transporte incluído."],
      ["Quem está começando", "Organize tudo desde a primeira viagem, sem planilha e sem caderno."],
    ],
  },
  plans: {
    eyebrow: "Planos",
    title: "Preço simples. Sem fidelidade.",
    subtitle: "Comece com 15 dias grátis. A primeira cobrança é automática no fim do teste, e você pode cancelar antes.",
    popular: "Mais escolhido",
    items: [
      {
        nome: "Teste grátis",
        preco: "R$ 0",
        periodo: "por 15 dias",
        descricao: "Conheça a plataforma completa. Você cadastra o cartão e só é cobrado no fim do teste.",
        itens: ["Todos os recursos do plano escolhido", "Reservas ilimitadas", "Cancele antes e não paga nada"],
        cta: "Começar grátis",
        destaque: false,
      },
      {
        nome: "Profissional",
        preco: "R$ 197",
        periodo: "/mês",
        descricao: "Para agências que vendem excursão todo mês.",
        itens: [
          "Pacotes e reservas ilimitados",
          "Mapa de poltronas e embarque por QR Code",
          "Pagamento online com baixa automática",
          "Painel financeiro completo",
          "Notificações por WhatsApp",
          "Suporte por chat e e-mail",
        ],
        cta: "Testar o Profissional",
        destaque: true,
      },
      {
        nome: "Pro+",
        preco: "R$ 247",
        periodo: "/mês",
        descricao: "Para atender com o número da própria agência.",
        itens: [
          "Tudo do Profissional",
          "WhatsApp com o número da sua agência",
          "Inbox de conversas no painel",
          "Mensagens com a identidade da sua marca",
        ],
        cta: "Testar o Pro+",
        destaque: false,
      },
    ],
  },
  guides: {
    show: true,
    eyebrow: "Conteúdo gratuito",
    title: "Guias para excursionistas.",
    download: "Baixar a planilha de excursão grátis →",
    read: "Ler guia →",
  },
  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes.",
    subtitle: "Não achou sua resposta? Fale com a gente no WhatsApp.",
    button: "Chamar no WhatsApp",
    items: [
      { pergunta: "Preciso ter CNPJ para usar?", resposta: "Sim. O cadastro da agência é feito com o CNPJ da empresa. O CNPJ de MEI também serve." },
      { pergunta: "Posso cancelar quando quiser?", resposta: "Sim, não há fidelidade. Você pode cancelar ou trocar de plano a qualquer momento." },
      {
        pergunta: "Como funciona o período gratuito?",
        resposta:
          "Você usa o sistema completo por 15 dias. O cartão de crédito é cadastrado ao criar a conta e a primeira cobrança é automática no fim do teste: R$ 197/mês no Profissional ou R$ 247/mês no Pro+ (com o WhatsApp da própria agência). Se cancelar antes, não paga nada.",
      },
      {
        pergunta: "Preciso instalar algo?",
        resposta:
          "Não. O UPTUR é 100% online: funciona no navegador do computador, tablet ou celular. Seus clientes também reservam pelo navegador, sem aplicativo.",
      },
      { pergunta: "Posso cadastrar quantos pacotes?", resposta: "Quantos quiser, com datas, preços, fotos, cidades de embarque, hospedagem e descrição completa." },
      {
        pergunta: "Como meus clientes pagam?",
        resposta:
          "A plataforma é integrada ao Mercado Pago: o cliente paga por Pix ou cartão na própria reserva e o status de pagamento é atualizado automaticamente.",
      },
      { pergunta: "O cliente escolhe a poltrona na hora da reserva?", resposta: "Sim. Ele vê o mapa do ônibus, as poltronas livres e escolhe o assento antes de pagar." },
    ],
  },
  cta: {
    title: "Mais destinos para o seu negócio.",
    text: "Cadastre sua próxima excursão hoje e mande o link de reserva para seus clientes ainda esta semana.",
    create: "Criar conta grátis",
    talk: "Falar no WhatsApp",
    note: "15 dias grátis · sem fidelidade · cancele quando quiser",
  },
  footer: {
    tagline: "Tecnologia para agências de turismo que evoluem. Mais destinos para o seu negócio.",
    product: "Produto",
    productLinks: [
      { href: "/#recursos", label: "Recursos" },
      { href: "/#como-funciona", label: "Como funciona" },
      { href: "/#planos", label: "Planos e preços" },
    ],
    showGuides: true,
    guides: "Para excursionistas",
    contact: "Fale com a gente",
    privacy: "Política de Privacidade",
    terms: "Termos de Serviço",
    whatsappAria: "Falar no WhatsApp",
  },
};

const es: Dict = {
  meta: {
    title: "Sistema para Agencias de Viajes y Excursiones | UPTUR",
    description:
      "Vende excursiones en línea 24h con mapa de asientos, pago con tarjeta y embarque por código QR. Sistema para agencias de viajes en autobús. Prueba gratis por 15 días.",
  },
  header: {
    links: [
      { href: "/es#recursos", label: "Funciones" },
      { href: "/es#como-funciona", label: "Cómo funciona" },
      { href: "/es#planos", label: "Planes" },
      { href: "/es#duvidas", label: "Preguntas" },
    ],
    login: "Entrar",
    cta: "Probar gratis",
    languageLabel: "Idioma",
  },
  hero: {
    badge: "Para agencias de viajes y excursiones en autobús",
    titleStart: "Sistema para excursiones:",
    titleHighlight: "vende 24h con mapa de asientos y embarque por código QR",
    subtitle:
      "Tu destino, nuestro mando. El cliente elige su asiento, paga con tarjeta y recibe su pase de abordar. Tú controlas todo en un solo panel, sin hojas de cálculo ni cuadernos.",
    cta: "Probar gratis por 15 días",
    talk: "Hablar con un especialista",
    bullets: ["15 días gratis", "Sin permanencia", "Cancela cuando quieras"],
    cardNewBooking: "Nueva reserva",
    cardNow: "ahora",
    cardApproved: "Pago aprobado con tarjeta",
    cardAmount: "US$ 196.00",
    cardPassengers: "2 pasajeros · asientos 21 y 22",
    boardingTitle: "Embarque · Guadalajara",
    waiting: "esperando",
  },
  demo: {
    url: "tuagencia.up.tur.br/reserva",
    front: "Frente",
    free: "libres",
    window: "Ventana",
    aisle: "Pasillo",
    seatTaken: (n) => `Asiento ${n} ocupado`,
    seatFree: (n) => `Asiento ${n} libre`,
    trip: "Excursión",
    tripName: "Cancún · 5 días",
    tripDates: "12 al 16 de noviembre",
    seat: "Asiento",
    boarding: "Embarque",
    boardingValue: "Guadalajara · 06:00",
    total: "Total",
    totalValue: "US$ 98.00",
    pay: "Pagar con tarjeta",
    tryIt: "Haz clic en un asiento libre para probar",
  },
  payments: {
    aria: "Pagos integrados",
    text: "Tus clientes pagan en línea con tarjeta, con confirmación automática:",
    card: "Tarjeta de crédito y débito · Stripe",
    showBrazilLogos: false,
  },
  problem: {
    eyebrow: "Por qué cambiar",
    title: "Una excursión organizada a la improvisada cuesta ventas.",
    text: "Cada mensaje sin respuesta es un cliente que se enfría. Cada asiento controlado a mano es un riesgo de venderlo dos veces.",
    today: "Hoy",
    withUs: "Con UPTUR",
    rows: [
      ["Asientos anotados en un cuaderno o en Excel", "Mapa del autobús actualizado al momento de la venta"],
      ["Comprobantes de pago perdidos en WhatsApp", "Pago en línea con confirmación automática"],
      ["Clientes esperando respuesta para reservar", "Link de reserva funcionando 24 horas"],
      ["Lista impresa tachada en el embarque", "Check-in por código QR en el celular"],
      ["Sin saber cuánto falta por cobrar", "Finanzas de cada paquete en tiempo real"],
    ],
  },
  features: {
    eyebrow: "Funciones",
    title: "Todo lo que una excursión necesita, del anuncio al embarque.",
    text: "Hecho para el día a día de quien organiza viajes en autobús, van o minibús. Sin módulos extra, sin instalación.",
    site: [
      "Sitio de tu agencia vendiendo 24 horas",
      "Cada paquete que registras aparece en el sitio de tu agencia, con fotos, fechas, precio y botón de reserva. Solo envía el link por WhatsApp e Instagram.",
    ],
    siteAlt: "Sitio de una agencia con paquetes publicados por UPTUR",
    seats: [
      "Mapa de asientos",
      "Arma el mapa de cada autobús en el editor visual. El cliente elige su asiento al reservar y nunca se vende un asiento dos veces.",
    ],
    pay: [
      "Pago con tarjeta y confirmación automática",
      "Integración con Stripe: el dinero cae directo en la cuenta de tu agencia. El pago confirma la reserva solo y el asiento de quien no pagó a tiempo vuelve a la venta.",
    ],
    payRows: [
      ["Carla M.", "Tarjeta", "US$ 98.00", true],
      ["Roberto A.", "Tarjeta", "US$ 196.00", true],
      ["Fernanda L.", "Tarjeta", "US$ 98.00", false],
    ],
    paid: "● Pagado",
    awaiting: "○ Pendiente",
    qr: [
      "Embarque por código QR",
      "Cada pasajero recibe su propio pase de abordar. El día del viaje, lo escaneas con el celular y ves en tiempo real quién subió y quién falta.",
    ],
    qrName: "María S. · Asiento 14",
    qrBoarded: "✓ abordó a las 06:42",
    msgs: [
      "WhatsApp y correo automáticos",
      "La confirmación de reserva, de pago y el recordatorio del viaje llegan solos al WhatsApp y al correo del cliente. En Pro+, salen desde el número de tu agencia.",
    ],
    msg1: "¡Hola, Carla! Tu reserva para Cancún está confirmada. Asiento 14 ✓",
    msg2: "Recordatorio: el embarque es mañana a las 06:00 en Guadalajara.",
    msg3: "¡Gracias! 🙌",
    finance: [
      "Finanzas e informes",
      "Ve cuánto entró, cuánto falta por cobrar y la ocupación de cada paquete. Informes de paquetes y alojamiento en PDF.",
    ],
    financeLabel: "Cobrado en el mes",
    financeValue: "US$ 4,860",
    chips: [
      "Varias ciudades de embarque",
      "Lista de espera",
      "Paquetes solo de alojamiento",
      "Habitaciones y alojamientos",
      "Autobús, minibús y van",
      "Cancelación automática de reservas no pagadas",
      "Recordatorio de viaje",
      "Equipo con permisos",
      "Funciona en el celular",
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "Del registro al embarque en tres pasos.",
    steps: [
      ["Registra el paquete", "Destino, fechas, precio, fotos, ciudades de embarque y el autobús. Desde el celular o la computadora, en minutos."],
      ["Comparte el link", "El paquete aparece en el sitio de tu agencia. Envía el link a tus grupos, estados e Instagram."],
      ["Cobra y embarca", "El cliente elige su asiento y paga solo. El día del viaje, revisas a todos con el código QR."],
    ],
  },
  forWho: {
    eyebrow: "Para quién es",
    title: "Hecho para quien vende experiencias, no para quien ama las hojas de cálculo.",
    profiles: [
      ["Excursiones", "Viajes de un día, playa, peregrinaciones, conciertos, compras y parques."],
      ["Agencias de viajes en autobús", "Viajes en grupo con varios autobuses y ciudades de embarque."],
      ["Paquetes de alojamiento", "Vende solo el alojamiento, sin transporte incluido."],
      ["Quien está empezando", "Organiza todo desde el primer viaje, sin complicaciones."],
    ],
  },
  plans: {
    eyebrow: "Planes",
    title: "Precio simple. Sin permanencia.",
    subtitle: "Empieza con 15 días gratis. El primer cobro es automático al final de la prueba y puedes cancelar antes.",
    popular: "El más elegido",
    items: [
      {
        nome: "Prueba gratis",
        preco: "US$ 0",
        periodo: "por 15 días",
        descricao: "Conoce la plataforma completa. Registras tu tarjeta y solo se cobra al final de la prueba.",
        itens: ["Todas las funciones del plan elegido", "Reservas ilimitadas", "Cancela antes y no pagas nada"],
        cta: "Empezar gratis",
        destaque: false,
      },
      {
        nome: "Profesional",
        preco: "US$ 39",
        periodo: "/mes",
        descricao: "Para agencias que venden excursiones todos los meses.",
        itens: [
          "Paquetes y reservas ilimitados",
          "Mapa de asientos y embarque por código QR",
          "Pago en línea con confirmación automática",
          "Panel financiero completo",
          "Notificaciones por WhatsApp",
          "Soporte por chat y correo",
        ],
        cta: "Probar el Profesional",
        destaque: true,
      },
      {
        nome: "Pro+",
        preco: "US$ 49",
        periodo: "/mes",
        descricao: "Para atender con el número de tu propia agencia.",
        itens: [
          "Todo lo del Profesional",
          "WhatsApp con el número de tu agencia",
          "Bandeja de conversaciones en el panel",
          "Mensajes con la identidad de tu marca",
        ],
        cta: "Probar el Pro+",
        destaque: false,
      },
    ],
  },
  guides: { show: false, eyebrow: "", title: "", download: "", read: "" },
  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas frecuentes.",
    subtitle: "¿No encontraste tu respuesta? Escríbenos por WhatsApp.",
    button: "Escribir por WhatsApp",
    items: [
      {
        pergunta: "¿Funciona para agencias fuera de Brasil?",
        resposta:
          "Sí. Al registrarte eliges tu país: el panel y el sitio de tu agencia quedan en español, los precios en tu moneda (MXN, USD o EUR) y los pasajeros se registran con su documento de identidad o pasaporte.",
      },
      {
        pergunta: "¿Cómo funciona la prueba gratis?",
        resposta:
          "Usas el sistema completo por 15 días. Registras tu tarjeta al crear la cuenta y el primer cobro es automático al terminar la prueba: US$ 39/mes en el Profesional o US$ 49/mes en el Pro+. Si cancelas antes, no pagas nada.",
      },
      { pergunta: "¿Puedo cancelar cuando quiera?", resposta: "Sí, no hay permanencia. Puedes cancelar o cambiar de plan en cualquier momento." },
      {
        pergunta: "¿Cómo me pagan mis clientes?",
        resposta:
          "Con tarjeta, en la misma reserva, a través de Stripe. Conectas tu propia cuenta de Stripe y el dinero cae directo en ella; el estado del pago se actualiza automáticamente.",
      },
      {
        pergunta: "¿Necesito instalar algo?",
        resposta:
          "No. UPTUR es 100% en línea: funciona en el navegador de la computadora, tablet o celular. Tus clientes también reservan desde el navegador, sin aplicación.",
      },
      { pergunta: "¿Cuántos paquetes puedo registrar?", resposta: "Los que quieras, con fechas, precios, fotos, ciudades de embarque, alojamiento y descripción completa." },
      { pergunta: "¿El cliente elige su asiento al reservar?", resposta: "Sí. Ve el mapa del autobús, los asientos libres y elige el suyo antes de pagar." },
    ],
  },
  cta: {
    title: "Más destinos para tu negocio.",
    text: "Registra tu próxima excursión hoy y envía el link de reserva a tus clientes esta misma semana.",
    create: "Crear cuenta gratis",
    talk: "Escribir por WhatsApp",
    note: "15 días gratis · sin permanencia · cancela cuando quieras",
  },
  footer: {
    tagline: "Tecnología para agencias de viajes que evolucionan. Más destinos para tu negocio.",
    product: "Producto",
    productLinks: [
      { href: "/es#recursos", label: "Funciones" },
      { href: "/es#como-funciona", label: "Cómo funciona" },
      { href: "/es#planos", label: "Planes y precios" },
    ],
    showGuides: false,
    guides: "",
    contact: "Contáctanos",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
    whatsappAria: "Escribir por WhatsApp",
  },
};

const en: Dict = {
  meta: {
    title: "Software for Travel Agencies and Group Tours | UPTUR",
    description:
      "Sell group trips online 24/7 with seat maps, card payments and QR code boarding. Software for bus tour and travel agencies. Free 15-day trial.",
  },
  header: {
    links: [
      { href: "/en#recursos", label: "Features" },
      { href: "/en#como-funciona", label: "How it works" },
      { href: "/en#planos", label: "Pricing" },
      { href: "/en#duvidas", label: "FAQ" },
    ],
    login: "Log in",
    cta: "Try for free",
    languageLabel: "Language",
  },
  hero: {
    badge: "For bus tour operators and travel agencies",
    titleStart: "Group trip software:",
    titleHighlight: "sell 24/7 with seat maps and QR code boarding",
    subtitle:
      "Your destination, our command. Customers pick their seat, pay by card and get their boarding pass. You manage everything in one dashboard, with no spreadsheets or notebooks.",
    cta: "Try free for 15 days",
    talk: "Talk to a specialist",
    bullets: ["15 days free", "No contract", "Cancel anytime"],
    cardNewBooking: "New booking",
    cardNow: "now",
    cardApproved: "Card payment approved",
    cardAmount: "US$ 196.00",
    cardPassengers: "2 passengers · seats 21 and 22",
    boardingTitle: "Boarding · Orlando",
    waiting: "waiting",
  },
  demo: {
    url: "youragency.up.tur.br/booking",
    front: "Front",
    free: "free",
    window: "Window",
    aisle: "Aisle",
    seatTaken: (n) => `Seat ${n} taken`,
    seatFree: (n) => `Seat ${n} available`,
    trip: "Group trip",
    tripName: "Miami · 5 days",
    tripDates: "November 12–16",
    seat: "Seat",
    boarding: "Boarding",
    boardingValue: "Orlando · 6:00 AM",
    total: "Total",
    totalValue: "US$ 98.00",
    pay: "Pay by card",
    tryIt: "Click an available seat to try it",
  },
  payments: {
    aria: "Integrated payments",
    text: "Your customers pay online by card, with automatic confirmation:",
    card: "Credit and debit cards · Stripe",
    showBrazilLogos: false,
  },
  problem: {
    eyebrow: "Why switch",
    title: "Improvised trip planning costs you sales.",
    text: "Every unanswered message is a customer going cold. Every seat tracked by hand is a risk of selling it twice.",
    today: "Today",
    withUs: "With UPTUR",
    rows: [
      ["Seats written in a notebook or spreadsheet", "Bus map updated the moment you sell"],
      ["Payment receipts lost in WhatsApp", "Online payment with automatic confirmation"],
      ["Customers waiting for a reply to book", "Booking link working 24 hours a day"],
      ["Printed list crossed out at boarding", "QR code check-in on your phone"],
      ["No idea how much is still to be collected", "Each package's finances in real time"],
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Everything a group trip needs, from the ad to boarding.",
    text: "Built for people who run bus, van and minibus trips. No extra modules, nothing to install.",
    site: [
      "Your agency website selling 24/7",
      "Every package you create shows up on your agency website, with photos, dates, price and a booking button. Just share the link on WhatsApp and Instagram.",
    ],
    siteAlt: "Agency website with packages published by UPTUR",
    seats: [
      "Seat map",
      "Build each bus layout in the visual editor. Customers pick their seat when booking, and no seat is ever sold twice.",
    ],
    pay: [
      "Card payments with automatic confirmation",
      "Stripe integration: the money goes straight to your agency's account. Payment confirms the booking on its own, and unpaid seats go back on sale after the deadline.",
    ],
    payRows: [
      ["Carla M.", "Card", "US$ 98.00", true],
      ["Robert A.", "Card", "US$ 196.00", true],
      ["Fernanda L.", "Card", "US$ 98.00", false],
    ],
    paid: "● Paid",
    awaiting: "○ Pending",
    qr: [
      "QR code boarding",
      "Each passenger gets their own boarding pass. On the day, you scan it with your phone and see in real time who has boarded and who is missing.",
    ],
    qrName: "Maria S. · Seat 14",
    qrBoarded: "✓ boarded at 6:42 AM",
    msgs: [
      "Automatic WhatsApp and email",
      "Booking and payment confirmations and trip reminders reach your customers' WhatsApp and email automatically. On Pro+, they come from your agency's own number.",
    ],
    msg1: "Hi, Carla! Your booking for Miami is confirmed. Seat 14 ✓",
    msg2: "Reminder: boarding is tomorrow at 6:00 AM in Orlando.",
    msg3: "Thank you! 🙌",
    finance: [
      "Finances and reports",
      "See what came in, what is still due and each package's occupancy. Package and accommodation reports in PDF.",
    ],
    financeLabel: "Received this month",
    financeValue: "US$ 4,860",
    chips: [
      "Multiple boarding cities",
      "Waitlist",
      "Accommodation-only packages",
      "Rooms and accommodations",
      "Bus, minibus and van",
      "Automatic cancellation of unpaid bookings",
      "Trip reminders",
      "Team with permissions",
      "Works on mobile",
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "From setup to boarding in three steps.",
    steps: [
      ["Create the package", "Destination, dates, price, photos, boarding cities and the bus. From your phone or computer, in minutes."],
      ["Share the link", "The package goes live on your agency website. Share the link in groups, stories and Instagram."],
      ["Get paid and board", "Customers pick their seat and pay on their own. On the day, you check everyone in with the QR code."],
    ],
  },
  forWho: {
    eyebrow: "Who it's for",
    title: "Built for people who sell experiences, not for spreadsheet lovers.",
    profiles: [
      ["Group trip organizers", "Day trips, beach, pilgrimages, concerts, shopping and theme parks."],
      ["Bus tour agencies", "Group travel with several buses and boarding cities."],
      ["Accommodation packages", "Sell accommodation only, with no transport included."],
      ["Just getting started", "Get organized from your very first trip, no hassle."],
    ],
  },
  plans: {
    eyebrow: "Pricing",
    title: "Simple pricing. No contract.",
    subtitle: "Start with 15 days free. The first charge happens automatically when the trial ends, and you can cancel before then.",
    popular: "Most popular",
    items: [
      {
        nome: "Free trial",
        preco: "US$ 0",
        periodo: "for 15 days",
        descricao: "Try the full platform. You add your card and are only charged when the trial ends.",
        itens: ["All features of the chosen plan", "Unlimited bookings", "Cancel before it ends and pay nothing"],
        cta: "Start for free",
        destaque: false,
      },
      {
        nome: "Professional",
        preco: "US$ 39",
        periodo: "/month",
        descricao: "For agencies that sell trips every month.",
        itens: [
          "Unlimited packages and bookings",
          "Seat map and QR code boarding",
          "Online payment with automatic confirmation",
          "Complete financial dashboard",
          "WhatsApp notifications",
          "Chat and email support",
        ],
        cta: "Try Professional",
        destaque: true,
      },
      {
        nome: "Pro+",
        preco: "US$ 49",
        periodo: "/month",
        descricao: "To serve customers from your agency's own number.",
        itens: [
          "Everything in Professional",
          "WhatsApp with your agency's number",
          "Conversation inbox in the dashboard",
          "Messages with your brand identity",
        ],
        cta: "Try Pro+",
        destaque: false,
      },
    ],
  },
  guides: { show: false, eyebrow: "", title: "", download: "", read: "" },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions.",
    subtitle: "Didn't find your answer? Message us on WhatsApp.",
    button: "Message us on WhatsApp",
    items: [
      {
        pergunta: "Does it work for agencies outside Brazil?",
        resposta:
          "Yes. You choose your country when signing up: your dashboard and agency website are in English, prices are in your currency (USD, EUR or MXN), and passengers register with their ID document or passport.",
      },
      {
        pergunta: "How does the free trial work?",
        resposta:
          "You use the full system for 15 days. You add your card when creating the account, and the first charge happens automatically when the trial ends: US$ 39/month for Professional or US$ 49/month for Pro+. Cancel before then and you pay nothing.",
      },
      { pergunta: "Can I cancel anytime?", resposta: "Yes, there is no contract. You can cancel or change plans at any time." },
      {
        pergunta: "How do my customers pay?",
        resposta:
          "By card, right in the booking, through Stripe. You connect your own Stripe account and the money goes straight into it; the payment status updates automatically.",
      },
      {
        pergunta: "Do I need to install anything?",
        resposta:
          "No. UPTUR is 100% online: it works in the browser on a computer, tablet or phone. Your customers book in the browser too, no app needed.",
      },
      { pergunta: "How many packages can I create?", resposta: "As many as you want, with dates, prices, photos, boarding cities, accommodation and a full description." },
      { pergunta: "Do customers choose their seat when booking?", resposta: "Yes. They see the bus map and the available seats, and pick their own before paying." },
    ],
  },
  cta: {
    title: "More destinations for your business.",
    text: "Create your next trip today and send the booking link to your customers this week.",
    create: "Create a free account",
    talk: "Message us on WhatsApp",
    note: "15 days free · no contract · cancel anytime",
  },
  footer: {
    tagline: "Technology for travel agencies that keep growing. More destinations for your business.",
    product: "Product",
    productLinks: [
      { href: "/en#recursos", label: "Features" },
      { href: "/en#como-funciona", label: "How it works" },
      { href: "/en#planos", label: "Pricing" },
    ],
    showGuides: false,
    guides: "",
    contact: "Contact us",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    whatsappAria: "Message us on WhatsApp",
  },
};

export const dict: Record<Locale, Dict> = { pt, es, en };
