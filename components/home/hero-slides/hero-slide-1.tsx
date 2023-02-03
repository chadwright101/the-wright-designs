import Image from "next/image";

import Button from "@/components/button";

import heroSlides from "../../../data/home/hero-slides.json";

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
        className={`flex flex-col gap-7 items-center slides2:hidden ${cssClasses}`}
      >
        <h2 className="text-heading text-center">{heading}</h2>
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          className="h-full w-[550px] -mt-2 -translate-x-[20px] tablet:w-[750px]"
          priority
          quality={50}
        ></Image>
        <h3 className="text-subheading text-center font-quicksand max-w-[400px] tablet:max-w-[650px]">
          {subheading}
        </h3>
        <Button url={button.url} pinkBackground>
          {button.text}
        </Button>
      </div>

      {/* desktop view */}

      <div
        className={`hidden slides2:grid grid-cols-2 gap-7 items-center px-[100px] mb-[10px] ${cssClasses}`}
      >
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-[2.35rem] slide3:text-[2.75rem] w-[500px] ">
            {heading}
          </h2>
          <div className="h-px w-5/6 bg-gradient-to-r from-blue via-blue to-beige"></div>
          <h3 className="text-[1.75rem] slides3:text-[2rem] font-quicksand">
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
          className="max-w-[450px] h-[269px] slides3:max-w-[550px] slides3:h-[329px] desktop:max-w-[620px] desktop:h-[371px] -mt-2 -translate-x-[20px] slide3:-translate-x-[30px] desktop:-translate-x-[40px] justify-self-center"
          priority
          quality={50}
        ></Image>
      </div>
    </>
  );
};

export default HeroSlide1;
