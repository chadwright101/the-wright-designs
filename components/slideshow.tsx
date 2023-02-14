import HeroSlide1 from "./home/hero-slides/hero-slide-1";
import HeroSlide2 from "./home/hero-slides/hero-slide-2";
import HeroSlide3 from "./home/hero-slides/hero-slide-3";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Slideshow = () => {
  return (
    <>
      <Splide
        options={{
          pagination: true,
          autoplay: true,
          type: "loop",
          speed: 1500,
          pauseOnHover: true,
          interval: 4500,
          breakpoints: {
            1100: {
              pagination: false,
            },
          },
          drag: false,
        }}
        className="mt-8"
      >
        <SplideSlide className="tablet:pb-20">
          <HeroSlide1 />
        </SplideSlide>
        <SplideSlide>
          <HeroSlide2 />
        </SplideSlide>
        <SplideSlide>
          <HeroSlide3 />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default Slideshow;
