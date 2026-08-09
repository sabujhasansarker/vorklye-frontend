// utility/useActiveClosestToCenter.ts
"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

/** rightCol এর ভিতরের item গুলোর মধ্যে যেটা viewport-center এর সবচেয়ে কাছে, তাতে .is-active class দেয় */
export function useActiveClosestToCenter(
  containerRef: RefObject<HTMLElement | null>,
  itemSelector: string,
) {
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const items = gsap.utils.toArray<HTMLElement>(
        itemSelector,
        containerRef.current,
      );
      if (items.length === 0) return;

      const setActive = () => {
        const centerY = window.innerHeight / 2;
        let closest: HTMLElement | null = null;
        let minDist = Infinity;

        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const dist = Math.abs(rect.top + rect.height / 2 - centerY);
          if (dist < minDist) {
            minDist = dist;
            closest = item;
          }
        });

        items.forEach((item) =>
          item.classList.toggle("is-active", item === closest),
        );
      };

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: setActive,
        onRefresh: setActive,
      });

      setActive();
    },
    { scope: containerRef },
  );
}
