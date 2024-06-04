"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { useSpring, animated } from "@react-spring/web";

import menuList from "@/app/_data/menu-list.json";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentRoute = usePathname();

  const [mobileMenuToggle, setMobileMenuToggle] = useSpring(() => ({
    to: { x: -750, opacity: 100 },
    config: {
      loop: { reverse: true },
      mass: 3,
      tension: 140,
      bounce: 0.28,
    },
  }));

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="desktop:max-w-[1300px] desktop:m-auto tablet:flex tablet:justify-between tablet:items-end">
      <div>
        {!menuOpen && (
          <div className="flex gap-2 justify-between">
            <Link href="/" className="tablet:hover:opacity-95">
              <Image
                src="https://the-wright-designs-website-images.s3.af-south-1.amazonaws.com/the-wright-designs/the-wright-designs-logo.png"
                alt="The Wright Designs logo"
                className="h-auto w-[273.3px] translate-y-1 tablet:w-[302px] rotate-1"
                width={274}
                height={60}
                sizes="(max-width: 425px) 50vw, (max-width: 900px) 25vw, 20vw"
              />
            </Link>

            {/* mobile navigation */}

            <div
              onClick={() => {
                setMenuOpen(!menuOpen);
                setMobileMenuToggle({ x: 0, opacity: 100 });
              }}
              className="h-[50px] w-[50px] grid place-items-center"
            >
              <div>
                <Image
                  src="/icons/menu-icon.svg"
                  alt="Menu icon"
                  className="h-[42px] w-[42px] mt-1 tablet:hidden"
                  width={42}
                  height={42}
                />
              </div>
            </div>
          </div>
        )}

        {/* mobile menu toggle */}

        {menuOpen && (
          <nav ref={menuRef} className="bg-blue w-full pt-2 pb-4 tablet:hidden">
            <div
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="fixed right-[30px] h-[50px] w-[50px] grid place-items-center -mt-1.5"
            >
              <Image
                src="/icons/close-icon.svg"
                alt="Menu icon"
                className="h-[42px] w-[42px] tablet:hidden"
                width={42}
                height={42}
              />
            </div>

            <animated.ul
              style={mobileMenuToggle}
              className="flex flex-col gap-3.5 font-thin text-subheading text mt-8"
            >
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className={`text-beige flex items-center border-b border-beige pb-3.5 ${
                    currentRoute === item.url ? "font-normal" : null
                  }`}
                >
                  <Link
                    href={item.url}
                    className="py-2 px-3 -my-2 -mx-3"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {item.title}
                  </Link>
                  {currentRoute === item.url && (
                    <Image
                      src="/icons/double-arrow-pink.svg"
                      alt="Double arrow icon"
                      className="rotate-180 h-[30px] w-[40px] mt-[3px] ml-4 object-cover"
                      width={40}
                      height={30}
                    />
                  )}
                </li>
              ))}
              <li className="text-beige tablet:hover:underline tablet:hover:underline-offset-8 decoration-pink decoration-[2.5px] flex items-center">
                <Link
                  href="https://github.com/chadwright101/the-wright-designs.git"
                  target="_blank"
                  className="py-2 px-3 -my-2 -mx-3 text-pink"
                >
                  view repository
                </Link>
              </li>
            </animated.ul>
          </nav>
        )}
      </div>

      {/* desktop navigation */}

      <nav className="hidden tablet:block">
        <ul className="flex gap-4 font-thin text-paragraph">
          {menuList.map((item, index) => (
            <li key={index} className="">
              <Link
                href={item.url}
                className={`hover:cursor-pointer text-beige hover:underline hover:underline-offset-8 decoration-pink decoration-[2.5px] ${
                  currentRoute === item.url ? "font-light" : null
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
