import Image from "next/image";

import { useSpring, animated, easings } from "@react-spring/web";

interface Props {
  src: string;
  alt: string;
  autoScroll?: boolean;
}

const PortfolioScroller = ({ src, alt, autoScroll }: Props) => {
  const startScroll = useSpring({
    from: { y: -125 },
    to: { y: 0 },
    delay: 1500,
    config: { duration: 2500, easing: easings.easeOutSine },
  });
  return (
    <div className="bg-white absolute w-[244px] h-[431.5px] z-10 translate-x-[18px] translate-y-[68.5px] overflow-y-auto scrollbar-hide">
      {autoScroll ? (
        <animated.div style={startScroll}>
          <Image src={src} width={244} height={1000} alt={alt}></Image>
        </animated.div>
      ) : (
        <div>
          <Image src={src} width={244} height={1000} alt={alt}></Image>
        </div>
      )}
    </div>
  );
};

export default PortfolioScroller;
