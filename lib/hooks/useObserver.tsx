"use client";
import { useEffect, useRef, useState } from "react";

const useObserver = (ref: HTMLElement | null) => {
  const [isInView, setIsInView] = useState(false);

  const observer = useRef<null | IntersectionObserver>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px", // margin around the root
        threshold: 0.5, // amount of target visible to be considered in view
      }
    );

    if (ref) {
      observer.current.observe(ref);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref]);

  return isInView;
};

export default useObserver;
