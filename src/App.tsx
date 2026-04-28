import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { ProjectSpotlight } from "./components/ProjectSpotlight";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ProjectSpotlight />
      <Experience />
      <Contact />
    </main>
  );
}
