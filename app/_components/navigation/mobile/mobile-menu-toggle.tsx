"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import data from "@/app/_data/general-data.json";
import SocialIcons from "@/app/_lib/social-icons";

const { navigation } = data;

interface Props {
  onClick?: () => void;
  cssClasses?: string;
}

const MobileMenuToggle = ({ onClick, cssClasses }: Props) => {
  const currentRoute = usePathname();

  return (
    <nav className={cssClasses}>
      <ul className="flex flex-col gap-3 font-thin text-[20px]">
        {navigation.map((item, index) => (
          <li
            key={index}
            className={`text-beige flex gap-3 items-center ${
              index !== navigation.length - 1
                ? "border-b border-beige pb-5"
                : ""
            }`}
          >
            <Link
              href={item.url}
              className="py-2 px-3 -my-2 -mx-3"
              onClick={onClick}
            >
              {item.title}
            </Link>
            {currentRoute === item.url && (
              <Image
                src="/assets/icons/double-arrow-pink.svg"
                alt="Double arrow icon"
                className="rotate-180 h-[32px] w-auto mt-[1px]"
                width={40}
                height={30}
              />
            )}
          </li>
        ))}
        <li>
          <SocialIcons cssClasses="mt-7" pink />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuToggle;
