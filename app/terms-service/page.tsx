import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Leia os termos e condições de uso da plataforma UPTUR. Direitos, responsabilidades e políticas de uso.",
  openGraph: {
    title: "Termos de Serviço | UPTUR",
    description: "Conheça os termos e condições de uso do UPTUR.",
    url: "/terms-service",
  },
  alternates: {
    canonical: "/terms-service",
  },
};

export default function TermsService() {
  return (
    <LegalPage
      titulo="Termos de Serviço"
      intro="Bem-vindo ao UPTUR! Nossa plataforma de automação para agências de turismo está comprometida com a transparência e proteção dos seus direitos."
      outra={{ href: "/privacy-policy", label: "Política de Privacidade" }}
      secoes={[
        {
          titulo: "Uso da Plataforma",
          paragrafos: [
            "Você concorda em usar a plataforma apenas para fins legais e de acordo com todas as leis e regulamentos aplicáveis.",
            "Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorram em sua conta.",
          ],
        },
        {
          titulo: "Propriedade Intelectual",
          paragrafos: [
            "Todo o conteúdo e materiais disponíveis na plataforma são de propriedade do UPTUR ou de seus licenciadores e são protegidos por leis de propriedade intelectual.",
            "Você concorda em não copiar, modificar, distribuir ou criar obras derivadas com base na plataforma sem autorização prévia por escrito do UPTUR.",
          ],
        },
        {
          titulo: "Privacidade e Proteção de Dados",
          paragrafos: [
            <>
              Coletamos e usamos suas informações pessoais de acordo com nossa{" "}
              <Link href="/privacy-policy" className="font-semibold underline underline-offset-4">
                Política de Privacidade
              </Link>
              . Ao usar a plataforma, você concorda com a coleta e o uso dessas informações conforme descrito.
            </>,
          ],
        },
        {
          titulo: "Responsabilidades e Limitações",
          paragrafos: [
            "O UPTUR não se responsabiliza por danos diretos ou indiretos decorrentes do uso da plataforma.",
            "Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos de serviço.",
          ],
        },
        {
          titulo: "Alterações nos Termos",
          paragrafos: [
            "Podemos atualizar estes Termos de Serviço periodicamente. Qualquer alteração será comunicada através da plataforma ou por e-mail. O uso continuado da plataforma após as alterações constitui aceitação dos novos termos.",
          ],
        },
      ]}
    />
  );
}
