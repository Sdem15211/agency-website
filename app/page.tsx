"use client";
import { About } from "@/sections/About";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Services />
      </div>
    </ReactLenis>
  );
}
