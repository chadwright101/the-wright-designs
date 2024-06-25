import { useState, useEffect } from "react";

import throttle from "lodash/throttle";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    const throttledUpdatePosition = throttle(updatePosition, 100);

    window.addEventListener("scroll", throttledUpdatePosition, {
      passive: true,
    });
    updatePosition();

    return () => window.removeEventListener("scroll", throttledUpdatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
