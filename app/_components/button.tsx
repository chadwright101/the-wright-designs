"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";

import classNames from "classnames";

import ArrowSvg from "@/app/_lib/arrow-svg";

interface Props {
  url?: string;
  children: ReactNode;
  cssClasses?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
  buttonColor?: "blue" | "pink" | "beige";
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
  buttonColor = "blue",
  disabled,
}: Props) => {
  const { pending } = useFormStatus();

  const [arrowMove, setArrowMove] = useState(false);

  if (form) {
    return (
      <button
        type="submit"
        className={classNames(
          `flex gap-3 items-center justify-center px-5 py-[14px] rounded-xl drop-shadow-md uppercase tracking-[0.72px] font-medium text-[18px] ${cssClasses}`,
          {
            "bg-pink tablet:hover:bg-pink/95 text-white":
              buttonColor === "pink",
            "bg-blue tablet:hover:bg-blue/95 text-white":
              buttonColor === "blue",
            "bg-beige tablet:hover:bg-beige/95 border-grey/50 text-blue":
              buttonColor === "beige",
          }
        )}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={() => setArrowMove(true)}
        onMouseLeave={() => setArrowMove(false)}
      >
        {pending ? <div className="spinner"></div> : <>{children}</>}
        {!pending && (
          <ArrowSvg
            buttonColor={buttonColor}
            cssClasses={classNames("transform ease-in-out duration-[400ms]", {
              "desktopSmall:translate-x-[2px] desktopSmall:scale-105":
                arrowMove,
              "desktopSmall:translate-x-0": !arrowMove,
            })}
          />
        )}
      </button>
    );
  } else {
    return (
      <Link href={url!} target={target}>
        <button
          className={classNames(
            `flex gap-3 items-center justify-center px-5 py-[14px] rounded-xl drop-shadow-md uppercase tracking-[0.72px] font-medium text-[18px] ${cssClasses}`,
            {
              "bg-pink tablet:hover:bg-pink/95 text-white":
                buttonColor === "pink",
              "bg-blue tablet:hover:bg-blue/95 text-white":
                buttonColor === "blue",
              "bg-beige tablet:hover:bg-beige/95 border-grey/50 text-blue":
                buttonColor === "beige",
            }
          )}
          onClick={onClick}
          onMouseEnter={() => setArrowMove(true)}
          onMouseLeave={() => setArrowMove(false)}
          aria-label={children.toString()}
        >
          {children}
          <ArrowSvg
            buttonColor={buttonColor}
            cssClasses={classNames("ease-in-out duration-[400ms]", {
              "desktopSmall:translate-x-[2px] desktopSmall:scale-105":
                arrowMove,
              "desktopSmall:translate-x-0": !arrowMove,
            })}
          />
        </button>
      </Link>
    );
  }
};

export default Button;
