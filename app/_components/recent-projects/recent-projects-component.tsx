"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import classnames from "classnames";

import Button from "../button";
import SwipeRightToLeft from "../animations/swipe-right-left";
import SwipeLeftToRight from "../animations/swipe-left-right";
import PortfolioScroller from "./recent-projects-scroller";
import PortfolioTechToggle, {
  TechToggleVariant,
} from "./recent-projects-tech-toggle";

import portfolioList from "@/app/_data/recent-projects/projects-list.json";
import techList from "@/app/_data/recent-projects/tech-list.json";

interface Props {
  cssClasses?: string;
}

interface TechList {
  [key: string]: {
    languages: string[];
    developmentHours: string;
    designHours: string;
    repo?: string;
  };
}

const techListKeys = Object.keys(techList as TechList);

const RecentProjectsComponent = ({ cssClasses }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className={`flex flex-wrap gap-[50px] items-start justify-center overflow-hidden ${cssClasses}`}
    >
      {/* mobile viewport */}

      {portfolioList.map(
        ({ title, image, buttonUrl, fromLeft, blankPhone }, index) => {
          const techKey = techListKeys[index];
          return (
            <div
              key={index}
              className="flex flex-col gap-10 items-center tablet2:hidden w-[330px]"
            >
              <h2 className="text-subheading text-center">{title}</h2>

              <div>
                {fromLeft ? (
                  <SwipeRightToLeft>
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
                      loading={index > 0 ? "eager" : "lazy"}
                      quality={60}
                      sizes="(max-width:425px) 50vw,(max-width:900px) 20vw, 5vw"
                    />
                  </SwipeRightToLeft>
                ) : (
                  <SwipeLeftToRight>
                    <PortfolioScroller
                      src={image.scrollImage.src}
                      alt={image.mobile.alt}
                      loading={index > 0 ? "eager" : "lazy"}
                    />
                    <Image
                      src={blankPhone}
                      alt={image.mobile.alt}
                      width={280}
                      height={900}
                      className="drop-shadow-md"
                      loading={index > 0 ? "eager" : "lazy"}
                      quality={60}
                      sizes="(max-width:425px) 50vw, (max-width:900px) 20vw, 20vw,"
                    />
                  </SwipeLeftToRight>
                )}
              </div>
              <PortfolioTechToggle
                variant={TechToggleVariant.Mobile}
                list={techList[techKey]}
              />
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
          );
        }
      )}

      {/* desktop viewport */}

      {portfolioList.map(({ title, image, buttonUrl }, index) => {
        const isHovered = hoveredIndex === index;
        const techKey = techListKeys[index];
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
                    width={1100}
                    height={580}
                    className={classnames(
                      "object-contain drop-shadow-md w-[725px] desktop:w-[1000px] transform duration-[650ms] ease-in-out",
                      {
                        "scale-[1.02]": isHovered,
                      }
                    )}
                    loading={index > 0 ? "eager" : "lazy"}
                    quality={60}
                    sizes="(max-width:1400px) 25vw, 48vw,"
                  />
                  <SwipeRightToLeft delay={125}>
                    <Image
                      src={image.mobile.src}
                      alt={image.mobile.alt}
                      width={300}
                      height={600}
                      className={classnames(
                        "z-10 my-auto object-contain drop-shadow-md w-[190px] desktop:w-[230px] transform  duration-[550ms] -translate-x-5 ease-in-out desktop:translate-y-[18px]",
                        {
                          "scale-[1.05] desktop:scale-[1.125]": isHovered,
                        }
                      )}
                      loading={index > 0 ? "eager" : "lazy"}
                      quality={60}
                      sizes="(max-width:1400px) 15vw, 15vw,"
                    />
                  </SwipeRightToLeft>
                </>
              ) : (
                <>
                  <SwipeLeftToRight>
                    <Image
                      src={image.mobile.src}
                      alt={image.mobile.alt}
                      width={300}
                      height={600}
                      className={classnames(
                        "z-10 my-auto object-contain drop-shadow-md w-[190px] desktop:w-[230px] transform  duration-[550ms] ease-in-out desktop:translate-y-[18px]",
                        {
                          "scale-[1.05] desktop:scale-[1.125]": isHovered,
                        }
                      )}
                      loading={index > 0 ? "eager" : "lazy"}
                      quality={60}
                      sizes="(max-width:1400px) 15vw, 15vw,"
                    />
                  </SwipeLeftToRight>
                  <Image
                    src={image.desktop.src}
                    alt={image.desktop.alt}
                    width={1100}
                    height={580}
                    className={classnames(
                      "object-contain -translate-x-5 drop-shadow-md w-[725px] desktop:w-[1000px] transform duration-[650ms] ease-in-out",
                      {
                        "scale-[1.02]": isHovered,
                      }
                    )}
                    loading={index > 0 ? "eager" : "lazy"}
                    quality={60}
                    sizes="(max-width:1400px) 25vw, 48vw,"
                  />
                </>
              )}
            </Link>
            <PortfolioTechToggle
              variant={TechToggleVariant.Desktop}
              list={techList[techKey]}
            />
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

export default RecentProjectsComponent;
