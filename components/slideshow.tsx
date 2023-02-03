import HeroSlide1 from "./home/hero-slides/hero-slide-1";
import HeroSlide2 from "./home/hero-slides/hero-slide-2";

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
          pagination: true,
          /* autoplay: true, */
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
        className={`py-10 ${containerClasses}`}
      >
        <SplideSlide className={`${slideClasses}`}>
          <HeroSlide1 />
        </SplideSlide>
        <SplideSlide className={`${slideClasses}`}>
          <HeroSlide2 />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default Slideshow;
