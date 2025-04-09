import { Feedback } from "@/sessions/feedback";
import { Financial } from "@/sessions/financial";
import { Footer } from "@/sessions/footer";
import { Hero } from "@/sessions/hero";
import { Pag2 } from "@/sessions/pag2";
import { Questions } from "@/sessions/questions";
import { Resources } from "@/sessions/resources";
import { Understand } from "@/sessions/understand";

export default function Home() {
  return (
    <main>
      <Hero />
      <Understand />
      <Financial />
      <Pag2 />
      <Resources />
      <Questions />
      <Feedback />
      <Footer />
    </main>
  );
}
