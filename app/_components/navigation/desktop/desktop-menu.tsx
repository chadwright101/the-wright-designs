import { usePathname } from "next/navigation";
import Link from "next/link";

import data from "@/app/_data/general-data.json";

const { navigation } = data;

const DesktopMenu = () => {
  const currentRoute = usePathname();

  return (
    <nav className="hidden tablet:block">
      <ul className="flex gap-4 font-thin text-paragraph">
        {navigation.map((item, index) => (
          <li key={index} className="">
            <Link
              href={item.url}
              className={`hover:cursor-pointer text-beige hover:underline hover:underline-offset-8 decoration-pink decoration-[2.5px] ${
                currentRoute === item.url ? "font-normal" : null
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
