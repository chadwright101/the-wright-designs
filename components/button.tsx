import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";

import arrowsBlue from "../public/icons/double-arrow.svg";
import arrowsBeige from "../public/icons/double-arrow-beige.svg";

interface Props {
  url: string;
  children: ReactNode;
  cssClasses?: string;
  type: "button" | "submit";
  form?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
  pinkBackground?: boolean;
  blueBackground?: boolean;
  blueText?: boolean;
  beigeText?: boolean;
  pinkText?: boolean;
  blueArrows?: boolean;
  beigeArrows?: boolean;
}

const Button = ({
  url,
  children,
  cssClasses,
  type,
  form,
  onClick,
  target,
  pinkBackground,
  blueBackground,
  blueText,
  beigeText,
  pinkText,
  blueArrows = true,
  beigeArrows,
}: Props) => {
  const [arrowMove, setArrowMove] = useSpring(() => ({
    to: { x: 0, scale: 1 },
    config: {
      mass: 5,
      tension: 225,
      bounce: 1.5,
    },
  }));
  return (
    <button
      type={type}
      className={classNames(
        `w-auto flex gap-1 items-center px-5 py-0.5 rounded-[1.25rem] border drop-shadow-md ${cssClasses}`,
        {
          "bg-pink/75 tablet:hover:bg-pink border-blue": pinkBackground,
          "bg-blue/75 tablet:hover:bg-blue border-grey": blueBackground,
        }
      )}
      onMouseEnter={() => setArrowMove({ x: 5, scale: 1.04 })}
      onMouseLeave={() => setArrowMove({ x: 0, scale: 1 })}
      onClick={onClick}
    >
      {!form ? (
        <Link
          href={url}
          className={classNames("lowercase font-novaSlim text-subheading", {
            "text-blue": blueText,
            "text-beige": beigeText,
            "text-pink": pinkText,
          })}
          target={target}
        >
          {children}
        </Link>
      ) : (
        <p className="lowercase font-novaSlim text-subheading text-beige">
          {children}
        </p>
      )}
      <animated.div style={arrowMove}>
        <Image
          src={(beigeArrows && arrowsBeige) || (blueArrows && arrowsBlue)}
          alt="Double arrow icon"
          className="w-9"
        ></Image>
      </animated.div>
    </button>
  );
};

export default Button;
