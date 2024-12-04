"use client";

import { useState, useEffect, useRef } from "react";

const useScrollPosition = () => {
  const scrollPosition = useRef(0);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      const currentScrollY = window.scrollY;
      if (scrollPosition.current !== currentScrollY) {
        scrollPosition.current = currentScrollY;
        forceUpdate((n) => n + 1);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updatePosition();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition.current;
};

export default useScrollPosition;
