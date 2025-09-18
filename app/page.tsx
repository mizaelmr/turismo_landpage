import { Feedback } from "./_sessions/feedback";
import { Footer } from "./_sessions/footer";
import { Hero } from "./_sessions/hero";
import { Plans } from "./_sessions/plans";
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
      <Plans />
      <Questions />
      <Footer />
    </main>
  );
}
