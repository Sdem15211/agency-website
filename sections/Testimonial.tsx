import Image from "next/image";

export const Testimonial: React.FC = () => {
  return (
    <section className="py-14 md:py-28">
      <div className="px-6 md:px-28">
        <p className="lg:text-5xl text-3xl font-normal leading-snug text-center">
          I had the pleasure of working with Ivan on a recent project, and I was
          blown away by their creativity and attention to detail. I highly
          recommend Kreativy for anyone looking for a talented and professional
          designer.
        </p>
        <div className="mt-16 flex flex-col gap-7 w-[400px] mx-auto items-center">
          <div className="size-[72px] rounded-full relative">
            <Image
              src="/assets/images/avatar.png"
              alt="Testimonial"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-col lg:flex-row flex gap-2">
            <span className="text-2xl font-normal leading-snug text-center">
              Jacob McDany,
            </span>
            <span className="text-2xl font-normal leading-snug text-center text-neutral-70">
              CEO of Rackspace
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
