import Image from "next/image";

import Button from "@/components/button";
import FadeIn from "@/components/fade-in";

import whyUsList from "../../data/home/why-us-list.json";

interface Props {
  cssClasses?: string;
}

const WhyUs = ({ cssClasses }: Props) => {
  return (
    <section className={`${cssClasses}`}>
      <h2 className="text-heading text-center mb-10">Why us?</h2>
      <ul className="flex flex-wrap gap-12 justify-center tablet:justify-around tablet:gap-8">
        {whyUsList.map(({ heading, paragraph, image, delay }, index) => (
          <li className="max-w-[550px] tablet:max-w-[330px]" key={index}>
            <ul className="flex flex-col gap-4 items-center text-center">
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
              <li key={index}>
                <p>{paragraph.first}</p>
              </li>
              <li key={index}>
                <p>{paragraph.second}</p>
              </li>
              <li key={index}>
                <p>{paragraph.third}</p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        url="/portfolio"
        cssClasses="mx-auto mt-14 tablet:mt-10"
      >
        View our portfolio
      </Button>
    </section>
  );
};

export default WhyUs;