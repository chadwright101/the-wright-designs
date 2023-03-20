import Link from "next/link";
import Image from "next/image";
import logo from "../public/the-wright-designs-logo.png";
import menuList from "../data/menu-list.json";

import facebookMobile from "public/icons/facebook-logo-blue.svg";
import facebookDesktop from "public/icons/facebook-logo-beige.svg";

interface Props {
  cssClasses?: string;
}

const Footer = ({ cssClasses }: Props) => {
  return (
    <footer
      className={`py-10 tablet:pt-8 tablet:pb-6 tablet:bg-blue ${cssClasses}`}
    >
      <div className="px-[30px] tablet:px-[50px] desktop:px-0 desktop:max-w-[1300px] tablet:flex tablet:flex-row tablet:justify-between desktop:mx-auto">
        <div className="flex justify-center tablet:flex-col tablet:gap-6">
          {/* desktop footer */}

          <nav className="hidden tablet:block">
            <ul className="flex flex-col font-light text-paragraph">
              {menuList.map((item, index) => (
                <li key={index} className="text-beige hover:text-pink">
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
              <li className="text-pink font-extralight hover:text-beige">
                <Link href="https://github.com/chadwright101/the-wright-designs.git">
                  view repository
                </Link>
              </li>
            </ul>
            <Link
              href="https://www.facebook.com/thewrightdesignsSA"
              target="_blank"
              className="opacity-90"
            >
              <Image
                src={facebookDesktop}
                alt="Facebook logo"
                className="hidden w-7 mt-1.5 tablet:block hover:opacity-75"
              />
            </Link>
          </nav>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="https://www.facebook.com/thewrightdesignsSA"
              target="_blank"
              className="p-4 opacity-90"
            >
              <Image
                src={facebookMobile}
                alt="Facebook logo"
                className="tablet:hidden"
              />
            </Link>
            <h4 className="max-w-[300px] text-center font-quicksand font-light text-[1.275rem] normal-case tablet:text-[1rem] tablet:text-beige tablet:max-w-max">
              © The Wright Designs |{" "}
              <Link href="/" className="tablet:hover:text-pink">
                www.thewrightdesigns.co.za
              </Link>
            </h4>
          </div>
        </div>
        <Link href="/" className="h-[50px]">
          <Image
            src={logo}
            alt="The Wright Designs logo"
            className="hidden w-[249px] h-[48px] tablet:block tablet:self-end rotate-1"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
