import Image from "next/image";

import Button from "@/app/_components/button";

import heroSlides from "@/app/_data/home/hero-slides.json";

interface Props {
  cssClasses?: string;
}

const HeroSlide1 = ({ cssClasses }: Props) => {
  const {
    text: { heading, subheading },
    button,
    image,
  } = heroSlides.slide1;

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
          width={650}
          height={390}
          className="h-auto w-[400px] -translate-x-[10px] tablet2:-translate-x-0 justify-self-center self-center phoneLarge:w-[550px] tablet:w-[650px]"
          priority
          quality={50}
          sizes="(max-width: 425px) 35vw, (max-width: 900px) 55vw, 35vw"
        ></Image>
        <h3 className="text-subheading text-center font-quicksand max-w-[400px] justify-self-center self-center">
          {subheading}
        </h3>
      </div>

      {/* desktop view */}

      <div
        className={`hidden tablet2:grid tablet2:grid-cols-[400px_1fr] tablet3:grid-cols-[450px_1fr] px-[100px] ${cssClasses}`}
      >
        <div className="grid tablet2:grid-rows-[150px_20px_180px_50px]">
          <h2 className="text-[2.75rem]">{heading}</h2>
          <div className="h-px bg-gradient-to-r from-blue via-blue to-beige self-center"></div>
          <h3 className="text-[1.75rem] font-quicksand self-center">
            {subheading}
          </h3>
          <Button url={button.url} pinkBackground>
            {button.text}
          </Button>
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={650}
          height={400}
          className="h-auto w-[650px] self-center"
          priority
          quality={50}
        ></Image>
      </div>
    </>
  );
};

export default HeroSlide1;
