import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ParallaxBand from "./components/ParallaxBand";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Statement from "./components/Statement";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Statement />
      <Services />
      <ParallaxBand />
      <Projects />
      <Process />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </>
  );
}
