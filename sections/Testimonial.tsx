import Image from "next/image";
import { motion } from "framer-motion";

export const Testimonial: React.FC = () => {
  return (
    <section className="py-14 md:py-28">
      <div className="px-6 md:px-28">
        <motion.p
          initial={{ opacity: 0, y: "20%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:text-5xl text-3xl font-normal leading-snug text-center"
        >
          I had the pleasure of working with Ivan on a recent project, and I was
          blown away by their creativity and attention to detail. I highly
          recommend Kreativy for anyone looking for a talented and professional
          designer.
        </motion.p>
        <div className="mt-16 flex flex-col gap-7 max-w-[400px]mx-auto items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="size-[72px] rounded-full relative"
          >
            <Image
              src="/assets/images/avatar.png"
              alt="Testimonial"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="flex-col lg:flex-row flex gap-2">
            <motion.span
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl font-normal leading-snug text-center"
            >
              Jacob McDany,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl font-normal leading-snug text-center text-neutral-70"
            >
              CEO of Rackspace
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
