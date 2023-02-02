import Link from "next/link";
import Image from "next/image";
import logo from "../public/the-wright-designs-logo.png";
import menuList from "../data/menu-list.json";

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
            </ul>
          </nav>

          <h4 className="max-w-[300px] text-center font-quicksand font-light text-[1.275rem] normal-case tablet:text-[1rem] tablet:text-beige tablet:max-w-max">
            © The Wright Designs |{" "}
            <Link href="/" className="tablet:hover:text-pink">
              www.thewrightdesigns.co.za
            </Link>
          </h4>
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
