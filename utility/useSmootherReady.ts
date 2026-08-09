"use client";

import { ScrollSmoother } from "gsap/all";
import { useEffect, useState } from "react";

export function useSmootherReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ScrollSmoother.get()) return setReady(true);
    let raf: number;
    const check = () =>
      ScrollSmoother.get()
        ? setReady(true)
        : (raf = requestAnimationFrame(check));
    raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, []);

  return ready;
}
