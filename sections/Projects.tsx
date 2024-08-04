"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: "/Payrole.png",
    title: "Payrole Inc.",
    description:
      "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Brand Design", "Website Design", "App Design", "Development"],
  },
  {
    image: "/Weave.png",
    title: "Weave",
    description:
      "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Brand Design", "Website Design", "App Design", "Development"],
  },
  {
    image: "/Cryptozy.png",
    title: "Cryptozy",
    description:
      "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Brand Design", "Website Design", "App Design", "Development"],
  },
  {
    image: "/Estatery.png",
    title: "Estatery",
    description:
      "lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Brand Design", "Website Design", "App Design", "Development"],
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
  }, []);
  return (
    <section className="overflow-x-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex h-screen w-[400vw] relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex justify-center items-center relative"
            >
              <div className="w-[1345px] h-screen relative">
                <Image
                  src={`/assets/images${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <Image
                  src="/assets/images/Mask.png"
                  alt="mask"
                  width={1345}
                  height={471}
                  className="absolute bottom-0"
                />
              </div>
              <div className="flex justify-between items-end absolute bottom-12 w-full px-12">
                <div className="flex flex-col gap-6  text-white">
                  <h2 className="text-5xl">{project.title}</h2>
                  <p className="text-2xl max-w-[590px] font-light">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      className="text-white p-4 bg-white/15 rounded-full font-light text-nowrap"
                      key={tagIndex}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-8 justify-center items-center w-1/2">
            <h2 className="text-6xl leading-tight text-center">
              Want to <br /> see more?
            </h2>
            <button className="uppercase text-2xl underline">
              See all projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
