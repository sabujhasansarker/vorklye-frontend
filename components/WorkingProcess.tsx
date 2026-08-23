"use client";

import { homePage } from "@/data";
import { ServiceProcessStep } from "@/data/type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const WorkingProcess: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  const { title, subtitle, button, process } = homePage.workingProcess;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The "scattered cards converging into a row" effect only makes sense
      // for the horizontal 4-up layout used on lg+ screens. On mobile/tablet
      // the cards stack vertically in normal document flow, so we skip the
      // x/y/rotate scatter math and scroll-scrubbed tweens entirely there.
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
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
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black border-b border-neutral-900 overflow-hidden relative flex flex-col justify-center py-8 sm:py-10 lg:py-30"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-4">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:items-center lg:justify-between">
          <div className="w-full lg:max-w-xl">
            <p className="sub-title">{subtitle}</p>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </div>
          <Button text={button.label} href={button.link} />
        </div>
      </div>

      <div
        ref={containerRef}
        className="working-process-items mt-8 sm:mt-10 lg:mt-12 overflow-hidden w-full"
      >
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8 container mx-auto px-5 sm:px-8 lg:px-4">
          {process.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="working-process-item rounded-sm w-full lg:w-1/4 p-6 sm:p-7 lg:p-8 border border-neutral-900 bg-neutral-950 flex flex-col justify-between h-auto lg:h-130 will-change-transform"
            >
              <div>
                <p className="text-neutral-500 text-xl sm:text-2xl font-semibold leading-7">
                  {index + 1 <= 9 ? "0" + (index + 1) : index + 1}
                </p>
                <h4 className="text-gray-200 text-xl sm:text-2xl font-semibold leading-7 sm:leading-8 mt-6 sm:mt-8 lg:mt-10">
                  {step.title}
                </h4>
                <p className="text-neutral-400 text-sm sm:text-base font-medium leading-6 mt-4 sm:mt-6">
                  {step.description}
                </p>
              </div>
              <div className="flex mt-6 sm:mt-8 gap-x-4 sm:gap-x-5 gap-y-2 flex-wrap">
                {step.tags.map((tag, tagIndex) => (
                  <p
                    key={tagIndex}
                    className="inline-flex justify-center items-center gap-3 sm:gap-5 text-xs sm:text-sm text-neutral-400 font-semibold leading-6"
                  >
                    <span className="h-1.5 w-1.5 bg-neutral-400 rounded-full shrink-0"></span>{" "}
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

type ServiceWorkingProcessProps = {
  title: string;
  subtitle: string;
  process: ServiceProcessStep[];
};

export const ServiceWorkingProcess: React.FC<ServiceWorkingProcessProps> = ({
  process,
  title,
  subtitle,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
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
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black border-b border-neutral-900 overflow-hidden relative flex flex-col justify-center py-8 sm:py-10 lg:py-12"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-4">
        <div className="text-center">
          <p className="sub-title">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
        </div>
      </div>

      <div
        ref={containerRef}
        className="working-process-items mt-8 sm:mt-10 lg:mt-12 overflow-hidden w-full"
      >
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8 container mx-auto px-5 sm:px-8 lg:px-4">
          {process.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="working-process-item rounded-sm w-full lg:w-1/4 p-6 sm:p-7 lg:p-8 border border-neutral-900 bg-neutral-950 flex flex-col justify-between h-auto lg:h-130 will-change-transform"
            >
              <div>
                <p className="text-neutral-500 text-xl sm:text-2xl font-semibold leading-7">
                  {index + 1 <= 9 ? "0" + (index + 1) : index + 1}
                </p>
                <h4 className="text-gray-200 text-xl sm:text-2xl font-semibold leading-7 sm:leading-8 mt-6 sm:mt-8 lg:mt-10">
                  {step.title}
                </h4>
                <p className="text-neutral-400 text-sm sm:text-base font-medium leading-6 mt-4 sm:mt-6">
                  {step.description}
                </p>
              </div>
              <div className="flex mt-6 sm:mt-8 gap-x-4 sm:gap-x-5 gap-y-2 flex-wrap">
                {step.tags &&
                  step.tags.map((tag, tagIndex) => (
                    <p
                      key={tagIndex}
                      className="inline-flex justify-center items-center gap-3 sm:gap-5 text-xs sm:text-sm text-neutral-400 font-semibold leading-6"
                    >
                      <span className="h-1.5 w-1.5 bg-neutral-400 rounded-full shrink-0"></span>{" "}
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
