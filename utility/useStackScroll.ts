// utility/useStackScroll.ts
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

type UseStackScrollOptions = {
  useOpacity?: boolean; // true হলে opacity fade + slide, false হলে শুধু slide
  yPercentFrom?: number; // কতটা নিচ থেকে item টা উঠে আসবে (default 120)
  itemScale?: (i: number, index: number) => number; // 👈 নতুন: পিছনের item গুলো কতটা ছোট হবে
};

export function useStackScroll(
  sectionRef: RefObject<HTMLElement | null>,
  itemSelector: string,
  triggerStart: string,
  options: UseStackScrollOptions = {},
) {
  const { useOpacity = true, yPercentFrom = 120, itemScale } = options;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(itemSelector);
      if (!items.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: triggerStart,
          end: () => `+=${items.length * 100}%`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      items.forEach((item, index) => {
        if (index === 0) return;

        tl.from(
          item,
          {
            yPercent: yPercentFrom,
            ...(useOpacity ? { opacity: 0 } : {}),
            ease: "none",
          },
          `item-${index}`,
        );

        if (useOpacity) {
          tl.to(
            items.slice(0, index),
            {
              opacity: 1,
              transformOrigin: "top center",
              ease: "none",
            },
            `item-${index}`,
          );
        }

        // 👇 নতুন: scale animation, শুধু itemScale দেওয়া থাকলেই চলবে
        if (itemScale) {
          tl.to(
            items.slice(0, index),
            {
              scale: (i) => itemScale(i, index),
              transformOrigin: "top center",
              duration: 0.5,
              ease: "none",
            },
            `item-${index}`,
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [
    sectionRef,
    itemSelector,
    triggerStart,
    useOpacity,
    yPercentFrom,
    itemScale,
  ]);
}
