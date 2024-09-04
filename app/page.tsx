"use client";
import { About } from "@/sections/About";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import { Nominations } from "@/sections/Nominations";
import { Achievements } from "@/sections/Achievements";
import { Testimonial } from "@/sections/Testimonial";
import ReactLenis from "lenis/react";
import Brands from "@/sections/Brands";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Nominations />
        <Achievements />
        <Testimonial />
        <Brands />
        <Footer />
      </div>
    </ReactLenis>
  );
}
