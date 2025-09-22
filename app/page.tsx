import { Feedback } from "./_sessions/feedback";
import { Financial } from "./_sessions/financial";
import { Footer } from "./_sessions/footer";
import { Hero } from "./_sessions/hero";
import { Pag2 } from "./_sessions/pag2";
import { Plans } from "./_sessions/plans";
import { Questions } from "./_sessions/questions";
import { Resources } from "./_sessions/resources";
import { ResultsNumbers } from "./_sessions/resultsNumbers";
import { Understand } from "./_sessions/understand";

export default function Home() {
  return (
    <main>
      <Hero />
      <Understand />
      <ResultsNumbers />
      <Resources />
      <Feedback />
      <Plans />
      <Questions />
      <Footer />
    </main>
  );
}
