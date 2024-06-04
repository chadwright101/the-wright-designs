"use client";

import { useState, ReactNode } from "react";

import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  children: ReactNode;
  delay?: number;
  bounce?: boolean;
  basic?: boolean;
}

const FadeIn = ({ children, delay, bounce, basic }: Props) => {
  const [inView, setInView] = useState(false);

  const transition = useSpring({
    delay: delay,
    config: {
      mass: bounce ? 7.5 : 1,
      tension: bounce ? 175 : 125,
      bounce: bounce ? 0.85 : 0,
    },
    to: {
      scale: !inView && !basic ? 0 : 1,
      opacity: !inView && basic ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInView(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default FadeIn;
