import Navigation from "./navigation";

interface Props {
  cssClasses?: string;
}

const Header = ({ cssClasses }: Props) => {
  return (
    <header
      className={`w-full min-h-[95px] bg-blue border-b-[3px] border-b-beige drop-shadow-md py-6 px-[30px] tablet:px-[50px] tablet:py-5 sticky top-0 z-10 ${cssClasses}`}
    >
      <Navigation />
    </header>
  );
};

export default Header;
