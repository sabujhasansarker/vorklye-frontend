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
  const [scrolled, setScrolled] = useState(false); // State to sync scrolled class name
  const visibleRef = useRef(true); // Direction-based show/hide state
  const compactRef = useRef(false); // Compact/expanded state based on top position

  useGSAP(
    () => {
      if (!ready || !headerRef.current) return;
      const header = headerRef.current;
      const logo = logoRef.current;

      // Set initial padding values (equivalent to Tailwind py-10 = 40px)
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
        header.classList.add("scrolled");
        setScrolled(true);
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
        header.classList.remove("scrolled");
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

          compact(); // Compact whenever scrolled away from top
          if (self.direction === -1) show();
          else hide();
        },
      });

      return () => st.kill();
    },
    { scope: headerRef, dependencies: [ready, topThreshold] },
  );

  // Sync spacer height when header dimensions change
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ro = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });
    ro.observe(header);

    return () => ro.disconnect();
  }, [headerRef]);

  return { spacerHeight: height, scrolled };
}
