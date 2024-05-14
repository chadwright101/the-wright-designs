import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import plusIcon from "public/icons/plus-icon.svg";
import minusIcon from "public/icons/minus-icon.svg";

import { useSpring, animated } from "@react-spring/web";

interface Props {
  list: {
    repo?: string;
    developmentHours: string;
    designHours: string;
    languages: Array<string>;
    translation?: Array<string>;
  };
  variant?: TechToggleVariant;
}

export enum TechToggleVariant {
  Mobile,
  Desktop,
}

const PortfolioTechToggle = ({ list, variant }: Props) => {
  const [techToggle, setTechToggle] = useState(false);

  const [techTextHover, setTechTextHover] = useState(false);

  const [techIconHover, setTechIconHover] = useSpring(() => ({
    to: { scale: 1, rotate: 0 },
  }));

  if (variant === TechToggleVariant.Mobile) {
    return (
      <>
        <button
          onClick={() => setTechToggle(!techToggle)}
          className="flex gap-2 h-6 items-center justify-center py-4 -my-3"
        >
          {!techToggle && (
            <Image src={plusIcon} alt="Plus sign icon" className="h-6 w-6" />
          )}
          {techToggle && (
            <Image src={minusIcon} alt="Plus sign icon" className="h-6 w-6" />
          )}
          <h4 className="text-[1.1rem]">What&#39;s under the hood</h4>
        </button>
        {techToggle && (
          <ul className="text-center font-light -mt-4 border-y-2 border-pink py-4 flex flex-col gap-3.5">
            <li>
              <ul className="flex flex-col justify-center font-normal gap-0.5">
                {list.languages.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
            <li>Development: {list.developmentHours}</li>
            <li>Design: {list.designHours}</li>
            {list.translation && (
              <li className="flex gap-1">
                Languages: {list.translation[0]} & {list.translation[1]}
              </li>
            )}
            {list.repo && (
              <li>
                <Link
                  href={list.repo}
                  target="_blank"
                  className="py-2 px-3 font-medium text-linkBlue"
                >
                  View repository
                </Link>
              </li>
            )}
          </ul>
        )}
      </>
    );
  } else if (variant === TechToggleVariant.Desktop) {
    return (
      <div className="flex justify-center gap-12 -mb-4">
        {!techToggle && (
          <button
            onClick={() => setTechToggle(!techToggle)}
            onMouseEnter={() => {
              setTechIconHover({ scale: 1.15, rotate: 180 });
              setTechTextHover(true);
            }}
            onMouseLeave={() => {
              setTechIconHover({ scale: 1, rotate: 0 });
              setTechTextHover(false);
            }}
            className="flex gap-2 h-6 items-center justify-center -mt-4"
          >
            <animated.div style={techIconHover}>
              <Image src={plusIcon} alt="Plus sign icon" className="h-6 w-6" />
            </animated.div>
            <h4 className={`text-[1.1rem] ${techTextHover && "text-pink"}`}>
              What&#39;s under the hood
            </h4>
          </button>
        )}
        {techToggle && (
          <ul className="text-center font-light -mt-3 border-y-2 border-pink py-4 flex gap-8">
            <li>
              <ul className="flex justify-center">
                {list.languages.map((item, index) => (
                  <li key={index}>
                    {item}
                    {index < list.languages.length - 1 && (
                      <span className="mx-2.5">/</span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li>Development: {list.developmentHours}</li>
            <li>Design: {list.designHours}</li>
            {list.translation && (
              <ul className="flex justify-center">
                {list.translation.map((item, index) => (
                  <li key={index}>
                    {item}
                    {list.translation &&
                      index < list.translation.length - 1 && (
                        <span className="mx-2.5">/</span>
                      )}
                  </li>
                ))}
              </ul>
            )}
            {list.repo && (
              <li>
                <Link
                  href={list.repo}
                  target="_blank"
                  className="font-normal text-linkBlue hover:underline underline-offset-[6px]"
                >
                  View repository
                </Link>
              </li>
            )}
            <li>
              <button
                onClick={() => setTechToggle(!techToggle)}
                className="flex gap-2 h-6 items-center justify-center rotate-45"
              >
                <Image
                  src={plusIcon}
                  alt="Plus sign icon"
                  className="h-6 w-6 hover:opacity-80"
                />
              </button>
            </li>
          </ul>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default PortfolioTechToggle;
