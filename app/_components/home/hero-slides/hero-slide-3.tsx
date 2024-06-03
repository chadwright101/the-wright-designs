import Image from "next/image";

import Button from "@/app/_components/button";

import { useSpring, animated } from "@react-spring/web";

import heroSlides from "@/app/_data/home/hero-slides.json";

interface Props {
  cssClasses?: string;
}

const HeroSlide3 = ({ cssClasses }: Props) => {
  const {
    text: { heading, subheading },
    button,
    svg: { client, team, chatSupport, chat },
  } = heroSlides.slide3;

  const clientAnimate = useSpring({
    from: { scale: 0, x: -50 },
    to: { scale: 1 },
    loop: true,
    delay: 2000,
    config: {
      mass: 5,
      tension: 250,
      bounce: 0.25,
    },
  });

  const teamAnimate = useSpring({
    from: { scale: 0, x: 20, y: 20 },
    to: { scale: 1 },
    loop: true,
    delay: 2650,
    config: {
      mass: 5,
      tension: 250,
      bounce: 0.25,
    },
  });

  return (
    <>
      {/* mobile view */}

      <div
        className={`grid grid-rows-[105px_250px_125px] phoneLarge:grid-rows-[100px_300px_125px] tablet:grid-rows-[100px_350px_125px] gap-4 tablet2:hidden ${cssClasses}`}
      >
        <h2 className="text-heading text-center self-center">{heading}</h2>
        <div className="flex justify-center mt-3">
          <div className="flex -mr-6 phoneLarge:-mr-4">
            <Image
              src={client.src}
              alt={client.alt}
              width={110}
              height={110}
              className="phoneSmall:w-[135px] tablet:w-[190px] tablet:h-auto"
              quality={50}
            />
            <animated.div style={clientAnimate}>
              <Image
                src={chatSupport.src}
                alt={chatSupport.alt}
                width={65}
                height={65}
                className="phoneSmall:w-[75px] tablet:w-[100px] tablet:h-auto translate-y-6 translate-x-2 phoneSmall:-translate-y-1 phoneLarge:translate-y-3 tablet:translate-y-0"
                quality={50}
              />
            </animated.div>
          </div>
          <div className="flex -ml-6 phoneLarge:-ml-4">
            <animated.div style={teamAnimate}>
              <Image
                src={chat.src}
                alt={chat.alt}
                width={65}
                height={65}
                className="phoneSmall:w-[75px] tablet:w-[100px] tablet:h-auto translate-y-5 phoneSmall:-translate-y-3 phoneLarge:translate-y-2 tablet:translate-y-0"
                quality={50}
              />
            </animated.div>
            <Image
              src={team.src}
              alt={team.alt}
              width={110}
              height={110}
              className="phoneSmall:w-[135px] tablet:w-[190px] tablet:h-auto"
              quality={50}
            />
          </div>
        </div>
        <h3 className="text-subheading text-center font-quicksand max-w-[400px] tablet:max-w-[550px] justify-self-center self-center">
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
          <h3 className="text-subheading font-quicksand self-center">
            {subheading}
          </h3>
          <Button url={button.url} pinkBackground>
            {button.text}
          </Button>
        </div>
        <div className="flex justify-center tablet2:mt-10 desktop:mt-20 desktop:ml-8">
          <div className="flex -mr-5">
            <Image
              src={client.src}
              alt={client.alt}
              width={200}
              height={200}
              className="w-[140px] h-auto tablet3:w-[150px] desktop:w-[190px]"
              quality={50}
            />
            <animated.div style={clientAnimate}>
              <Image
                src={chatSupport.src}
                alt={chatSupport.alt}
                width={150}
                height={150}
                className="w-[80px] h-auto tablet3:w-[90px] desktop:w-[100px] translate-y-6 desktop:-translate-y-8 desktop:-translate-x-2"
                quality={50}
              />
            </animated.div>
          </div>
          <div className="flex -ml-5">
            <animated.div style={teamAnimate}>
              <Image
                src={chat.src}
                alt={chat.alt}
                width={150}
                height={150}
                className="w-[80px] h-auto tablet3:w-[90px] desktop:w-[100px] translate-y-4 desktop:-translate-y-6"
                quality={50}
              />
            </animated.div>
            <Image
              src={team.src}
              alt={team.alt}
              width={200}
              height={200}
              className="w-[140px] h-auto tablet3:w-[150px] desktop:w-[190px]"
              quality={50}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlide3;
