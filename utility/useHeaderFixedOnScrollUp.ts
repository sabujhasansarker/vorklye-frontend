"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useEffect, useRef, useState } from "react";
import { useSmootherReady } from "./useSmootherReady";

gsap.registerPlugin(ScrollTrigger);

export function useHeaderFixedOnScrollUp(
  headerRef: RefObject<HTMLElement | null>,
  logoRef: RefObject<HTMLElement | null>,
  topThreshold: number = 80,
) {
  const ready = useSmootherReady();
  const [height, setHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false); // 👈 নতুন: className sync করার জন্য state
  const visibleRef = useRef(true); // show/hide (direction ভিত্তিক)
  const compactRef = useRef(false); // ছোট/বড় (top-এ আছি কিনা তার ভিত্তিতে)

  useGSAP(
    () => {
      if (!ready || !headerRef.current) return;
      const header = headerRef.current;
      const logo = logoRef.current;

      // initial padding মান সেট করা (Tailwind এর py-10 = 40px এর সমতুল্য)
      gsap.set(header, { paddingTop: 40, paddingBottom: 40 });
      if (logo) gsap.set(logo, { scale: 1, transformOrigin: "left center" });

      const show = () => {
        if (visibleRef.current) return;
        visibleRef.current = true;
        gsap.to(header, {
          yPercent: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        });
      };

      const hide = () => {
        if (!visibleRef.current) return;
        visibleRef.current = false;
        gsap.to(header, {
          yPercent: -100,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        });
      };

      const compact = () => {
        if (compactRef.current) return;
        compactRef.current = true;
        header.classList.add("scrolled"); // 👈 class add
        setScrolled(true); // 👈 React state ও sync (JSX থেকে দরকার হলে ব্যবহারের জন্য)
        gsap.to(header, {
          paddingTop: 16,
          paddingBottom: 16,
          duration: 0.35,
          ease: "power2.out",
        });
        if (logo)
          gsap.to(logo, { scale: 0.75, duration: 0.35, ease: "power2.out" });
      };

      const expand = () => {
        if (!compactRef.current) return;
        compactRef.current = false;
        header.classList.remove("scrolled"); // 👈 class remove
        setScrolled(false);
        gsap.to(header, {
          paddingTop: 40,
          paddingBottom: 40,
          duration: 0.35,
          ease: "power2.out",
        });
        if (logo)
          gsap.to(logo, { scale: 1, duration: 0.35, ease: "power2.out" });
      };

      const st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const scrollY = self.scroll();

          if (scrollY <= topThreshold) {
            show();
            expand();
            return;
          }

          compact(); // top থেকে সরে গেলেই compact, direction যাই হোক না কেন
          if (self.direction === -1) show();
          else hide();
        },
      });

      return () => st.kill();
    },
    { scope: headerRef, dependencies: [ready, topThreshold] },
  );

  // header এর height বদলালে (padding animate হওয়ার কারণে) স্পেসারও sync রাখা
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ro = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });
    ro.observe(header);

    return () => ro.disconnect();
  }, [headerRef]);

  return { spacerHeight: height, scrolled }; // 👈 scrolled রিটার্ন করছে
}
