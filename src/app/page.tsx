import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import {FirstCTA, SecondCTA} from "@/components/CallToAction";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ButtonBackToSite from "@/components/ButtonBackToSite";


export default function Home() {
  return (
    <main>

      <Hero />

      <About />

      <Products />

      <FirstCTA />

      <Services />

      <Projects />

      <SecondCTA />

      <Team />

      <Testimonials />

      <ButtonBackToSite />      

    </main>
  );
}
