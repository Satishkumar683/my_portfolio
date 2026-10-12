import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CP from "@/components/CP";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Roles from "@/components/Roles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="flex flex-col relative z-10 overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <CP />
        <Projects />
        <Achievements />
        <Roles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
