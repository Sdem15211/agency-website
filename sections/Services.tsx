"use client";
import { Modal } from "@/components/ui/Modal";
import Image from "next/image";
import React, { useState } from "react";

const services = [
  {
    image: "ProductDesign.png",
    title: "Product Design",
    description:
      "Craft unforgettable, user-centric experiences with our product design experts. We transform ideas into beautiful, functional designs that users will adore.",
  },
  {
    image: "GraphicDesign.png",
    title: "Graphic Design",
    description:
      "Beautiful designs are at the heart of great branding. Our talented graphic artists ensure your brand makes a lasting impression through stunning visuals.",
  },
  {
    image: "Branding.png",
    title: "Branding",
    description:
      "Elevate your brand identity with ArtistryLab. We understand the importance of a strong brand, and we'll help you establish a unique and unforgettable one.",
  },
  {
    image: "Illustration.png",
    title: "Illustration",
    description:
      "Add a touch of artistry to your projects with our skilled illustrators. From whimsical to professional, our illustrations will give your projects that extra charm.",
  },
  {
    image: "WebDev.png",
    title: "Web Development",
    description:
      "Let our tech wizards weave their magic online. We create dynamic websites that captivate your audience and provide seamless user experiences.",
  },
  {
    image: "AppDev.png",
    title: "App Development",
    description:
      "Transform your app idea into a reality. Our skilled developers bring your concept to life, creating mobile apps that are both elegant and powerful.",
  },
];

export const Services = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="py-14 md:py-32">
      <div className="px-6 md:px-12">
        <div className="flex justify-between items-center mb-14 md:mb-24">
          <div className="flex flex-col gap-8 justify-center items-center md:items-start">
            <h2 className="text-[56px] lg:text-8xl">Our services</h2>
            <p className="text-2xl lg:text-[32px] max-w-[1000px] text-neutral-90 font-light">
              Our services are more than just solutions, they're opportunities
              to transform your digital presence and achieve your business
              objectives. We're here to make your digital dreams a reality.
            </p>
          </div>
          <button className="underline uppercase hidden md:flex text-2xl">
            View all services
          </button>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setModal({ active: true, index });
              }}
              onMouseLeave={() => {
                setModal({ active: false, index });
              }}
            >
              <div className="flex items-center justify-center">
                <div className="md:hidden w-[330px] h-[200px] relative">
                  <Image
                    src={`/assets/images/${service.image}`}
                    alt={service.title}
                    fill
                  />
                </div>
              </div>
              <div className="border-b border-neutral-30 flex flex-col md:flex-row justify-between md:gap-0 gap-8 py-10 md:py-20">
                <h2 className="pointer-events-none text-4xl md:text-[56px] tracking-wide md:w-1/2">
                  {service.title}
                </h2>
                <p className="pointer-events-none md:w-1/2 text-lg md:text-2xl text-neutral-90 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Modal modal={modal} services={services} />
      </div>
    </section>
  );
};
