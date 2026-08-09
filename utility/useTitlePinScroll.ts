"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";
import { useSmootherReady } from "./useSmootherReady";

gsap.registerPlugin(ScrollTrigger);

export function useTitlePinScroll(
  sectionRef: RefObject<HTMLElement | null>,
  titleRef: RefObject<HTMLElement | null>,
  siblingRef: RefObject<HTMLElement | null>,
) {
  const ready = useSmootherReady();

  useGSAP(
    () => {
      if (!ready) return;
      const title = titleRef.current;
      const sibling = siblingRef.current;
      if (!title || !sibling) return;

      const getDistance = () => {
        const raw = sibling.offsetHeight - title.offsetHeight;
        return raw > 0 ? raw : 200;
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${getDistance()}`,
        pin: title,
        pinType: "transform",
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    },
    { scope: sectionRef, dependencies: [ready] },
  );
}
