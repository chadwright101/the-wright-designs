import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import classnames from "classnames";
import { useSpring, animated, easings } from "@react-spring/web";

import Button from "../button";
import SwipeRightToLeft from "../swipe-right-left";
import SwipeLeftToRight from "../swipe-left-right";
import PortfolioScroller from "./portfolio-scroller";
import PortfolioTechToggle, {
  TechToggleVariant,
} from "./portfolio-tech-toggle";

import portfolioList from "../../data/portfolio/portfolio-list.json";
import techList from "../../data/portfolio/tech-list.json";

import swipeMeIcon from "public/icons/swipe-me.svg";

interface Props {
  cssClasses?: string;
}

const PortfolioComponent = ({ cssClasses }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const swipeMe = useSpring({
    from: { y: 75, opacity: 0.85 },
    to: { y: -75, opacity: 0 },
    delay: 1000,
    loop: true,
    reset: true,
    config: { duration: 1350, easing: easings.easeInSine },
  });

  const swipeMeFadeAway = useSpring({
    from: { opacity: 1, zIndex: 100 },
    to: { opacity: 0 },
    delay: 7500,
  });

  return (
    <section
      className={`flex flex-wrap gap-[50px] items-start justify-center overflow-hidden ${cssClasses}`}
    >
      {/* mobile viewport */}

      {portfolioList.map(
        (
          {
            title,
            image,
            buttonUrl,
            fromLeft,
            loading,
            swipeMeAnimation,
            blankPhone,
          },
          index
        ) => (
          <div
            key={index}
            className="flex flex-col gap-10 items-center tablet2:hidden w-[330px]"
          >
            <h2 className="text-subheading text-center">{title}</h2>

            <div>
              {fromLeft ? (
                <SwipeRightToLeft>
                  {swipeMeAnimation && (
                    <animated.div style={swipeMeFadeAway} className="absolute">
                      <animated.div style={swipeMe}>
                        <Image
                          src={swipeMeIcon}
                          alt="Arrow icon"
                          className="translate-x-[235px] translate-y-[320px]"
                        />
                      </animated.div>
                    </animated.div>
                  )}
                  <PortfolioScroller
                    src={image.scrollImage.src}
                    alt={image.mobile.alt}
                  />
                  <Image
                    src={blankPhone}
                    alt={image.mobile.alt}
                    width={280}
                    height={900}
                    className="drop-shadow-md"
                    loading={loading ? "eager" : "lazy"}
                    quality={50}
                  />
                </SwipeRightToLeft>
              ) : (
                <SwipeLeftToRight>
                  {swipeMeAnimation && (
                    <animated.div style={swipeMeFadeAway} className="absolute">
                      <animated.div style={swipeMe}>
                        <Image
                          src={swipeMeIcon}
                          alt="Arrow icon"
                          className="translate-x-[235px] translate-y-[320px]"
                        />
                      </animated.div>
                    </animated.div>
                  )}
                  <PortfolioScroller
                    src={image.scrollImage.src}
                    alt={image.mobile.alt}
                    loading={loading ? "eager" : "lazy"}
                  />
                  <Image
                    src={blankPhone}
                    alt={image.mobile.alt}
                    width={280}
                    height={900}
                    className="drop-shadow-md"
                    loading={loading ? "eager" : "lazy"}
                    quality={50}
                  />
                </SwipeLeftToRight>
              )}
            </div>
            {index === 0 && (
              <PortfolioTechToggle
                variant={TechToggleVariant.Mobile}
                list={techList.simoneSnoymanPhysio}
              />
            )}
            {index === 1 && (
              <PortfolioTechToggle
                variant={TechToggleVariant.Mobile}
                list={techList.neonProductions}
              />
            )}
            {index === 2 && (
              <PortfolioTechToggle
                variant={TechToggleVariant.Mobile}
                list={techList.siletaEngineers}
              />
            )}
            {index === 3 && (
              <PortfolioTechToggle
                variant={TechToggleVariant.Mobile}
                list={techList.gardenRouteBotox}
              />
            )}
            {index % 2 ? (
              <Button
                url={buttonUrl}
                cssClasses="mx-auto"
                target="_blank"
                blueBackground
                beigeArrows
                beigeText
              >
                View Website
              </Button>
            ) : (
              <Button
                url={buttonUrl}
                cssClasses="mx-auto"
                target="_blank"
                pinkBackground
              >
                View Website
              </Button>
            )}
          </div>
        )
      )}

      {/* desktop viewport */}

      {portfolioList.map(({ title, image, buttonUrl, loading }, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div key={index} className="hidden flex-col gap-10 tablet2:flex">
            <h2 className="text-subheading text-center">{title}</h2>

            <Link
              href={buttonUrl}
              target="_blank"
              className="flex translate-x-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {index % 2 ? (
                <>
                  <Image
                    src={image.desktop.src}
                    alt={image.desktop.alt}
                    width={950}
                    height={400}
                    className={classnames(
                      "object-contain drop-shadow-md w-[725px] desktop:w-[1000px] transform duration-[650ms] ease-in-out",
                      {
                        "scale-[1.04]": isHovered,
                      }
                    )}
                    loading={loading ? "eager" : "lazy"}
                    quality={50}
                  />
                  <SwipeRightToLeft delay={125}>
                    <Image
                      src={image.mobile.src}
                      alt={image.mobile.alt}
                      width={350}
                      height={800}
                      className={classnames(
                        "z-10 my-auto object-contain drop-shadow-md w-[190px] desktop:w-[230px] transform  duration-[550ms] -translate-x-5 ease-in-out desktop:translate-y-[18px]",
                        {
                          "scale-[1.075] desktop:scale-[1.155]": isHovered,
                        }
                      )}
                      loading={loading ? "eager" : "lazy"}
                      quality={50}
                    />
                  </SwipeRightToLeft>
                </>
              ) : (
                <>
                  <SwipeLeftToRight>
                    <Image
                      src={image.mobile.src}
                      alt={image.mobile.alt}
                      width={350}
                      height={800}
                      className={classnames(
                        "z-10 my-auto object-contain drop-shadow-md w-[190px] desktop:w-[230px] transform  duration-[550ms] ease-in-out desktop:translate-y-[18px]",
                        {
                          "scale-[1.075] desktop:scale-[1.155]": isHovered,
                        }
                      )}
                      loading={loading ? "eager" : "lazy"}
                      quality={50}
                    />
                  </SwipeLeftToRight>
                  <Image
                    src={image.desktop.src}
                    alt={image.desktop.alt}
                    width={950}
                    height={400}
                    className={classnames(
                      "object-contain -translate-x-5 drop-shadow-md w-[725px] desktop:w-[1000px] transform duration-[650ms] ease-in-out",
                      {
                        "scale-[1.04]": isHovered,
                      }
                    )}
                    loading={loading ? "eager" : "lazy"}
                    quality={50}
                  />
                </>
              )}
            </Link>
            {index === 0 && (
              <PortfolioTechToggle
                variant={TechToggleVariant.Desktop}
                list={techList.simoneSnoymanPhysio}
              />
            )}
            {index === 1 && (
              <PortfolioTechToggle
                variant={TechToggleVariant.Desktop}
                list={techList.neonProductions}
              />
            )}
            {index === 2 && (
              <PortfolioTechToggle
                variant={TechToggleVariant.Desktop}
                list={techList.siletaEngineers}
              />
            )}
            {index === 3 && (
              <PortfolioTechToggle
                variant={TechToggleVariant.Desktop}
                list={techList.gardenRouteBotox}
              />
            )}
            <div className="max-w-[225px] mx-auto">
              {index % 2 ? (
                <Button
                  url={buttonUrl}
                  target="_blank"
                  blueBackground
                  beigeText
                  beigeArrows
                >
                  View Website
                </Button>
              ) : (
                <Button
                  url={buttonUrl}
                  target="_blank"
                  pinkBackground
                  blueText
                  blueArrows
                >
                  View Website
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PortfolioComponent;
