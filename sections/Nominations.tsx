import Image from "next/image";

export const Nominations = () => {
  return (
    <section className="py-14 md:py-24 bg-black text-white">
      <div className="px-6 md:px-12">
        <div className="flex flex-col items-end mb-10 md:mb-16">
          <h2 className="text-3xl md:text-8xl mb-6 text-right">
            Nominated as the Agency of the Year among the top Digital Agencies
            globally.
          </h2>
          <div className="relative w-40 h-40 md:w-60 md:h-60">
            <Image
              src="/assets/images/agencyofyear.png"
              alt="Agency of the Year"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-end gap-6">
          <div className="bg-gray-300 flex items-center justify-center h-[660px] w-full lg:w-1/2 p-10">
            <div className="relative w-full h-full">
              <Image
                src="/assets/images/awwwards.png"
                alt="Awwwards"
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <div className="bg-blue-100 p-6 flex items-end justify-end h-[480px] w-full lg:w-1/3">
            <p className="text-black text-left text-4xl font-bold uppercase">
              awwwards site of the day & developer award
            </p>
          </div>
          <div className="bg-green-100 p-6 flex items-end justify-end h-[400px] w-full lg:w-1/3">
            <p className="text-black text-left text-4xl font-bold uppercase">
              FWA site of the day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
