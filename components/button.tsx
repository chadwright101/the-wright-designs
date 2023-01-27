import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { useSpring, animated } from "@react-spring/web";

import blueArrows from "../public/icons/double-arrow.svg";
import beigeArrows from "../public/icons/double-arrow-beige.svg";

interface Props {
  url: string;
  children: ReactNode;
  cssClasses?: string;
  variant?: ButtonVariant;
  type: "button" | "submit";
  form?: boolean;
}

export enum ButtonVariant {
  Pink,
  Blue,
}

const Button = ({
  url,
  children,
  cssClasses,
  variant = ButtonVariant.Pink,
  type,
  form,
}: Props) => {
  const [arrowMove, setArrowMove] = useSpring(() => ({
    to: { x: 0, scale: 1 },
    config: {
      mass: 5,
      tension: 225,
      bounce: 1.5,
    },
  }));
  if (variant === ButtonVariant.Pink) {
    return (
      <button
        type={type}
        className={`bg-pink/75 w-auto flex gap-1 items-center px-5 py-0.5 rounded-[1.25rem] border border-blue drop-shadow-md tablet:hover:bg-pink ${cssClasses}`}
        onMouseEnter={() => setArrowMove({ x: 5, scale: 1.04 })}
        onMouseLeave={() => setArrowMove({ x: 0, scale: 1 })}
      >
        {!form ? (
          <Link href={url} className="lowercase font-novaSlim text-subheading">
            {children}
          </Link>
        ) : (
          <p className="lowercase font-novaSlim text-subheading text-beige">
            {children}
          </p>
        )}
        <animated.div style={arrowMove}>
          <Image
            src={form ? beigeArrows : blueArrows}
            alt="Double arrow icon"
            className="w-9"
          ></Image>
        </animated.div>
      </button>
    );
  } else if (variant === ButtonVariant.Blue) {
    return (
      <button
        type={type}
        className={`bg-blue/80 w-auto flex gap-1 items-center px-5 py-0.5 rounded-[1.25rem] border border-grey drop-shadow-md tablet:hover:bg-blue ${cssClasses}`}
        onMouseEnter={() => setArrowMove({ x: 5, scale: 1.04 })}
        onMouseLeave={() => setArrowMove({ x: 0, scale: 1 })}
      >
        {!form ? (
          <Link
            href={url}
            className="text-beige lowercase font-novaSlim text-subheading"
          >
            {children}
          </Link>
        ) : (
          <p className="lowercase font-novaSlim text-subheading">{children}</p>
        )}
        <animated.div style={arrowMove}>
          <Image
            src={beigeArrows}
            alt="Double arrow icon"
            className="w-9"
          ></Image>
        </animated.div>
      </button>
    );
  } else {
    return null;
  }
};

export default Button;
