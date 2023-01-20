import menuList from "../data/menu-list.json";
import Image from "next/image";
import Link from "next/link";
import menuIcon from "../public/icons/menu-icon.svg";

const Navigation = () => {
  return (
    /* mobile navigation */
    <>
      <div>
        <Image src={menuIcon} alt="Menu icon" className="tablet:hidden" />
      </div>
      <nav className="hidden tablet:block">
        <ul className="flex gap-6 font-thin text-[1.275rem] mt-5">
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
    </>
  );
};

export default Navigation;
