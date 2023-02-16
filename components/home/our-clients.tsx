import Image from "next/image";
import Link from "next/link";

import Button from "../button";

import ourClients from "../../data/home/our-clients.json";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface Props {
  cssClasses?: string;
}

const OurClients = ({ cssClasses }: Props) => {
  return (
    <section className={`${cssClasses}`}>
      <h2 className="text-heading text-center mb-10">Our Clients</h2>
      <div className="flex flex-col items-center gap-12">
        <Splide
          options={{
            autoplay: true,
            type: "loop",
            interval: 2500,
            speed: 1500,
            perPage: 3,
            drag: false,
            pagination: false,
            arrows: false,
            lazyLoad: "nearby",
            breakpoints: {
              425: {
                perPage: 1,
              },
              725: {
                perPage: 2,
                gap: "1.5rem",
              },
              900: {
                gap: "1.25rem",
              },
            },
          }}
          className="mt-8"
        >
          {ourClients.map(({ src, alt, url }, index) => (
            <SplideSlide key={index} className="grid place-items-center">
              <Link href={url} target="_blank">
                <Image
                  src={src}
                  alt={alt}
                  width={350}
                  height={350}
                  className="drop-shadow-md w-[300px] phoneSmall:w-[200px] h-auto phoneLarge:w-[250px] tablet2:w-[300px] desktop:w-[350px]"
                />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
        <Button url="/portfolio" blueBackground beigeArrows beigeText>
          View more
        </Button>
      </div>
    </section>
  );
};

export default OurClients;
