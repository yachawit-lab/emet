"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

export function CountUp({
  value,
  format,
  className,
}: {
  value: number;
  format: (v: number) => string;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing to an external prefers-reduced-motion signal
      setDisplay(value);
      prev.current = value;
      return;
    }
    const controls = animate(prev.current, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    prev.current = value;
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span className={className}>{format(display)}</span>;
}
