import { ReactNode } from "react";

import Footer from "@/app/_components/navigation/footer";
import Header from "@/app/_components/navigation/header";

interface Props {
  children: ReactNode;
  cssClasses?: string;
}

const Layout = ({ children, cssClasses }: Props) => {
  return (
    <>
      <Header />
      <div
        className={`px-[30px] tablet:px-[50px] desktop:px-0 desktop:max-w-[1300px] desktop:m-auto ${cssClasses}`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
