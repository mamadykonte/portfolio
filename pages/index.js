import About from "../sections/About";
import Contact from "../sections/Contact";
// import Hero from "../sections/Hero";
import Profile from "../sections/Profile";
import Projects from "../sections/Projects";
import Welcome from "../sections/Welcome";

export default function Home() {
  return (
    <>
      <Welcome/>
      <About />
      <Projects/>
      <Contact />
    </>
    
  )
}
