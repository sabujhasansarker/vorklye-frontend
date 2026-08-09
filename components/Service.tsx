"use client";

import { useStackScroll } from "@/utility/useStackScroll";
import React, { useRef } from "react";

type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "WordPress Development",
    description:
      "Custom Shopify and Shopify Plus builds designed for performance, flexibility, checkout, markets, and location-aware logic.",
    tags: ["Shopify Store Setup", "Custom Shopify Development"],
  },
  {
    number: "02",
    title: "WordPress Development 2",
    description:
      "Custom Shopify and Shopify Plus builds designed for performance, flexibility, checkout, markets, and location-aware logic.",
    tags: ["Shopify Store Setup", "Custom Shopify Development"],
  },
  {
    number: "03",
    title: "WordPress Development 3",
    description:
      "Custom Shopify and Shopify Plus builds designed for performance, flexibility, checkout, markets, and location-aware logic.",
    tags: ["Shopify Store Setup", "Custom Shopify Development"],
  },
];

const ServiceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useStackScroll(containerRef, ".service-item", "top 200px");

  return (
    <section className="py-35 overflow-hidden border-b border-neutral-900 bg-black text-white relative">
      <div
        ref={containerRef}
        className="container m-auto flex gap-20 items-start"
      >
        <div className="w-1/2">
          <p className="text-gray-200 text-lg font-medium leading-8">
            /What we build
          </p>
          <h2 className="section-title mt-7.5 font-bold">
            End-to-end Shopify systems, designed to scale the brand behind the
            store.
          </h2>
        </div>

        <div className="w-1/2 service-items relative pb-110">
          {services.map(({ number, title, description, tags }, index) => (
            <div
              key={number}
              className="service-item rounded-sm p-10 pt-8 border-2 border-neutral-900 absolute left-0 w-full bg-neutral-950 flex flex-col justify-between overflow-hidden"
              style={{
                top: `${index * 100}px`,
                willChange: "transform, opacity",
                zIndex: index + 1,
              }}
            >
              <div>
                <div className="flex gap-5 items-start">
                  <span className="text-neutral-400 text-xl font-extrabold mt-1">
                    {number}
                  </span>
                  <h4 className="text-[26px] font-semibold">{title}</h4>
                </div>
                <p className="text-neutral-400 text-base font-medium leading-7 mt-8">
                  {description}
                </p>
              </div>
              <div className="flex flex-wrap mt-7 gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-neutral-900 text-gray-200 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
