import menuList from "../data/menu-list.json";
import Image from "next/image";
import logo from "../public/the-wright-designs-logo.png";
import Link from "next/link";
import menuIcon from "../public/icons/menu-icon.svg";
import closeIcon from "../public/icons/close-icon.svg";
import { useState } from "react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="desktop:max-w-[1300px] desktop:m-auto tablet:flex tablet:justify-between">
      <div>
        {!menuOpen && (
          <div className="flex justify-between">
            <Image
              src={logo}
              alt="The Wright Designs logo"
              className="h-[52px] w-[273.3px] translate-y-1 tablet:w-[302px] tablet:h-[58px]"
            />

            {/* mobile navigation */}

            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-[50px] w-[50px] grid place-items-center"
            >
              <Image
                src={menuIcon}
                alt="Menu icon"
                className="h-[42px] w-[42px] mt-1 tablet:hidden"
              />
            </div>
          </div>
        )}

        {/* mobile menu toggle */}

        {menuOpen && (
          <nav className="bg-blue w-full pt-2 pb-4">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="fixed right-[30px] h-[50px] w-[50px] grid place-items-center -mt-1.5"
            >
              <Image
                src={closeIcon}
                alt="Menu icon"
                className="h-[42px] w-[42px] tablet:hidden"
              />
            </div>
            <ul className="flex flex-col gap-3.5 font-thin text-subheading text mt-8">
              {menuList.map((item, index) => (
                <>
                  <li
                    key={index}
                    className="text-beige tablet:hover:underline tablet:hover:underline-offset-8 decoration-pink decoration-[2.5px]"
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                  {index < menuList.length - 1 && (
                    <div className="h-px bg-beige"></div>
                  )}
                </>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* desktop navigation */}

      <nav className="hidden tablet:block">
        <ul className="flex gap-6 font-thin text-[1.25rem] mt-[28px]">
          {menuList.map((item, index) => (
            <li
              key={index}
              className="text-beige hover:underline hover:underline-offset-8 decoration-pink decoration-[2.5px]"
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
