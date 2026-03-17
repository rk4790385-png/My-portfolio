import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      {/* Background Glow Effect */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Workflow />
      <Contact />
    </>
  );
}