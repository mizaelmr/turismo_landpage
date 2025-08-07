import { Feedback } from "./_sessions/feedback";
import { Financial } from "./_sessions/financial";
import { Footer } from "./_sessions/footer";
import { Hero } from "./_sessions/hero";
import { Pag2 } from "./_sessions/pag2";
import { Questions } from "./_sessions/questions";
import { Resources } from "./_sessions/resources";
import { Understand } from "./_sessions/understand";

export default function Home() {
  return (
    <main>
      <Hero />
      <Understand />
      <Resources />
      <Feedback />
      <Questions />
      <Footer />
    </main>
  );
}
