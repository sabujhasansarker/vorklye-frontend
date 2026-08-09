// utility/useStackScroll.ts
"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";
import { useSmootherReady } from "./useSmootherReady";

gsap.registerPlugin(ScrollTrigger);

/**
 * card গুলো একটার উপর একটা stack হয়ে scrub-scroll এ reveal হওয়ার
 * animation — CaseStudies ও Service দুটোতেই ব্যবহার হয়।
 */
export function useStackScroll(
  containerRef: RefObject<HTMLElement | null>,
  itemSelector: string,
  triggerStart: string,
  itemScale?: (i: number, index: number) => number,
) {
  const ready = useSmootherReady();

  useGSAP(
    () => {
      if (!ready || !containerRef.current) return;

      const items = gsap.utils.toArray<HTMLElement>(
        itemSelector,
        containerRef.current,
      );
      if (items.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          end: () => `+=${items.length * 100}%`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      items.forEach((item, index) => {
        if (index === 0) return;
        tl.from(item, { yPercent: 120, ease: "none" }, `card-${index}`);
        if (itemScale) {
          tl.to(
            items.slice(0, index),
            {
              scale: (i) => itemScale(i, index),
              transformOrigin: "top center",
              ease: "none",
            },
            `card-${index}`,
          );
        }
      });
    },
    { scope: containerRef, dependencies: [ready] },
  );
}
