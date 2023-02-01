// React
import { useState, ReactNode } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  children: ReactNode;
}

const SwipeLeftToRight = ({ children }: Props) => {
  const [inView, setInView] = useState(false);

  const transition = useSpring({
    config: {
      mass: 2.5,
      tension: 125,
      bounce: 0.8,
    },
    to: {
      x: !inView ? -500 : 0,
    },
  });
  return (
    <Waypoint onEnter={() => setInView(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default SwipeLeftToRight;
