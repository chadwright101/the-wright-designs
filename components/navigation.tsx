import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import { useSpring, animated } from "@react-spring/web";

import menuList from "../data/menu-list.json";

import logo from "../public/the-wright-designs-logo.png";
import arrow from "../public/icons/double-arrow-pink.svg";
import menuIcon from "../public/icons/menu-icon.svg";
import closeIcon from "../public/icons/close-icon.svg";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const router = useRouter();
  const currentRoute = router.pathname;

  const logoLoadAnimate = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 100 },
    config: {
      mass: 10,
      tension: 250,
      bounce: 0.25,
    },
  });

  const menuIconAnimate = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: {
      mass: 15,
      tension: 220,
      bounce: 0.3,
    },
  });

  /* logo hover animation */

  const [logoHoverMove, setLogoHoverMove] = useSpring(() => ({
    to: { scale: 1, rotate: 0 },
    config: {
      loop: { reverse: true },
      bounce: 0.5,
      mass: 10,
      tension: 300,
    },
  }));

  /* portfolio submenu image animation */

  const [submenuImageMove, setSubmenuImageMove] = useSpring(() => ({
    to: { y: -15, scale: 1.65 },
    config: {
      loop: { reverse: true },
      mass: 5,
      tension: 225,
      bounce: 0.75,
    },
  }));

  /* mobile menu toggle */

  const [mobileMenuToggle, setMobileMenuToggle] = useSpring(() => ({
    to: { x: -750, opacity: 100 },
    config: {
      loop: { reverse: true },
      mass: 3,
      tension: 140,
      bounce: 0.28,
    },
  }));

  return (
    <div className="desktop:max-w-[1300px] desktop:m-auto tablet:flex tablet:justify-between">
      <div>
        {!menuOpen && (
          <div className="flex justify-between">
            <animated.div style={logoLoadAnimate}>
              <animated.div
                onMouseEnter={() =>
                  setLogoHoverMove({ scale: 1.04, rotate: 0.5 })
                }
                onMouseLeave={() => setLogoHoverMove({ scale: 1, rotate: 0 })}
                style={logoHoverMove}
              >
                <Link href="/">
                  <Image
                    src={logo}
                    alt="The Wright Designs logo"
                    className="h-[52px] w-[273.3px] translate-y-1 tablet:w-[302px] tablet:h-[58px] rotate-1"
                  />
                </Link>
              </animated.div>
            </animated.div>

            {/* mobile navigation */}

            <div
              onClick={() => {
                setMenuOpen(!menuOpen);
                setMobileMenuToggle({ x: 0, opacity: 100 });
              }}
              className="h-[50px] w-[50px] grid place-items-center"
            >
              <animated.div style={menuIconAnimate}>
                <Image
                  src={menuIcon}
                  alt="Menu icon"
                  className="h-[42px] w-[42px] mt-1 tablet:hidden"
                />
              </animated.div>
            </div>
          </div>
        )}

        {/* mobile menu toggle */}

        {menuOpen && (
          <nav className="bg-blue w-full pt-2 pb-4 tablet:hidden">
            <div
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="fixed right-[30px] h-[50px] w-[50px] grid place-items-center -mt-1.5"
            >
              <Image
                src={closeIcon}
                alt="Menu icon"
                className="h-[42px] w-[42px] tablet:hidden"
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
                      src={arrow}
                      alt="Double arrow icon"
                      className="rotate-180 h-[30px] w-[40px] mt-[3px] ml-4 object-cover"
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
        <ul className="flex gap-6 font-thin text-[1.25rem] mt-[28px]">
          {menuList.map((item, index) => (
            <li
              key={index}
              className={`text-beige hover:underline hover:underline-offset-8 decoration-pink decoration-[2.5px] hover:cursor-pointer ${
                index === 1 && "hover:no-underline px-3 -mx-3"
              }`}
              onMouseEnter={
                item.submenu &&
                (() => {
                  setSubmenuOpen(!submenuOpen);
                  setSubmenuImageMove({ y: -5, scale: 1 });
                })
              }
              onMouseLeave={
                item.submenu &&
                (() => {
                  setSubmenuOpen(!submenuOpen);
                  setSubmenuImageMove({ y: -15, scale: 1.65 });
                })
              }
            >
              <Link
                href={item.url}
                className={`${currentRoute === item.url ? "font-light" : null}`}
              >
                {item.title}
              </Link>

              {/* portfolio submenu */}

              {item.submenu && submenuOpen && (
                <div className="absolute -translate-x-[68px]">
                  <div className="absolute z-10 bg-blue h-[20px] w-full grid place-items-center">
                    <animated.div style={submenuImageMove}>
                      <Image
                        src={arrow}
                        alt="Double arrow icon"
                        className=" rotate-90 w-8 h-8 mt-1.5"
                        priority
                      />
                    </animated.div>
                  </div>
                  <ul className="bg-blue px-5 pt-10 pb-4 rounded-b-xl border-[3px] border-beige flex flex-col items-center gap-2 lowercase drop-shadow-md">
                    {item.submenu.map((item, index) => (
                      <li
                        key={index}
                        className="text-beige tablet:hover:underline tablet:hover:underline-offset-8 decoration-pink decoration-[2.5px]"
                      >
                        <Link href={item.url} target="_blank">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
