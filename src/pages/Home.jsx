import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import GitHub from "../components/GitHub/GitHub";
import Certifications from "../components/Certifications/Certifications";
import Contact from "../components/Contact/Contact";
import Services from "../components/Services/Services";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Certifications />
      <GitHub />
      <Contact />


    
    </>
  );
};

export default Home;