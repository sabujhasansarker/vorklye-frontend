"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { ButtonNormal } from "./Button";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    id: "01",
    title: "Brand Strategy",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "02",
    title: "Marketing",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "03",
    title: "Web Design",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "04",
    title: "UI/UX Design",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "05",
    title: "Social Media",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
];

const ServiceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLHeadingElement[]>([]);
  const contentsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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

      gsap.set(contentsRef.current.slice(1), { height: 0, opacity: 0 });
      gsap.set(headersRef.current.slice(1), { color: "#404040" });

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
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-black text-white relative flex items-center overflow-hidden border-b border-neutral-900"
    >
      <div className="container m-auto flex gap-30 items-start px-6 relative">
        <div className="w-1/2 sticky top-0" ref={leftRef}>
          <p className="text-gray-200 text-lg font-medium leading-8">
            /What we build
          </p>
          <h2 className="section-title">
            End-to-end Shopify systems, designed to scale the brand behind the
            store.
          </h2>
        </div>

        <div className="w-1/2 flex flex-col justify-start">
          {services.map(({ id, title, subtitle, description, tags }, index) => (
            <div
              key={id}
              className={`border-b border-neutral-800 ${index === 0 ? "pb-6" : "py-6"} w-full flex flex-col justify-start`}
            >
              <h4
                ref={(el) => {
                  if (el) headersRef.current[index] = el;
                }}
                className="text-4xl font-bold tracking-tight transition-colors duration-300 text-white"
              >
                {title}
              </h4>

              <div
                ref={(el) => {
                  if (el) contentsRef.current[index] = el;
                }}
                className="overflow-hidden"
              >
                <p className="text-neutral-500 text-md font-medium mt-4">
                  {subtitle}
                </p>
                <p className="text-neutral-300 text-xl font-normal leading-8 mt-6">
                  {description}
                </p>
                <div className="flex flex-wrap mt-8 gap-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-white text-[13px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {/* {tags.map((tag, tagIndex) => (
                    <p
                      key={tagIndex}
                      className="inline-flex justify-center items-center gap-5 text-sm text-neutral-400 font-semibold leading-6"
                    >
                      <span className="h-1.5 w-1.5 bg-neutral-400 rounded-full"></span>{" "}
                      {tag}
                    </p>
                  ))} */}
                  <div className="mt-15">
                    <ButtonNormal text="Learn More" />
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

export default ServiceSection;
