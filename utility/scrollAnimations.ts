// utility/scrollAnimations.ts
"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import { RefObject, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

/** ScrollSmoother তৈরি হয়েছে কিনা — না হওয়া পর্যন্ত কোনো pin তৈরি করা উচিত না */
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

/** card গুলো stack হয়ে একটার পর একটা reveal হয় (CaseStudies, Service) */
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

      // প্রথমেই সব non-first card কে আড়ালে সেট করো — .from() এর immediateRender জটিলতা এড়াতে
      gsap.set(items.slice(1), { yPercent: 120 });

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
        tl.to(item, { yPercent: 0, ease: "none" }, `card-${index}`);
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

/** title কে pin করে রাখে পাশের taller sibling শেষ না হওয়া পর্যন্ত (Activity) */
export function useTitlePinScroll(
  sectionRef: RefObject<HTMLElement | null>,
  titleRef: RefObject<HTMLElement | null>,
  siblingRef: RefObject<HTMLElement | null>,
) {
  const ready = useSmootherReady();

  useGSAP(
    () => {
      if (!ready || !titleRef.current || !siblingRef.current) return;
      const title = titleRef.current;
      const sibling = siblingRef.current;
      const getDistance = () =>
        Math.max(sibling.offsetHeight - title.offsetHeight, 200);

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

/** horizontal card track pin করে scrub করে (WorkingProcess) */
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

/** viewport-center এর সবচেয়ে কাছের item এ .is-active class দেয় (Activity) */
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
