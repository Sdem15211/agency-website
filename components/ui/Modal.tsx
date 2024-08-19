import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

type Service = {
  image: string;
  title: string;
  description: string;
};

type ModalProps = {
  modal: { active: boolean; index: number };
  services: Service[];
};

export const Modal: React.FC<ModalProps> = ({ modal, services }) => {
  const { active, index } = modal;
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      moveContainerX(pageX);
      moveContainerY(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!Array.isArray(services)) {
    return null;
  }

  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className="rounded-xl h-[300px] w-[450px] flex justify-center items-center absolute overflow-hidden pointer-events-none"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="h-full w-full absolute duration-500 transition-[top] ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
      >
        {services.map((service, idx) => (
          <div
            className="relative w-full h-full flex items-center justify-center"
            key={`modal_${idx}`}
          >
            <Image
              src={`/assets/images/${service.image}`}
              width={450}
              height={0}
              alt="image"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
