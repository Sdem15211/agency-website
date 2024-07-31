"use client";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { Menu } from "@/components/icons/Menu";
import { X } from "@/components/icons/X";
import { headerLinks } from "@/data/Headerdata";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: "100%",
    y: "-50%",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", duration: 1 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "spring", duration: 1 },
  },
};

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="md:px-12 px-6">
        <div className="flex justify-between items-center mt-16 md:mt-8">
          <div className="text-2xl md:text-3xl gap-[1px] flex">
            <span className="font-light">Krea</span>
            <span className="font-medium">tivy</span>
          </div>
          <div className="flex items-center gap-12">
            <button className="hidden md:flex gap-2 text-lg items-center border border-black py-4 px-6 rounded-full">
              <span className="font-semibold uppercase">Get in touch</span>
              <ArrowRight />
            </button>
            <div
              className="flex items-center gap-6 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="hidden md:block text-xl md:text-2xl font-medium">
                Menu
              </span>
              <Menu />
            </div>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={showMenu ? "visible" : "hidden"}
          exit="exit"
          className="bg-black shadow-xl rounded-3xl text-white p-8 absolute w-[350px] md:w-[600px] h-fit right-4 top-4"
        >
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center text-lg">
              <span className="text-white/80">Menu</span>
              <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                <span className="text-lg">Close</span>
                <div className="border rounded-full p-3 border-white/50">
                  <X />
                </div>
              </div>
            </div>
            <nav className="flex flex-col gap-6 md:gap-8 text-3xl md:text-5xl">
              {headerLinks.map((item, index) => (
                <Link key={index} href={item.link}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:justify-between mt-6">
            <div className="flex flex-col gap-3 font-medium text-lg md:text-2xl justify-end">
              <span className="underline">hello@kreativy.studio</span>
              <span className="underline">+31 222 433 112</span>
            </div>
            <div className="flex flex-col gap-3 font-medium text-lg md:text-2xl">
              <span>Behance</span>
              <span>Dribbble</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
