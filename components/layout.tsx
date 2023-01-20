import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  cssClasses?: string;
}

const Layout = ({ children, cssClasses }: Props) => {
  return (
    <div
      className={`px-[30px] tablet:px-[50px] desktop:max-w-[1300px] desktop:m-auto ${cssClasses}`}
    >
      {children}
    </div>
  );
};

export default Layout;
