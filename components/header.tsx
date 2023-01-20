import Image from "next/image";
import logo from "../public/the-wright-designs-logo.png";
import Navigation from "./navigation";

const Header = (cssClasses?: string) => {
  return (
    <header
      className={`w-full h-[95px] bg-blue border-b-[3px] border-b-beige drop-shadow-md py-6 px-[30px] tablet:px-[50px] tablet:py-5 ${cssClasses}`}
    >
      <div className="flex justify-between desktop:max-w-[1300px] desktop:m-auto">
        <Image
          src={logo}
          alt="The Wright Designs logo"
          className="h-[48px] w-[252.28px] tablet:w-[302px] tablet:h-[58px]"
        />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
