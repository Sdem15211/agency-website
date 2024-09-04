import React from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons/ArrowRight";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white py-12 px-6">
      <div className="px-6 md:px-12">
        <div className="mb-8 border-b border-neutral-80 py-20">
          <h2 className="text-7xl lg:text-9xl font-normal mb-8 tracking-[-0.04em]">
            Let's chat.
          </h2>
          <div className="flex justify-between items-center w-full">
            <p className="text-2xl lg:text-3xl max-w-[600px] font-light">
              Unleashing brand potential through creative design and innovation.
            </p>
            <button className="group hidden md:flex gap-2 text-lg items-center border bg-white text-black py-4 px-6 rounded-full">
              <span className="font-semibold uppercase">Get in touch</span>
              <div className="group-hover:translate-x-2 duration-300 ease-out">
                <ArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-12 pt-10">
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-x-28 gap-y-6 text-2xl font-medium border-b border-neutral-80 pb-10 md:border-none w-full">
              <Link href="/" className="hover:text-gray-300">
                About
              </Link>
              <Link href="#contact" className="hover:text-gray-300">
                Contact
              </Link>
              <Link href="#projects" className="hover:text-gray-300">
                Projects
              </Link>
              <Link href="" className="hover:text-gray-300">
                Blogs
              </Link>
              <Link href="#services" className="hover:text-gray-300">
                Services
              </Link>
              <Link href="" className="hover:text-gray-300">
                Careers
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-between">
            <div className="flex gap-6 font-normal text-lg md:text-2xl">
              <span>Behance</span>
              <span>Dribbble</span>
              <span>LinkedIn</span>
            </div>
            <div className="flex flex-col gap-3 font-medium text-lg md:text-2xl md:text-right">
              <span className="underline">hello@kreativy.studio</span>
              <span className="underline">+31 222 433 112</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
