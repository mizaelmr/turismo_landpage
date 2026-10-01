import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como o UPTUR coleta, usa e protege suas informações pessoais com total transparência e segurança.",
  openGraph: {
    title: "Política de Privacidade | UPTUR",
    description: "Conheça as práticas de privacidade e proteção de dados do UPTUR.",
    url: "/privacy-policy",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      titulo="Política de Privacidade"
      intro="Sua privacidade é nossa prioridade. Esta política explica como o UPTUR coleta, usa e protege suas informações pessoais com total transparência e segurança."
      outra={{ href: "/terms-service", label: "Termos de Serviço" }}
      secoes={[
        {
          titulo: "Informações que Coletamos",
          itens: [
            { rotulo: "Dados pessoais", texto: "Nome, e-mail, telefone e informações da sua agência de turismo." },
            { rotulo: "Dados de uso", texto: "Páginas acessadas, ações realizadas e tempo de permanência na plataforma." },
            { rotulo: "Dados técnicos", texto: "Endereço IP, tipo de navegador e informações do dispositivo." },
          ],
        },
        {
          titulo: "Como Usamos suas Informações",
          itens: [
            { rotulo: "Prestação de serviços", texto: "Para fornecer e melhorar nossos serviços de automação." },
            { rotulo: "Comunicação", texto: "Para suporte técnico, atualizações e comunicações importantes." },
            { rotulo: "Segurança", texto: "Para fins de segurança, prevenção de fraudes e proteção da plataforma." },
          ],
        },
        {
          titulo: "Compartilhamento de Informações",
          destaque: "Não vendemos suas informações pessoais. Seus dados são sagrados para nós.",
          paragrafos: [
            "Podemos compartilhar seus dados apenas com parceiros de confiança que nos auxiliam na prestação dos serviços, sempre em conformidade com esta Política e com estritos contratos de proteção de dados.",
          ],
        },
        {
          titulo: "Seus Direitos",
          itens: [
            { rotulo: "Acesso", texto: "Solicitar uma cópia das suas informações pessoais." },
            { rotulo: "Correção", texto: "Corrigir informações incorretas ou desatualizadas." },
            { rotulo: "Exclusão", texto: "Solicitar a exclusão das suas informações pessoais." },
            { rotulo: "Portabilidade", texto: "Receber seus dados em formato estruturado." },
          ],
        },
        {
          titulo: "Segurança dos Dados",
          itens: [
            { rotulo: "Criptografia", texto: "Todos os dados são criptografados em trânsito e em repouso." },
            { rotulo: "Controle de acesso", texto: "Apenas pessoal autorizado tem acesso aos dados." },
            { rotulo: "Monitoramento", texto: "Sistemas de monitoramento 24/7 para detectar ameaças." },
          ],
        },
        {
          titulo: "Alterações nesta Política",
          paragrafos: [
            "Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossos serviços ou requisitos legais. Qualquer alteração será comunicada através da plataforma ou por e-mail, e entraremos em vigor imediatamente após a publicação.",
          ],
        },
      ]}
    />
  );
}
