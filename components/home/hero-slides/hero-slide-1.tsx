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
      className={`flex flex-col gap-6 items-center slides:flex-row slides:justify-between slides:px-[100px] slides:mb-[10px] ${cssClasses}`}
    >
      <div className="slides:flex flex-col items-start gap-6">
        <h2 className="text-heading text-center slides:text-[2.75rem] slides:text-left">
          {heading}
        </h2>
        <div className="hidden slides:block h-px w-full bg-gradient-to-r from-blue via-blue to-beige"></div>
        <h3 className="hidden text-[2rem] font-quicksand slides:block">
          {subheading}
        </h3>
        <Button url="/portfolio" cssClasses="hidden slides:flex">
          View our portfolio
        </Button>
      </div>
      <Image
        src={slideImage}
        alt="Computer screen showing a quality website"
        className="h-full max-w-[250px] slides:min-w-[350px]"
      ></Image>
      <h3 className="text-subheading text-center font-quicksand slides:hidden">
        {subheading}
      </h3>
      <Button url="/portfolio" cssClasses="slides:hidden">
        View our portfolio
      </Button>
    </div>
  );
};

export default HeroSlide1;
