import About from "../sections/About";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Welcome from "../sections/Welcome";

export default function Home() {
  return (
    <>
      <Welcome/>
      <About />
      <Skills/>
      <Projects/>
      <Contact />
    </>
    
  )
}
