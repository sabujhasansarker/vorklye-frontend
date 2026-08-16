"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We start by understanding your business, goals, target audience, and competitors to build a clear project foundation.",
    tags: ["Video meeting", "Discovery"],
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Crafting bespoke wireframes, interactive UI prototypes, and design systems tailored specifically for your brand identity.",
    tags: ["Video meeting"],
  },
  {
    number: "03",
    title: "Development & Build",
    description:
      "Converting designs into high-performance, pixel-perfect Shopify or WordPress stores with seamless integrations.",
    tags: ["Video meeting"],
  },
  {
    number: "04",
    title: "Scale & Optimization",
    description:
      "Rigorous testing, SEO optimization, speed enhancement, and ongoing support to ensure your store continues to grow.",
    tags: ["Video meeting"],
  },
];

const WorkingProcess: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      const total = cards.length;

      const setStartPositions = () => {
        const containerWidth = containerRef.current?.offsetWidth ?? 0;
        const cardWidth = cards[0]?.offsetWidth ?? 0;
        const centerX = containerWidth / 2 - cardWidth / 2;

        cards.forEach((card, i) => {
          const naturalX =
            (containerWidth / total) * i +
            (containerWidth / total - cardWidth) / 2;
          const offsetX = centerX - naturalX;
          const rotate = (i - (total - 1) / 2) * 4;
          const y = i % 2 === 0 ? -15 : 15;

          gsap.set(card, {
            x: offsetX,
            y,
            rotate,
            zIndex: total - Math.abs(i - (total - 1) / 2),
          });
        });
      };

      setStartPositions();

      const baseStart = 80;
      const baseEnd = -20;
      const tweens: gsap.core.Tween[] = [];

      cards.forEach((card, i) => {
        const startPct = baseStart - i * 6;
        const tween = gsap.to(card, {
          x: 0,
          y: 0,
          rotate: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top ${startPct}%`,
            end: `top ${startPct + (baseEnd - baseStart)}%`,
            scrub: 2.5,
          },
        });
        tweens.push(tween);
      });

      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        tweens.forEach((t) => t.kill());
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black border-b border-neutral-900 overflow-hidden relative flex flex-col justify-center py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="sub-title">/ Working process</p>
            <h2 className="section-title">How it works</h2>
          </div>
          <Button text="Get in touch" />
        </div>
      </div>

      <div
        ref={containerRef}
        className="working-process-items mt-12 overflow-hidden w-full"
      >
        <div className="flex gap-8 container mx-auto px-4">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="working-process-item rounded-sm w-1/4 p-8 border border-neutral-900 bg-neutral-950 flex flex-col justify-between h-130 will-change-transform"
            >
              <div>
                <p className="text-neutral-500 text-2xl font-semibold leading-7">
                  {step.number}
                </p>
                <h4 className="text-gray-200 text-2xl font-semibold leading-8 mt-10">
                  {step.title}
                </h4>
                <p className="text-neutral-400 text-base font-medium leading-6 mt-6">
                  {step.description}
                </p>
              </div>
              <div className="flex mt-8 gap-x-5 gap-y-2 flex-wrap">
                {step.tags.map((tag, tagIndex) => (
                  <p
                    key={tagIndex}
                    className="inline-flex justify-center items-center gap-5 text-sm text-neutral-400 font-semibold leading-6"
                  >
                    <span className="h-1.5 w-1.5 bg-neutral-400 rounded-full"></span>{" "}
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
