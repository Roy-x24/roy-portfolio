import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import CommandPalette from "./components/CommandPalette";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Experience from "./components/Experience";
import Process from "./components/Process";
import GithubLive from "./components/GithubLive";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <CommandPalette />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <Experience />
        <Process />
        <GithubLive />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
