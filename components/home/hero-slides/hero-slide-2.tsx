import Image from "next/image";

import Button from "@/components/button";

import heroSlides from "../../../data/home/hero-slides.json";

interface Props {
  cssClasses?: string;
}

const HeroSlide2 = ({ cssClasses }: Props) => {
  const {
    text: { heading, list },
    button,
    image,
  } = heroSlides.slide2;

  return (
    <>
      {/* mobile view */}

      <div
        className={`grid grid-rows-[105px_250px_125px] phoneLarge:grid-rows-[100px_300px_125px] tablet:grid-rows-[100px_350px_125px] gap-4 tablet2:hidden ${cssClasses}`}
      >
        <h2 className="text-heading text-center self-center">{heading}</h2>
        <Image
          src={image.src}
          alt={image.alt}
          width={550}
          height={700}
          className="h-auto w-[375px] justify-self-center self-center drop-shadow-md phoneLarge:w-[450px] tablet:w-[525px]"
          quality={50}
        ></Image>
        <ul className="list-disc text-subheading font-quicksand text-center list-inside self-center">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* desktop view */}

      <div
        className={`hidden tablet2:grid tablet2:grid-cols-[400px_1fr] tablet3:grid-cols-[450px_1fr] px-[100px] ${cssClasses}`}
      >
        <div className="grid grid-rows-[150px_20px_180px_50px]">
          <h2 className="text-[2.75rem]">{heading}</h2>
          <div className="h-px bg-gradient-to-r from-blue via-blue to-beige self-center"></div>
          <ul className="list-disc text-[1.65rem] font-quicksand ml-4 self-center">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button url={button.url} blueBackground beigeArrows beigeText>
            {button.text}
          </Button>
        </div>
        <div className="translate-y-4 justify-self-end slides2:justify-self-center flex items-center">
          <Image
            src={image.src}
            alt={image.alt}
            width={700}
            height={600}
            className="h-auto w-[550px] self-center"
            quality={50}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default HeroSlide2;
