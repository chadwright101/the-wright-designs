"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import classNames from "classnames";

import MobileMenuToggle from "./mobile/mobile-menu-toggle";
import MenuButton from "./mobile/menu-button";
import DesktopMenu from "./desktop/desktop-menu";
import useScrollPosition from "@/app/_utils/scroll-position";

const Header = () => {
  const [showMenuToggle, setShowMenuToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (showMenuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenuToggle]);

  useEffect(() => {
    if (scrollPosition > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <header className="fixed w-full bg-blue border-b-4 border-b-beige drop-shadow-md py-6 z-20 tablet:px-10">
      <div className="desktop:max-w-[1280px] desktop:m-auto tablet:flex tablet:justify-between tablet:items-end">
        <div>
          <div className="flex justify-between items-center px-5 tablet:px-0">
            <Link href="/" className="tablet:hover:opacity-95">
              <Image
                src="/assets/the-wright-designs-logo.png"
                alt="The Wright Designs logo"
                className={classNames(
                  "hidden h-auto translate-y-1 tablet:block w-[200px] rotate-1 ease-in-out duration-300",
                  {
                    "opacity-0": isScrolled,
                    "opacity-100": !isScrolled,
                  }
                )}
                width={274}
                height={60}
                sizes="(max-width: 425px) 0vw, (max-width: 800px) 20vw, 15vw"
              />
              <Image
                src="/assets/the-wright-designs-logo-square.jpg"
                alt="The Wright Designs logo"
                className={classNames(
                  "h-12 w-12 ease-in-out duration-300 tablet:hidden",
                  {
                    "-translate-y-20": showMenuToggle,
                  }
                )}
                width={274}
                height={60}
                sizes="(max-width: 425px) 0vw, (max-width: 800px) 20vw, 15vw"
              />
            </Link>
            <MenuButton
              onClick={() => setShowMenuToggle(!showMenuToggle)}
              showMenuToggle={showMenuToggle}
              cssClasses="tablet:hidden"
            />
          </div>
          <MobileMenuToggle
            onClick={() => setShowMenuToggle(false)}
            cssClasses={classNames(
              "fixed z-50 w-full h-screen px-5 bg-blue ease-in-out duration-500 tablet:hidden",
              {
                "translate-x-0": showMenuToggle,
                "translate-x-full": !showMenuToggle,
              }
            )}
          />
        </div>
        <DesktopMenu />
      </div>
    </header>
  );
};

export default Header;
