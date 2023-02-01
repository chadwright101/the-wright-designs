// React
import { useState, ReactNode } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  children: ReactNode;
  delay?: number;
}

const SwipeRightToLeft = ({ children, delay }: Props) => {
  const [inView, setInView] = useState(false);

  const transition = useSpring({
    delay: delay,
    to: {
      x: !inView ? 2000 : 0,
    },
  });
  return (
    <Waypoint onEnter={() => setInView(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default SwipeRightToLeft;
