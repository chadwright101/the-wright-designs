import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const PortfolioScroller = ({ src, alt }: Props) => {
  return (
    <div className="bg-white absolute w-[244px] h-[432.5px] z-10 translate-x-[18px] translate-y-[68.5px] overflow-y-auto scrollbar-hide">
      <Image src={src} width={244} height={1000} alt={alt}></Image>
    </div>
  );
};

export default PortfolioScroller;
