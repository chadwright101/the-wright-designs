// React
import { useState, ReactNode } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  children: ReactNode;
}

const SwipeRightToLeft = ({ children }: Props) => {
  const [inView, setInView] = useState(false);

  const transition = useSpring({
    delay: 125,
    config: {
      mass: 2.55,
      tension: 130,
      bounce: 0.75,
    },
    to: {
      x: !inView ? 500 : 0,
    },
  });
  return (
    <Waypoint onEnter={() => setInView(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default SwipeRightToLeft;
