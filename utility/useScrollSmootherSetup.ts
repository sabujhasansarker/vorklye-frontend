"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function useScrollSmootherSetup() {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });

    const refreshAll = () => ScrollTrigger.refresh();

    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(refreshAll);
    });
    document.fonts?.ready.then(refreshAll);
    window.addEventListener("load", refreshAll);

    return () => {
      cancelAnimationFrame(raf1);
      window.removeEventListener("load", refreshAll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      smoother.kill();
    };
  }, []);
}
