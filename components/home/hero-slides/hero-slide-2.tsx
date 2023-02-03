import Image from "next/image";

import Button from "@/components/button";

import heroSlides from "../../../data/home/hero-slides.json";

interface Props {
  cssClasses?: string;
}

const HeroSlide1 = ({ cssClasses }: Props) => {
  const {
    text: { heading, list },
    button,
    images,
  } = heroSlides.slide2;

  return (
    <>
      {/* mobile view */}

      <div
        className={`flex flex-col gap-7 tablet:gap-8 items-center slides2:hidden ${cssClasses}`}
      >
        <h2 className="text-center text-[2.75rem] max-w-[400px]">{heading}</h2>
        <div className="flex">
          <Image
            src={images.mobile.first.src}
            alt={images.mobile.first.alt}
            width={150}
            height={250}
            className="h-[234px] -rotate-12 w-[115px] tablet:w-[155px] tablet:h-[315px] drop-shadow-md translate-x-4"
            quality={50}
          ></Image>
          <Image
            src={images.mobile.second.src}
            alt={images.mobile.second.alt}
            width={150}
            height={250}
            className="h-[234px] w-[115px] tablet:w-[155px] tablet:h-[315px] drop-shadow-md z-10 -translate-y-2"
            quality={50}
          ></Image>
          <Image
            src={images.mobile.third.src}
            alt={images.mobile.third.alt}
            width={150}
            height={250}
            className="h-[234px] tablet:w-[155px] tablet:h-[315px] -translate-x-4 rotate-12 w-[115px] drop-shadow-md"
            quality={50}
          ></Image>
        </div>
        <ul className="list-disc text-subheading font-quicksand text-center list-inside">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Button url={button.url} blueBackground beigeArrows beigeText>
          {button.text}
        </Button>
      </div>

      {/* desktop view */}

      <div
        className={`hidden slides2:grid grid-cols-2 gap-7 px-[100px] slides:mb-[10px] ${cssClasses}`}
      >
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-heading text-center slides:text-[2.75rem] slides:text-left">
            {heading}
          </h2>
          <div className="h-px bg-gradient-to-r from-blue via-blue to-beige w-5/6"></div>
          <ul className="list-disc text-subheading font-quicksand ml-4">
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
            src={images.mobile.first.src}
            alt={images.mobile.first.alt}
            width={150}
            height={254}
            className="drop-shadow-md translate-x-6 h-[305px] w-[150px] slides3:w-[175px] slides3:h-[356px] -rotate-12"
            quality={50}
          ></Image>
          <Image
            src={images.mobile.second.src}
            alt={images.mobile.second.alt}
            width={150}
            height={254}
            className="h-[305px] w-[150px] drop-shadow-md z-10 slides3:w-[175px] slides3:h-[356px] -translate-y-2"
            quality={50}
          ></Image>
          <Image
            src={images.mobile.third.src}
            alt={images.mobile.third.alt}
            width={150}
            height={254}
            className="h-[305px] -translate-x-6 rotate-12 w-[150px] drop-shadow-md slides3:w-[175px] slides3:h-[356px]"
            quality={50}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default HeroSlide1;
