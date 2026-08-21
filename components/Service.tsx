"use client";

import { homePage, services } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { ButtonNormal } from "./Button";

const ServiceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLHeadingElement[]>([]);
  const contentsRef = useRef<HTMLDivElement[]>([]);

  const { title, subtitle, services } = homePage.service;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // The pinned "one service open at a time" scroll animation only makes
      // sense with the side-by-side sticky layout used on lg+ screens. On
      // mobile/tablet the section renders as a normal stacked list with all
      // service details visible, so we skip the pin/height/opacity tweens
      // entirely there.
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.set(contentsRef.current, { overflow: "hidden" });
        gsap.set(contentsRef.current.slice(1), { height: 0, opacity: 0 });
        gsap.set(headersRef.current.slice(1), { color: "#404040" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=250%",
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        services.forEach((_, index) => {
          if (index === services.length - 1) return;

          tl.to(
            contentsRef.current[index],
            { height: 0, opacity: 0, duration: 1 },
            `step-${index}`,
          )
            .to(
              headersRef.current[index],
              { color: "#404040", duration: 1 },
              `step-${index}`,
            )
            .to(
              contentsRef.current[index + 1],
              { height: "auto", opacity: 1, duration: 1 },
              `step-${index}`,
            )
            .to(
              headersRef.current[index + 1],
              { color: "#ffffff", duration: 1 },
              `step-${index}`,
            );
          tl.set(
            contentsRef.current[index],
            { height: 0, opacity: 0 },
            `step-${index}+=1`,
          ).set(
            headersRef.current[index],
            { color: "#404040" },
            `step-${index}+=1`,
          );
        });

        // Cleanup when leaving this breakpoint (matchMedia handles reverting
        // the gsap.set calls automatically via context revert on ctx.revert())
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-black text-white relative flex items-start lg:items-center overflow-hidden border-b border-neutral-900 h-auto lg:h-screen py-16 sm:py-20 lg:py-0"
    >
      <div className="container m-auto flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-30 items-start px-5 sm:px-8 lg:px-6 relative">
        <div
          className="w-full lg:w-1/2 relative lg:sticky lg:top-0"
          ref={leftRef}
        >
          <p className="sub-title">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          {services.map(
            ({ title, shortDes, tags, feature, tagLine }, index) =>
              feature && (
                <div
                  key={index}
                  className={`border-b border-neutral-800 ${index === 0 ? "pb-5 sm:pb-6" : "py-5 sm:py-6"} w-full flex flex-col justify-start`}
                >
                  <h4
                    ref={(el) => {
                      if (el) headersRef.current[index] = el;
                    }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight transition-colors duration-300 text-white"
                  >
                    {title}
                  </h4>

                  <div
                    ref={(el) => {
                      if (el) contentsRef.current[index] = el;
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-500 text-sm sm:text-md font-semibold mt-3 sm:mt-4">
                      {tagLine}
                    </p>
                    <p className="text-neutral-300 text-base sm:text-lg lg:text-xl font-normal leading-7 sm:leading-8 mt-4 sm:mt-6">
                      {shortDes}
                    </p>
                    <div className="flex flex-wrap mt-6 sm:mt-8 gap-2.5 sm:gap-3">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-neutral-900 border border-neutral-800 text-white text-xs sm:text-[13px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className="mt-8 sm:mt-10 lg:mt-15"
                      data-cursor="Service Details"
                    >
                      <ButtonNormal text="Learn More" href="/services" />
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

export const ServiceItems: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const itemsRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const contentRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const items = itemsRef.current;
        const images = imagesRef.current;
        const contents = contentRef.current;

        if (!items.length) return;

        const buildAnimation = () => {
          gsap.killTweensOf(items);
          gsap.killTweensOf(images);
          gsap.killTweensOf(contents);

          ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.trigger === sectionRef.current) {
              trigger.kill();
            }
          });

          gsap.set(items, {
            y: 0,
          });

          gsap.set(items.slice(1), {
            y: () => window.innerHeight,
          });

          gsap.set(images, {
            y: 60,
            scale: 1.08,
            opacity: 0.7,
          });

          gsap.set(images[0], {
            y: 0,
            scale: 1,
            opacity: 1,
          });

          gsap.set(contents, {
            y: 0,
            opacity: 0.4,
          });

          gsap.set(contents[0], {
            y: 0,
            opacity: 1,
          });

          const overflowValues = contents.map((content) => {
            const viewportHeight = content.parentElement?.clientHeight || 0;
            const contentHeight = content.scrollHeight;

            return Math.max(0, contentHeight - viewportHeight);
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              pin: true,
              scrub: 0.5,
              anticipatePin: 1,
              invalidateOnRefresh: true,

              end: () => {
                let total = 0;

                overflowValues.forEach((overflow) => {
                  total += overflow > 0 ? 1.5 + overflow / 500 : 1;
                });

                return `+=${total * 100}%`;
              },
            },
          });

          items.forEach((item, index) => {
            const overflow = overflowValues[index];

            if (overflow > 0) {
              const scrollDuration = Math.max(0.35, overflow / 1000);

              tl.to(
                contents[index],
                {
                  y: -overflow,
                  duration: scrollDuration,
                  ease: "none",
                },
                "+=0.05",
              );
            }

            if (index === items.length - 1) return;

            tl.to(
              images[index],
              {
                y: -50,
                scale: 1.04,
                opacity: 0.45,
                duration: 1,
                ease: "none",
              },
              ">",
            );

            tl.to(
              contents[index],
              {
                opacity: 0.35,
                duration: 1,
                ease: "none",
              },
              "<",
            );

            tl.to(
              items[index + 1],
              {
                y: 0,
                duration: 1,
                ease: "none",
              },
              "<",
            );

            tl.to(
              images[index + 1],
              {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "none",
              },
              "<",
            );

            tl.to(
              contents[index + 1],
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "none",
              },
              "<",
            );
          });
        };

        const start = () => {
          buildAnimation();
          ScrollTrigger.refresh();
        };

        let resizeTimer: ReturnType<typeof setTimeout>;

        if (document.fonts?.ready) {
          document.fonts.ready.then(start);
        } else {
          requestAnimationFrame(start);
        }

        const handleResize = () => {
          clearTimeout(resizeTimer);

          resizeTimer = setTimeout(() => {
            buildAnimation();
            ScrollTrigger.refresh();
          }, 200);
        };

        window.addEventListener("resize", handleResize);

        return () => {
          clearTimeout(resizeTimer);
          window.removeEventListener("resize", handleResize);

          ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.trigger === sectionRef.current) {
              trigger.kill();
            }
          });

          gsap.killTweensOf(items);
          gsap.killTweensOf(images);
          gsap.killTweensOf(contents);
        };
      });

      return () => {
        mm.revert();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen md:h-screen md:overflow-hidden border-b border-neutral-900 bg-black"
    >
      <div className="container mx-auto h-full px-5 sm:px-8 lg:px-0">
        <div className="flex flex-col md:flex-row h-full w-full ...">
          {services.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => {
                if (el) {
                  itemsRef.current[index] = el;
                }
              }}
              className="md:col-start-1 md:row-start-1 h-auto md:h-screen w-full bg-black"
            >
              <div className="flex flex-col md:flex-row h-full w-full gap-6 sm:gap-10 md:gap-25">
                {/* IMAGE */}
                <div className="h-[36%] sm:h-[40%] md:h-screen w-full md:w-1/2 overflow-hidden shrink-0">
                  <img
                    ref={(el) => {
                      if (el) {
                        imagesRef.current[index] = el;
                      }
                    }}
                    src={item.image}
                    alt={item.title}
                    className="block h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="h-[64%] sm:h-[60%] md:h-screen w-full md:w-1/2 overflow-hidden">
                  <div
                    ref={(el) => {
                      if (el) {
                        contentRef.current[index] = el;
                      }
                    }}
                    className="flex flex-col gap-8 sm:gap-12 md:gap-30 py-6 sm:py-10 md:py-20 justify-start md:justify-around h-full"
                  >
                    <div>
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight md:leading-9 text-gray-200">
                        <Link
                          href={`/services/${item.title.split(" ").join("-").split("/").join("-")}`}
                          className="hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </h4>

                      <p className="my-3 sm:my-4 md:my-5 text-sm sm:text-base md:text-[18px] font-medium leading-6 sm:leading-7 md:leading-8 text-neutral-400">
                        {item.shortDes}
                      </p>

                      <div className="mt-4 sm:mt-6 md:mt-10">
                        {item.subServices.map((service, i) => (
                          <div
                            key={i}
                            className="group flex justify-between border-b border-neutral-900 py-3 sm:py-4 md:py-5 hover:border-neutral-700 transition-colors"
                          >
                            <div className="flex gap-3 sm:gap-4 md:gap-5 items-center min-w-0">
                              <p className="text-base sm:text-lg font-bold leading-5 text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0">
                                {i <= 9 ? `0${i}` : i}
                              </p>

                              <h4 className="text-sm sm:text-base md:text-[19px] font-semibold leading-6 text-neutral-400 group-hover:text-white transition-colors truncate">
                                {service}
                              </h4>
                            </div>

                            <ArrowUpRight className="shrink-0 size-4 sm:size-5 text-zinc-600 group-hover:text-white transition-colors" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {item.skillImage && (
                      <img
                        src={item.skillImage}
                        alt={item.title}
                        className="hidden sm:block w-32 md:w-60 shrink-0"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
