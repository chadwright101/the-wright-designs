import Image from "next/image";
import Link from "next/link";

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
      <Splide
        options={{
          autoplay: true,
          type: "loop",
          interval: 2500,
          speed: 1500,
          perPage: 3,
          pagination: false,
          arrows: false,
          lazyLoad: "nearby",
          breakpoints: {
            425: {
              perPage: 1,
              pagination: true,
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
            <Link href={url}>
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
    </section>
  );
};

export default OurClients;
