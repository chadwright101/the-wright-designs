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
      className={`flex flex-col gap-6 items-center slides:flex-row slides:justify-between slides:px-[100px] slides:mb-[10px] ${cssClasses}`}
    >
      <div className="slides:flex flex-col items-start gap-6">
        <h2 className="text-heading text-center slides:text-[2.75rem] slides:text-left">
          {heading}
        </h2>
        <div className="hidden slides:block h-px w-full bg-gradient-to-r from-blue via-blue to-beige"></div>
        <ul className="hidden text-subheading list-disc list-inside font-light slides:block">
          {heroSlide2.text.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Button
          url="/portfolio"
          variant={ButtonVariant.Blue}
          cssClasses="hidden slides:flex"
        >
          View our portfolio
        </Button>
      </div>
      <Image
        src={slideImage}
        alt="Computer screen showing a quality website"
        className="h-full max-w-[250px] slides:min-w-[350px]"
      ></Image>
      <ul className="text-center text-subheading list-disc list-inside font-light slides:hidden">
        {heroSlide2.text.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Button
        url="/portfolio"
        variant={ButtonVariant.Blue}
        cssClasses="slides:hidden"
      >
        View our portfolio
      </Button>
    </div>
  );
};

export default HeroSlide1;
