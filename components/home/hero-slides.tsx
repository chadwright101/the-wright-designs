import { useState, useEffect } from "react";
import heroSlidesList from "../../data/home/hero-slides-list.json";

interface Props {
  variant: HeroSlidesVariant;
}

export enum HeroSlidesVariant {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
}

interface Slide {
  text: {
    heading: string;
    subheading: string;
    list: [string];
  };
  image: {
    src: string;
    alt?: string;
  };
  buttonText: string;
  variant: HeroSlidesVariant;
}

const allSlides = heroSlidesList as [Slide];

const HeroSlides = ({ variant }: Props) => {
  const [slides, setSlides] = useState<[Slide]>(allSlides);

  useEffect(() => {
    const newSlides = allSlides.filter(
      ({ variant: slideVariant }) => slideVariant === variant
    );
    setSlides(newSlides);
  }, [variant]);

  if (variant === HeroSlidesVariant.Slide1) {
    return (
      <ul>
        {slides.map(({ text, image, buttonText }, index) => (
          <li key={index}>
            <h1>{text.heading}</h1>
          </li>
        ))}
      </ul>
    );
  } else if (variant === HeroSlidesVariant.Slide2) {
    return (
      <>
        <h1>Slide 2</h1>
      </>
    );
  }
};

export default HeroSlides;
