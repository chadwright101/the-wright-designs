import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  loading?: string;
}

const PortfolioScroller = ({ src, alt, loading }: Props) => {
  return (
    <div className="bg-white absolute w-[244px] h-[431.5px] z-10 translate-x-[18px] translate-y-[68.5px] overflow-y-auto scrollbar-hide">
      <Image
        src={src}
        width={244}
        height={1000}
        alt={alt}
        quality={25}
        loading={loading ? "eager" : "lazy"}
        sizes="(max-width:425px) 35vw, 25vw"
      ></Image>
    </div>
  );
};

export default PortfolioScroller;
