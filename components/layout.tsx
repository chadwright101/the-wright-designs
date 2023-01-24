import { ReactNode } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

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
