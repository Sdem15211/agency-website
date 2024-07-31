import { ArrowRight } from "@/components/icons/ArrowRight";
import { Menu } from "@/components/icons/Menu";

export const Header = () => {
  return (
    <header>
      <div className="md:px-12 px-6">
        <div className="flex justify-between items-center mt-16 md:mt-8">
          <div className="text-2xl md:text-3xl gap-[1px] flex">
            <span className="font-light">Krea</span>
            <span className="font-medium">tivy</span>
          </div>
          <div className="flex items-center gap-12">
            <button className="hidden md:flex gap-2 text-lg items-center border border-black py-4 px-6 rounded-full">
              <span className="font-semibold uppercase">Get in touch</span>
              <ArrowRight />
            </button>
            <div className="flex items-center gap-6">
              <span className="hidden md:block text-2xl font-medium">Menu</span>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
