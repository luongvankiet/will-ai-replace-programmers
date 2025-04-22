import { ThemeProvider } from "@/components/theme-provider";
import FullscreenToggle from "./components/fullscreen-toggle";
import KeyboardHelp from "./components/keyboard-help";
import ParticleBackground from "./components/particle-background";
import ScrollIndicator from "./components/scroll-indicator";
import Sidebar from "./components/sidebar";
import SlideProgress from "./components/slide-progress";
import CaseStudies from "./components/slides/case-studies";
import ChartSlide from "./components/slides/chart-slide";
import FutureProof from "./components/slides/future-proof";
import LessonsLearned from "./components/slides/lessons-learned";
import RiseOfAI from "./components/slides/rise-of-ai";
import StudentA from "./components/slides/student-a";
import StudentB from "./components/slides/student-b";
import SydneyTech from "./components/slides/sydney-tech";
import ThankYou from "./components/slides/thank-you";
import TitleSlide from "./components/slides/title-slide";
import TypesOfAICoders from "./components/slides/types-of-ai-coders";
import V0Vercel from "./components/slides/v0-vercel";
import { useKeyboardNavigation } from "./hooks/use-keyboard-navigation";

function App() {
  useKeyboardNavigation();
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <main className="relative">
          <ParticleBackground />
          <Sidebar />
          <ScrollIndicator />
          <FullscreenToggle />
          <KeyboardHelp />
          <SlideProgress />

          <section id="title">
            <TitleSlide />
          </section>

          <section id="rise-of-ai">
            <RiseOfAI />
          </section>

          <section id="sydney-tech">
            <SydneyTech />
          </section>

          <section id="chart">
            <ChartSlide />
          </section>

          <section id="case-studies">
            <CaseStudies />
          </section>

          <section id="v0-vercel">
            <V0Vercel />
          </section>

          <section id="student-a">
            <StudentA />
          </section>

          <section id="student-b">
            <StudentB />
          </section>

          <section id="lessons-learned">
            <LessonsLearned />
          </section>

          <section id="types-of-ai-coders">
            <TypesOfAICoders />
          </section>

          <section id="future-proof">
            <FutureProof />
          </section>

          <section id="thank-you">
            <ThankYou />
          </section>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
