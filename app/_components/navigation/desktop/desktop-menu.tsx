import { usePathname } from "next/navigation";
import Link from "next/link";

import data from "@/app/_data/general-data.json";
import classNames from "classnames";

export const scrollIntoView = (section: string) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const { navigation } = data;

interface Props {
  cssClasses?: string;
}

const DesktopMenu = ({ cssClasses }: Props) => {
  const currentRoute = usePathname();

  return (
    <nav
      className={`hidden tablet:block ease-in-out duration-300 ${cssClasses}`}
    >
      <ul className="flex gap-4 font-thin text-paragraph">
        {navigation.map((item, index) => (
          <li
            key={index}
            onClick={() => scrollIntoView(item.url)}
            className={classNames("", {
              "hover:cursor-pointer text-beige hover:underline hover:underline-offset-8 decoration-pink decoration-[2.5px]":
                item.title === "About" ||
                item.title === "Services" ||
                item.title === "Contact",
            })}
          >
            {(item.title === "About" && currentRoute !== "/recent-projects") ||
            (item.title === "Services" &&
              currentRoute !== "/recent-projects") ||
            item.title === "Contact" ? (
              item.title
            ) : (
              <Link
                href={
                  item.title === "About" || item.title === "Services"
                    ? `/#${item.url}`
                    : item.url
                }
                className={`hover:cursor-pointer text-beige hover:underline hover:underline-offset-8 decoration-pink decoration-[2.5px] ${
                  currentRoute === item.url ? "font-normal" : null
                }`}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
