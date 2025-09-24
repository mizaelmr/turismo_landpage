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

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <Understand />
      <ResultsNumbers />
      <Resources />
      <Feedback />
      <Plans />
      <WhatsAppSession />
      <Support />
      <Mobility />
      <Security />
      <Questions />
      <Footer />
    </main>
  );
}
