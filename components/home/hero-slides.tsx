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

const HeroSlides = ({ variant }: Props) => {
  if (variant === HeroSlidesVariant.Slide1) {
    return (
      <>
        <ul>
          {heroSlidesList.map(({ slide }, index) => (
            <li key={index}>
              <h1>{slide.text.heading}</h1>
            </li>
          ))}
        </ul>
      </>
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
