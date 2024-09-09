import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="py-14 md:py-28">
      <div className="px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="text-hero leading-none tracking-tighter"
        >
          Design Agency Based in Sydney.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.3 }}
          className="flex justify-end items-center"
        >
          <p className="mt-10 text-2xl text-neutral-70 md:text-right max-w-[1000px] lg:mt-20">
            We're not just a design agency; we're your friendly design
            companions. Let's embark on this creative adventure together and
            bring your vision to life with a friendly, modern, and innovative
            touch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
