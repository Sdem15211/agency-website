import { About } from "@/sections/About";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
