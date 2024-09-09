import React from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white py-12 px-6">
      <div className="px-6 md:px-12">
        <div className="mb-8 border-b border-neutral-80 py-20">
          <motion.h2
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-7xl lg:text-9xl font-normal mb-8 tracking-[-0.04em]"
          >
            Let's chat.
          </motion.h2>
          <div className="flex justify-between items-center w-full">
            <motion.p
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl lg:text-3xl max-w-[600px] font-light"
            >
              Unleashing brand potential through creative design and innovation.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group hidden md:flex gap-2 text-lg items-center border bg-white text-black py-4 px-6 rounded-full"
            >
              <span className="font-semibold uppercase">Get in touch</span>
              <div className="group-hover:translate-x-2 duration-300 ease-out">
                <ArrowRight />
              </div>
            </motion.button>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-12 pt-10">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-2 gap-x-28 gap-y-6 text-2xl font-medium border-b border-neutral-80 pb-10 md:border-none w-full"
            >
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
            </motion.div>
          </div>
          <div className="flex flex-col gap-8 justify-between">
            <motion.div
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex gap-6 font-normal text-lg md:text-2xl"
            >
              <span>Behance</span>
              <span>Dribbble</span>
              <span>LinkedIn</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-3 font-medium text-lg md:text-2xl md:text-right"
            >
              <span className="underline">hello@kreativy.studio</span>
              <span className="underline">+31 222 433 112</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
