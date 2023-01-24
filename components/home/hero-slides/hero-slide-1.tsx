import Image from "next/image";

import Button from "@/components/button";

import slideImage from "../../../public/img/Laptop-2.png";

import heroSlide1 from "../../../data/home/hero-slides/hero-slide1.json";

interface Props {
  cssClasses?: string;
}

const HeroSlide1 = ({ cssClasses }: Props) => {
  const {
    text: { heading, subheading },
    buttonText,
  } = heroSlide1;

  return (
    <div
      className={`flex flex-col gap-6 items-center tablet:flex-row tablet:justify-between tablet:px-[100px] tablet:mb-[10px] ${cssClasses}`}
    >
      <div className="tablet:flex flex-col items-start gap-6">
        <h2 className="text-heading text-center tablet:text-[2.75rem] tablet:text-left">
          {heading}
        </h2>
        <div className="hidden tablet:block h-px w-full bg-gradient-to-r from-blue via-blue to-beige"></div>
        <h3 className="hidden text-[2rem] font-quicksand tablet:block">
          {subheading}
        </h3>
      </div>
      <Image
        src={slideImage}
        alt="Computer screen showing a quality website"
        className="h-full max-w-[250px] tablet:min-w-[350px]"
      ></Image>
      <h3 className="text-subheading text-center font-quicksand tablet:hidden">
        {subheading}
      </h3>
      <Button url="/portfolio">View our portfolio</Button>
    </div>
  );
};

export default HeroSlide1;
