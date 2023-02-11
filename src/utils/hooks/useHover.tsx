import React, { useEffect, useRef } from "react";

export default function useHover() {
  const [hovered, setHovered] = React.useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.addEventListener("mouseenter", enter);
      ref.current.addEventListener("mouseleave", leave);
    }
    return () => {
      if (ref.current !== null) {
        ref.current.removeEventListener("mouseenter", enter);
        ref.current.removeEventListener("mouseleave", leave);
      }
    };
  }, []);

  return {
    hovered,
    ref
  };
}
