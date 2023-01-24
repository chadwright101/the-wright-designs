import Image from "next/image";

import Button, { ButtonVariant } from "@/components/button";

import slideImage from "../../../public/img/Laptop-2.png";

import heroSlide2 from "../../../data/home/hero-slides/hero-slide2.json";

interface Props {
  cssClasses?: string;
}

const HeroSlide1 = ({ cssClasses }: Props) => {
  const {
    text: { heading, subheading },
    buttonText,
  } = heroSlide2;

  return (
    <div
      className={`flex flex-col gap-6 items-center tablet:flex-row tablet:justify-between tablet:px-[100px] tablet:mb-[10px] ${cssClasses}`}
    >
      <div className="tablet:flex flex-col items-start gap-6">
        <h2 className="text-heading text-center tablet:text-[2.75rem] tablet:text-left">
          {heading}
        </h2>
        <div className="hidden tablet:block h-px w-full bg-gradient-to-r from-blue via-blue to-beige"></div>
        <ul className="hidden text-subheading list-disc list-inside font-light tablet:block">
          {heroSlide2.text.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Image
        src={slideImage}
        alt="Computer screen showing a quality website"
        className="h-full max-w-[250px] tablet:min-w-[350px]"
      ></Image>
      <ul className="text-center text-subheading list-disc list-inside font-light tablet:hidden">
        {heroSlide2.text.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Button url="/portfolio" variant={ButtonVariant.Blue}>
        View our portfolio
      </Button>
    </div>
  );
};

export default HeroSlide1;
