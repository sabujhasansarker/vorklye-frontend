"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";
import { useSmootherReady } from "./useSmootherReady";

gsap.registerPlugin(ScrollTrigger);

export function useHorizontalPinScroll(
  sectionRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLElement | null>,
  itemSelector: string,
) {
  const ready = useSmootherReady();

  useGSAP(
    () => {
      if (!ready || !trackRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        itemSelector,
        trackRef.current,
      );
      if (cards.length === 0) return;

      const getDistance = () => {
        const raw = cards[cards.length - 1].offsetLeft - cards[0].offsetLeft;
        return raw > 0 ? raw : window.innerWidth;
      };

      gsap.to(trackRef.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: sectionRef, dependencies: [ready] },
  );
}
