import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brandImages = [
  "pierre.png",
  "adidas.png",
  "apple.png",
  "beats.png",
  "grey.png",
  "sonos.png",
  "nike.png",
  "palm.png",
];

const Brands: React.FC = () => {
  return (
    <section className="py-14 md:py-28">
      <div className="mx-auto px-6 md:px-28">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center justify-items-center">
          {brandImages.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={index}
              className="lg:w-[268px] lg:h-[268px] w-[150px] h-[150px] relative flex items-center justify-center text-center"
            >
              <Image
                src={`/assets/images/${image}`}
                alt={`Brand logo ${index + 1}`}
                fill
                objectFit="cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
