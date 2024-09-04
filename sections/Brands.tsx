import React from "react";
import Image from "next/image";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center justify-center">
          {brandImages.map((image, index) => (
            <div
              key={index}
              className="lg:w-[268px] lg:h-[268px] w-[200px] h-[200px] relative flex items-center justify-center"
            >
              <Image
                src={`/assets/images/${image}`}
                alt={`Brand logo ${index + 1}`}
                fill
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
