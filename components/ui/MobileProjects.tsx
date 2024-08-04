import Image from "next/image";
import React from "react";
import { ArrowRightWhite } from "../icons/ArrowRight";

const projects = [
  {
    image: "/Payrole.png",
    title: "Payrole Inc.",
  },
  {
    image: "/Weave.png",
    title: "Weave",
  },
  {
    image: "/Cryptozy.png",
    title: "Cryptozy",
  },
  {
    image: "/Estatery.png",
    title: "Estatery",
  },
];

export const MobileProjects = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex justify-center items-center relative w-full h-full"
          >
            <div className="h-[564px] w-full relative">
              <Image
                src={`/assets/images${project.image}`}
                alt={project.title}
                fill
                className="object-cover"
              />
              <Image
                src="/assets/images/MaskMobile.png"
                alt="mask"
                fill
                className="absolute bottom-0 object-cover"
              />
            </div>
            <div className="absolute w-full bottom-10 flex flex-col gap-6 px-6">
              <h2 className="text-4xl text-white">{project.title}</h2>
              <button className="flex md:hidden w-full justify-center gap-2 text-lg items-center border border-white py-4 px-6 rounded-full text-white">
                <span className="font-semibold uppercase">Get in touch</span>
                <ArrowRightWhite />
              </button>
            </div>
          </div>
        ))}
        <div className="h-fit w-full flex flex-col gap-10 items-start px-6 pt-10 pb-14">
          <h2 className="text-[44px] leading-tight">
            Want to <br /> see more?
          </h2>
          <button className="uppercase text-lg underline">
            See all projects
          </button>
        </div>
      </div>
    </section>
  );
};
