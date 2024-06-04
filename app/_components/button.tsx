"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFormStatus } from "react-dom";

import { useSpring, animated } from "@react-spring/web";
import classNames from "classnames";

import arrowsBlue from "@/public/icons/double-arrow.svg";
import arrowsBeige from "@/public/icons/double-arrow-beige.svg";

interface Props {
  url?: string;
  children: ReactNode;
  cssClasses?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
  pinkBackground?: boolean;
  blueBackground?: boolean;
  blueText?: boolean;
  beigeText?: boolean;
  pinkText?: boolean;
  blueArrows?: boolean;
  beigeArrows?: boolean;
  form?: boolean;
  disabled?: boolean;
}

const Button = ({
  url,
  children,
  cssClasses,
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
  disabled,
}: Props) => {
  const [arrowMove, setArrowMove] = useSpring(() => ({
    to: { x: 0, scale: 1 },
    config: {
      mass: 5,
      tension: 225,
      bounce: 1.5,
    },
  }));

  const { pending } = useFormStatus();

  if (form) {
    return (
      <button
        type="submit"
        className={classNames(
          `w-auto flex gap-1 items-center px-5 py-[1px] rounded-[1.25rem] border drop-shadow-md ${cssClasses}`,
          {
            "bg-pink/75 tablet:hover:bg-pink border-blue/50": pinkBackground,
            "bg-blue/75 tablet:hover:bg-blue border-grey/50": blueBackground,
          }
        )}
        onMouseEnter={() => setArrowMove({ x: 3, scale: 1.03 })}
        onMouseLeave={() => setArrowMove({ x: 0, scale: 1 })}
        onClick={onClick}
        disabled={disabled}
      >
        {pending ? (
          <div className="spinner"></div>
        ) : (
          <p
            className={classNames("lowercase font-novaSlim text-subheading", {
              "text-blue": blueText,
              "text-beige": beigeText,
              "text-pink": pinkText,
            })}
          >
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
  } else {
    return (
      <Link href={url!} target={target}>
        <button
          className={classNames(
            `w-auto flex gap-1 items-center px-5 py-[1px] rounded-[1.25rem] border drop-shadow-md ${cssClasses}`,
            {
              "bg-pink/75 tablet:hover:bg-pink border-blue/50": pinkBackground,
              "bg-blue/75 tablet:hover:bg-blue border-pink/50 border-x-2":
                blueBackground,
            }
          )}
          onMouseEnter={() => setArrowMove({ x: 3, scale: 1.03 })}
          onMouseLeave={() => setArrowMove({ x: 0, scale: 1 })}
          onClick={onClick}
        >
          <p
            className={classNames("lowercase font-novaSlim text-subheading", {
              "text-blue": blueText,
              "text-beige": beigeText,
              "text-pink": pinkText,
            })}
          >
            {children}
          </p>
          <animated.div style={arrowMove}>
            <Image
              src={(beigeArrows && arrowsBeige) || (blueArrows && arrowsBlue)}
              alt="Double arrow icon"
              className="w-9"
            ></Image>
          </animated.div>
        </button>
      </Link>
    );
  }
};

export default Button;
