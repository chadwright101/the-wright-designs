import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "../button";

import portfolioList from "../../data/portfolio/portfolio-list.json";

interface Props {
  cssClasses?: string;
}

const PortfolioComponent = ({ cssClasses }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={`flex flex-col gap-[70px] items-center ${cssClasses}`}>
      {/* mobile viewport */}

      {portfolioList.map(({ title, image, buttonUrl }, index) => (
        <div key={index} className="flex flex-col gap-10 slides:hidden">
          <h2 key={index} className="text-subheading text-center">
            {title}
          </h2>
          <Link href={buttonUrl} target="_blank">
            <Image
              src={image.mobile.src}
              alt={image.mobile.alt}
              width={400}
              height={900}
            />
          </Link>
          <Button
            url={buttonUrl}
            type="button"
            cssClasses="mx-auto"
            target="_blank"
          >
            View Website
          </Button>
        </div>
      ))}

      {/* desktop viewport */}

      {portfolioList.map(({ title, image, buttonUrl }, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div key={index} className="hidden flex-col gap-10 slides:flex">
            <h2 className="text-subheading text-center">{title}</h2>
            <Link
              href={buttonUrl}
              target="_blank"
              className="flex translate-x-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="z-10 my-auto">
                <Image
                  src={image.mobile.src}
                  alt={image.mobile.alt}
                  width={350}
                  height={800}
                  className={`object-contain drop-shadow-md w-[190px] desktop:w-[260px] transform  duration-[550ms] ease-in-out ${
                    isHovered && "scale-[1.11]"
                  }`}
                />
              </div>
              <div>
                <Image
                  src={image.desktop.src}
                  alt={image.desktop.alt}
                  width={950}
                  height={400}
                  className={`object-contain -translate-x-5 drop-shadow-md w-[725px] desktop:w-[1000px] transform duration-[600ms] ease-in-out ${
                    isHovered && "scale-[1.04]"
                  }`}
                />
              </div>
            </Link>
            <Button
              url={buttonUrl}
              type="button"
              cssClasses="mx-auto"
              target="_blank"
            >
              View Website
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default PortfolioComponent;
