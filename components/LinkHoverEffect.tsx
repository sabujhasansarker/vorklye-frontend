"use client";

import gsap from "gsap";
import React, { useEffect } from "react";

// applies to:
//  - every <a> link automatically
//  - any other element explicitly opted in with data-hover-text
// skips:
//  - anything already processed
//  - links opted out with data-no-hover
const SELECTOR =
  "a:not([data-hover-ready]):not([data-no-hover]), [data-hover-text]:not([data-hover-ready])";

const HoverTextEffect: React.FC = () => {
  useEffect(() => {
    const setup = () => {
      const elements = document.querySelectorAll<HTMLElement>(SELECTOR);

      elements.forEach((el) => {
        el.dataset.hoverReady = "true";

        // skip elements with nested elements (icons, images, badges inside) —
        // rebuilding their markup would break them. only plain text.
        if (el.children.length > 0) return;

        const text = el.textContent?.trim();
        if (!text) return;

        el.style.overflow = "hidden";
        el.style.position = "relative";
        // only force inline-block on inline elements (links, spans) — block
        // elements (headings, divs) keep their own width/layout as-is
        const currentDisplay = getComputedStyle(el).display;
        if (currentDisplay === "inline") {
          el.style.display = "inline-block";
        }

        el.innerHTML = "";

        const inner = document.createElement("span");
        inner.className = "relative block";

        // visible text — slides up and out on hover
        const top = document.createElement("span");
        top.className = "block";
        top.textContent = text;

        // duplicate text sitting just below — slides up into view on hover
        const bottom = document.createElement("span");
        bottom.className = "block absolute left-0 top-full";
        bottom.textContent = text;
        bottom.setAttribute("aria-hidden", "true");

        inner.appendChild(top);
        inner.appendChild(bottom);
        el.appendChild(inner);

        const open = () =>
          gsap.to([top, bottom], {
            yPercent: -100,
            duration: 0.45,
            ease: "power3.out",
          });

        const close = () =>
          gsap.to([top, bottom], {
            yPercent: 0,
            duration: 0.45,
            ease: "power3.out",
          });

        el.addEventListener("mouseenter", open);
        el.addEventListener("mouseleave", close);
      });
    };

    setup();

    // catch elements added later (route changes, dynamic sections)
    const observer = new MutationObserver(() => setup());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default HoverTextEffect;
