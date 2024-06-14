import Image from "next/image";
import Button from "../button";

const HeroComponent = () => {
  return (
    <main className="pt-10 px-5 -mx-5 tablet:px-10 tablet:-mx-10 bg-[url('/assets/images/hero-background.webp')] bg-cover bg-center desktop:mx-0">
      <div className="flex flex-col bg-gradient-to-b from-beige/90 from-30% via-45% via-beige/75 to-60% to-beige/95 pt-10 -mt-10 px-5 -mx-5 tablet:px-10 tablet:-mx-10 gap-10 desktopSmall:grid grid-cols-2 desktopSmall:bg-gradient-to-r desktopSmall:from-40% desktopSmall:from-beige/90 desktopSmall:via-60% desktopSmall:via-beige/40 desktopSmall:to-90% desktopSmall:to-beige/75 desktopSmall:py-10">
        <div className="desktopSmall:w-[476px] desktopSmall:grid gap-5">
          <h1 className="text-[24px] tracking-[0.48px] leading-[120%] font-extralight uppercase grid gap-y-1.5 pb-3 border-b-4 border-pink min-[320px]:grid-cols-[1fr_0px] phone:grid-cols-1 desktopSmall:grid-cols-[1fr_37px] desktopSmall:text-[21.75px] desktopSmall:gap-x-5 desktopSmall:font-normal desktopSmall:max-h-[231.52px]">
            <span className="min-[320px]:col-span-2 phone:col-span-1">
              Elevate your online presence with
            </span>
            <span className="hidden row-span-2 font-thin desktopSmall:block text-center text-[24px] [writing-mode:vertical-lr] pl-2 border-l-2 border-blue/25">
              Plettenberg Bay
            </span>
            <span className="grid min-[320px]:grid-cols-[1fr_32px] phone:grid-cols-1 ">
              <span className="text-[52px] font-medium tracking-[1.04px] leading-[120%] max-w-[315px] phone:max-w-none tablet:text-[66px]">
                The Wright Designs
              </span>
              <span className="font-thin text-paragraph min-[320px]:text-[20px] min-[320px]:[writing-mode:vertical-lr] min-[320px]:pl-2 min-[320px]:border-l border-blue/25 min-[320px]:text-center leading-[120%] phone:[writing-mode:horizontal-tb] phone:p-0 phone:border-l-0 phone:text-left phone:text-paragraph desktopSmall:hidden ">
                Plettenberg Bay
              </span>
            </span>
          </h1>
          <div className="hidden gap-5 desktopSmall:grid">
            <h2 className="text-[20px] tracking-[0.6px] font-extralight normal-case">
              A web design & development team dedicated to providing modern
              online solutions for small to medium sized businesses.
            </h2>
            <ul className="bg-pink p-5 rounded-lg grid gap-3 font-light text-[20px] small-caps">
              <li className="text-white tracking-[0.15px]">Web & app design</li>
              <hr className="text-white/25" />
              <li className="text-white tracking-[0.15px]">
                Frontend & backend development
              </li>
              <hr className="text-white/25" />
              <li className="text-white tracking-[0.15px]">
                Ongoing maintenance
              </li>
              <hr className="text-white/25" />
              <li className="text-white tracking-[0.15px]">
                Social media marketing campaigns
              </li>
              <li className="mt-2">
                <Button url="#contact" buttonColor="beige" cssClasses="w-full">
                  Get in Touch
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src="/assets/graphics/hero-image.png"
          alt=""
          width={624}
          height={496}
          className="m-auto"
          sizes="(max-width: 425px) 90vw, (max-width:800px) 75vw, 50vw"
        />
        <div className="grid gap-10 desktopSmall:hidden">
          <h2 className="text-[20px] tracking-[0.6px] font-extralight normal-case">
            A web design & development team dedicated to providing modern online
            solutions for small to medium sized businesses.
          </h2>
          <ul className="bg-pink -mx-5 px-5 tablet:px-10 tablet:-mx-10 py-10 grid gap-3 font-light text-[20px] small-caps">
            <li className="text-white tracking-[0.15px]">Web & app design</li>
            <hr className="text-white/25" />
            <li className="text-white tracking-[0.15px]">
              Frontend & backend development
            </li>
            <hr className="text-white/25" />
            <li className="text-white tracking-[0.15px]">
              Ongoing maintenance
            </li>
            <hr className="text-white/25" />
            <li className="text-white tracking-[0.15px]">
              Social media marketing campaigns
            </li>
            <li className="mt-2">
              <Button url="#contact" buttonColor="beige" cssClasses="w-full">
                Get in Touch
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HeroComponent;
