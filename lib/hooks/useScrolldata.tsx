"use client";
import { useEffect, useRef, useState } from "react";

const useScrolldata = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY.current) {
      setScrollDirection("down");
    } else if (currentScrollY < prevScrollY.current) {
      setScrollDirection("up");
    }
    prevScrollY.current = currentScrollY;

    setScrollValue(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { scrollValue, scrollDirection };
};

export default useScrolldata;
