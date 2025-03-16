import Navbar from "../../components/Layout/Navbar";
import Hero from "./Section/Hero";
import AboutMe from "./Section/AboutMe";
import Skills from "./Section/Skills";
import Projects from "./Section/Projects";
import Contact from "./Section/Contact";

function Home() {
  return (
    <section id="Home">
      <header>
        <Navbar />
      </header>

      <main className="pt-[3.7rem] min-h-screen">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </section>
  );
}

export default Home;
