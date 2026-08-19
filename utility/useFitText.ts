"use client";

import { RefObject, useLayoutEffect, useState } from "react";

export function useFitText(
  ref: RefObject<HTMLElement | null>,
  options: { minSize?: number; maxSize?: number; fitHeight?: boolean } = {},
) {
  const { minSize = 10, maxSize = 2000, fitHeight = true } = options;
  const [fontSize, setFontSize] = useState(minSize);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      const parent = el.parentElement;
      if (!parent) return;

      const targetWidth = parent.clientWidth;
      const targetHeight = parent.clientHeight;
      const rawText = el.textContent || "";
      if (!rawText || targetWidth === 0) return;

      const computed = window.getComputedStyle(el);

      let text = rawText;
      if (computed.textTransform === "uppercase") text = text.toUpperCase();
      else if (computed.textTransform === "lowercase")
        text = text.toLowerCase();

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const referenceSize = 100;
      const letterSpacing = parseFloat(computed.letterSpacing) || 0;
      const currentFontSize = parseFloat(computed.fontSize || "16");

      ctx.font = `${computed.fontStyle} ${computed.fontWeight} ${referenceSize}px ${computed.fontFamily}`;
      const naturalWidth =
        ctx.measureText(text).width +
        letterSpacing * (text.length - 1) * (referenceSize / currentFontSize);

      if (naturalWidth === 0) return;

      // Step 1: Calculate font size based on width
      const widthBasedSize = (targetWidth / naturalWidth) * referenceSize;

      let finalSize = widthBasedSize;

      // Step 2: If height constraint exists, measure actual rendered height in DOM
      // (Using real rendered height is more reliable than estimation)
      if (fitHeight && targetHeight > 0) {
        el.style.fontSize = `${widthBasedSize}px`;
        const renderedHeight = el.getBoundingClientRect().height;

        if (renderedHeight > targetHeight) {
          const scale = targetHeight / renderedHeight;
          finalSize = widthBasedSize * scale;
        }
      }

      finalSize = Math.max(minSize, Math.min(maxSize, finalSize));
      setFontSize(finalSize);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(fit);
    }
    fit();

    const ro = new ResizeObserver(fit);
    if (el.parentElement) ro.observe(el.parentElement);

    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [ref, minSize, maxSize, fitHeight]);

  return fontSize;
}
