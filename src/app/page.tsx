import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsSection from "@/components/Projects";
import Experience from "@/components/Experience"
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import HomeSocialStrip from "@/components/HomeSocialStrip";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsSection />
      <Experience />
      <Skills />
      <HomeSocialStrip />
      <Contact />
    </main>
  );
}