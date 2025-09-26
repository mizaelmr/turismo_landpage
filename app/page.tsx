import { Feedback } from "./_sessions/feedback";
import { Footer } from "./_sessions/footer";
import { Hero } from "./_sessions/hero";
import { Plans } from "./_sessions/plans";
import { Questions } from "./_sessions/questions";
import { Resources } from "./_sessions/resources";
import { Support } from "./_sessions/support";
import { Security } from "./_sessions/security";
import { ResultsNumbers } from "./_sessions/resultsNumbers";
import { Understand } from "./_sessions/understand";
import { Mobility } from "./_sessions/mobility";
import { Video } from "./_sessions/video";
import { WhatsAppSession } from "./_sessions/whatsAppSession";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <ResultsNumbers />
      <Resources />
      <Feedback />
      <Plans />
      <WhatsAppSession />
      <Support />
      <Mobility />
      <Security />
      <Questions />
      <a
        href="https://api.whatsapp.com/send?1=pt_BR&phone=554497013460&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20a%20UPTUR"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-[999]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.926 7.926 0 0 0 8.004 0C3.583 0 .07 3.512.07 7.934c0 1.398.368 2.769 1.067 3.975L0 16l4.197-1.102a7.9 7.9 0 0 0 3.807.97h.003c4.42 0 7.933-3.512 7.933-7.934a7.892 7.892 0 0 0-2.339-5.608zM8.004 14.5a6.57 6.57 0 0 1-3.356-.92l-.24-.143-2.494.654.666-2.434-.157-.25a6.566 6.566 0 0 1-1.004-3.483c0-3.62 2.947-6.567 6.585-6.567a6.54 6.54 0 0 1 4.65 1.925 6.548 6.548 0 0 1 1.934 4.646c0 3.62-2.947 6.572-6.584 6.572zm3.635-4.934c-.198-.099-1.17-.578-1.35-.646-.181-.066-.313-.099-.445.1s-.511.646-.627.777c-.114.131-.23.148-.428.05-.198-.1-.837-.308-1.595-.986-.59-.527-.99-1.178-1.107-1.376-.115-.197-.012-.304.086-.402.09-.089.198-.23.297-.346.099-.115.132-.197.198-.33.065-.131.033-.247-.017-.345-.05-.099-.445-1.072-.61-1.468-.16-.385-.323-.333-.445-.339-.115-.006-.247-.007-.379-.007s-.346.05-.527.247c-.181.198-.693.678-.693 1.654s.71 1.918.809 2.048c.099.131 1.394 2.133 3.379 2.992.472.205.84.327 1.127.419.474.151.905.13 1.246.079.38-.057 1.17-.478 1.338-.94.165-.462.165-.858.116-.94-.05-.083-.181-.131-.38-.23z" />
        </svg>
      </a>
      <Footer />
    </main>
  );
}
