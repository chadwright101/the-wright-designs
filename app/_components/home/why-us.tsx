import Image from "next/image";

import Button from "@/app/_components/button";
import FadeIn from "@/app/_components/fade-in";
import SwipeLeftToRight from "../swipe-left-right";
import SwipeRightToLeft from "../swipe-right-left";

import whyUsList from "@/app/_data/home/why-us-list.json";

interface Props {
  cssClasses?: string;
}

const WhyUs = ({ cssClasses }: Props) => {
  return (
    <main className={`${cssClasses}`}>
      <h2 className="text-heading text-center mb-10">Why us?</h2>
      <ul className="flex flex-wrap gap-12 justify-center overflow-hidden tablet:justify-around tablet:gap-8">
        {whyUsList.map(({ heading, paragraph, image, delay }, index) => (
          <li key={index} className="max-w-[550px] tablet:max-w-[330px]">
            {index % 2 ? (
              <SwipeLeftToRight delay={delay} key={index}>
                <ul className="flex flex-col gap-4 items-center text-justify">
                  <li key={index} className="flex flex-col items-center gap-4">
                    <FadeIn delay={delay} bounce>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={46}
                        height={46}
                      />
                    </FadeIn>
                    <h3 className="text-subheading">{heading}</h3>
                  </li>
                  <li>
                    <p>{paragraph.first}</p>
                  </li>
                  <li>
                    <p>{paragraph.second}</p>
                  </li>
                  <li>
                    <p>{paragraph.third}</p>
                  </li>
                </ul>
              </SwipeLeftToRight>
            ) : (
              <SwipeRightToLeft delay={delay} key={index}>
                <ul className="flex flex-col gap-4 items-center text-justify">
                  <li key={index} className="flex flex-col items-center gap-4">
                    <FadeIn delay={delay} bounce>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={46}
                        height={46}
                      />
                    </FadeIn>
                    <h3 className="text-subheading">{heading}</h3>
                  </li>
                  <li>
                    <p>{paragraph.first}</p>
                  </li>
                  <li>
                    <p>{paragraph.second}</p>
                  </li>
                  <li>
                    <p>{paragraph.third}</p>
                  </li>
                </ul>
              </SwipeRightToLeft>
            )}
          </li>
        ))}
      </ul>
      <Button
        url="/portfolio"
        cssClasses="mx-auto my-14 tablet:mt-10"
        pinkBackground
      >
        View our portfolio
      </Button>
    </main>
  );
};

export default WhyUs;
