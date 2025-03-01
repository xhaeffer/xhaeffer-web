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

      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}

export default Home;
