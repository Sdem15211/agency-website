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
    x: "100vw",
    y: "-50%",
  },
  visible: {
    x: 0,
    y: 0,
    transition: { type: "spring", duration: 0.85 },
  },
};

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="overflow-x-hidden">
      <div className="md:px-12 px-6 overflow-x-hidden">
        <div className="flex justify-between items-center mt-16 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-3xl gap-[1px] flex"
          >
            <span className="font-light">Krea</span>
            <span className="font-medium">tivy</span>
          </motion.div>
          <div className="flex items-center gap-12">
            <motion.button
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              className="group hidden md:flex gap-2 text-lg items-center border border-black py-4 px-6 rounded-full"
            >
              <span className="font-semibold uppercase">Get in touch</span>
              <div className="group-hover:translate-x-2 duration-300 ease-out">
                <ArrowRight />
              </div>
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              className="flex items-center gap-6 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="hidden md:block text-xl md:text-2xl font-medium">
                Menu
              </span>
              <Menu />
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={showMenu ? "visible" : "hidden"}
          className="bg-black shadow-xl rounded-3xl text-white p-8 absolute w-[350px] md:w-[600px] h-fit right-4 top-4"
        >
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center text-lg">
              <span className="text-neutral-40">Menu</span>
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
                <Link
                  key={index}
                  href={item.link}
                  onClick={() => setShowMenu(false)}
                >
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
