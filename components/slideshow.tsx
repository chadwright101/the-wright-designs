import Image from "next/image";
import Link from "next/link";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

interface Props {
  containerClasses?: string;
  slideClasses?: string;
}

const Slideshow = ({ containerClasses, slideClasses }: Props) => {
  return (
    <>
      <Splide
        options={{
          rewind: true,
          type: "fade",
          pagination: false,
          autoplay: true,
        }}
        className={`${containerClasses}`}
      >
        <SplideSlide className={`${slideClasses}`}></SplideSlide>
      </Splide>
    </>
  );
};

export default Slideshow;
