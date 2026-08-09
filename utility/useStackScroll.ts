"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";
import { useSmootherReady } from "./useSmootherReady";

gsap.registerPlugin(ScrollTrigger);

type UseStackScrollOptions = {
  useOpacity?: boolean;
  yPercentFrom?: number;
  itemScale?: (i: number, index: number) => number;
};

export function useStackScroll(
  sectionRef: RefObject<HTMLElement | null>,
  itemSelector: string,
  triggerStart: string,
  options: UseStackScrollOptions = {},
) {
  const { useOpacity = true, yPercentFrom = 120, itemScale } = options;
  const ready = useSmootherReady();

  useGSAP(
    () => {
      if (!ready || !sectionRef.current) return;

      const items = gsap.utils.toArray<HTMLElement>(
        itemSelector,
        sectionRef.current,
      );
      if (!items.length) return;

      gsap.set(items.slice(1), {
        yPercent: yPercentFrom,
        ...(useOpacity ? { opacity: 0 } : {}),
      });

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

        tl.to(
          item,
          {
            yPercent: 0,
            ...(useOpacity ? { opacity: 1 } : {}),
            ease: "none",
          },
          `item-${index}`,
        );

        if (itemScale) {
          tl.to(
            items.slice(0, index),
            {
              scale: (i) => itemScale(i, index),
              transformOrigin: "top center",
              ease: "none",
            },
            `item-${index}`,
          );
        }
      });
    },
    {
      scope: sectionRef,
      dependencies: [
        ready,
        itemSelector,
        triggerStart,
        useOpacity,
        yPercentFrom,
        itemScale,
      ],
    },
  );
}
