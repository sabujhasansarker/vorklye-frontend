"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";
import { useSmootherReady } from "./useSmootherReady";

gsap.registerPlugin(ScrollTrigger);

/**
 * lম্বা sibling column এর পাশে title কে pin করে রাখে,
 * ততক্ষণ পর্যন্ত যতক্ষণ না sibling এর height শেষ হয়ে যায়।
 * ScrollSmoother এর transform-based scroll এর সাথে কম্প্যাটিবল
 * (CSS sticky এখানে কাজ করে না বলে GSAP pin ব্যবহার করা হচ্ছে)।
 */
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
