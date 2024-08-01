import { ArrowRight } from "@/components/icons/ArrowRight";

export const About = () => {
  return (
    <section className="py-14 md:py-24">
      <div className="px-6 md:px-12">
        <div className="flex flex-col gap-10 md:gap-20">
          <div className="flex flex-row items-center justify-center md:justify-between">
            <span className="text-lg md:text-2xl">
              Digital Agency based in{" "}
              <span className="underline font-medium text-lg md:text-2xl">
                SYDNEY, AU
              </span>
            </span>
            <button className="hidden md:flex gap-2 text-lg items-center border border-black py-4 px-6 rounded-full">
              <span className="font-semibold uppercase">Get in touch</span>
              <ArrowRight />
            </button>
          </div>
          <p className="text-3xl md:text-5xl leading-snug">
            Based in the vibrant heart of Sydney, Australia, Kreativy is not
            just a digital agency; we're your partners in creativity. Our
            mission is to turn your dreams into reality, one pixel at a time.
            With a diverse team of designers, developers, and innovators, we're
            constantly pushing the boundaries of what's possible in the digital
            world.
          </p>
          <div className="flex flex-col gap-6">
            <button className="flex md:hidden w-full justify-center gap-2 text-lg items-center border border-black py-4 px-6 rounded-full">
              <span className="font-semibold uppercase">Get in touch</span>
              <ArrowRight />
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
          </div>
        </div>
      </div>
    </section>
  );
};
