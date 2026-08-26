"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const ICONS = {
  drag: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  eye: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

const DEFAULT = {
  duration: 0.3,
  opacity: 0.5,
  width: "10px",
  height: "10px",
  backgroundColor: "#fff",
  borderWidth: "2px",
};

const HOVER_BIG = {
  duration: 0.3,
  opacity: 1,
  width: "100px",
  height: "100px",
  borderWidth: "0",
  backgroundColor: "#fff",
};

const HOVER_CLICKABLE = {
  duration: 0.3,
  opacity: 0.5,
  width: "100px",
  height: "100px",
  borderWidth: "0",
  backgroundColor: "#ccc",
};

const CustomCursor: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
    const pos = { ...mouse };
    const ratio = 0.15;

    gsap.set(ball, { xPercent: -50, yPercent: -50 });

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const tick = () => {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;
      gsap.set(ball, { x: pos.x, y: pos.y });
    };

    // fills the ball with custom inner content (icon/text), clearing old content first
    const setContent = (html: string) => {
      ball.innerHTML = "";
      if (!html) return;
      const wrap = document.createElement("div");
      wrap.className =
        "flex items-center justify-center gap-4 h-full w-full text-black text-sm font-semibold text-center upercase px-1 landing-6";
      wrap.innerHTML = html;
      ball.appendChild(wrap);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target?.closest) return;

      if (target.closest(".swiper, .swiper-container, .slick-list")) {
        setContent(ICONS.drag);
        gsap.to(ball, HOVER_BIG);
        return;
      }

      const cursorTarget = target.closest("[data-cursor]");
      if (cursorTarget) {
        setContent(cursorTarget.getAttribute("data-cursor") || "");
        gsap.to(ball, HOVER_BIG);
        return;
      }

      if (target.closest(".gallery")) {
        setContent(ICONS.eye);
        gsap.to(ball, HOVER_BIG);
        return;
      }

      const clickable = target.closest("a, .c-pointer, button, .progress");
      const omitted = target.closest(".project_slider a");
      if (clickable && !omitted) {
        gsap.to(ball, HOVER_CLICKABLE);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target?.closest) return;
      setContent("");
      gsap.to(ball, DEFAULT);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter, true);
    document.addEventListener("mouseleave", onLeave, true);
    gsap.ticker.add(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter, true);
      document.removeEventListener("mouseleave", onLeave, true);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 max-[1040px]:hidden">
      <div
        ref={ballRef}
        className="fixed left-0 top-0 flex size-2.5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white opacity-50 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};

export default CustomCursor;
