"use client";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null); // Use ref for paragraph
  const [words, setWords] = useState<(string | null)[]>([]);
  useEffect(() => {
    const text = paragraphRef.current; // Use ref to get the paragraph element
    if (!text) return;
    const splitText = new SplitType(text, { types: "words", tagName: "span" });
    if (!splitText) return;
    const splitWords = splitText.words
      ? Array.from(splitText.words).map((word) => word.textContent)
      : [];
    setWords(splitWords);
    gsap.from(splitText.words, {
      opacity: 0.15,
      stagger: 1,
      ease: "none",
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        once: true,
      },
    });
  }, []);

  return (
    <section className="py-14 md:py-24">
      <div className="px-6 md:px-12">
        <div className="flex flex-col gap-10 md:gap-20">
          <motion.div
            initial={{ y: "50%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-row items-center justify-center md:justify-between"
          >
            <span className="text-lg md:text-2xl">
              Digital Agency based in{" "}
              <span className="underline font-medium text-lg md:text-2xl">
                SYDNEY, AU
              </span>
            </span>
            <button className="group hidden md:flex gap-2 text-lg items-center border border-black py-4 px-6 rounded-full">
              <span className="font-semibold uppercase">Get in touch</span>
              <div className="group-hover:translate-x-2 duration-300 ease-out">
                <ArrowRight />
              </div>
            </button>
          </motion.div>
          <motion.p
            ref={paragraphRef}
            id="about-text"
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-5xl leading-snug"
          >
            Based in the vibrant heart of Sydney, Australia, Kreativy is not
            just a digital agency; we&apos;re your partners in creativity. Our
            mission is to turn your dreams into reality, one pixel at a time.
            With a diverse team of designers, developers, and innovators,
            we&apos;re constantly pushing the boundaries of what&apos;s possible
            in the digital world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <button className="group flex md:hidden w-full justify-center gap-2 text-lg items-center border border-black py-4 px-6 rounded-full">
              <span className="font-semibold uppercase">Get in touch</span>
              <div className="group-hover:translate-x-2 duration-300 ease-out">
                <ArrowRight />
              </div>
            </button>
            <div className="flex flex-col gap-6 md:flex-row justify-between md:items-end">
              <span className="underline text-lg md:text-2xl font-medium">
                ABOUT KREATIVY
              </span>
              <div className="flex flex-col gap-4 underline text-lg md:text-2xl font-medium md:text-right">
                <span>hello@kreativy.studio</span>
                <span>+31 222 433 112</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
