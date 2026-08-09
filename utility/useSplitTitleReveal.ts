"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useSplitTitleReveal(selector: string) {
  useGSAP(() => {
    const titles = gsap.utils.toArray<HTMLElement>(selector);

    titles.forEach((title) => {
      const split = SplitText.create(title, {
        type: "words,chars,lines",
        linesClass: "lines",
        wordsClass: "words",
        charsClass: "chars",
      });

      gsap.from(split.words, {
        y: 80,
        duration: 0.5,
        stagger: 0.02,
        opacity: 0,
        delay: 0.15,
        ease: "circ.out",
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });
}
