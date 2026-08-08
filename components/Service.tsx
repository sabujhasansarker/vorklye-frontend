import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".service-item");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 200px",
          end: () => `+=${items.length * 100}%`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      items.forEach((item: any, index: number) => {
        if (index > 0) {
          tl.from(
            item,
            {
              yPercent: 120,
              opacity: 0,
              ease: "none",
            },
            `card-${index}`,
          ).to(
            items.slice(0, index),
            {
              transformOrigin: "top center",
              opacity: 1,
              ease: "none",
            },
            `card-${index}`,
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-35 overflow-hidden border-b border-neutral-900 bg-black text-white relative">
      <div
        ref={containerRef}
        className="container m-auto flex gap-20 items-start"
      >
        <div className="w-1/2 sticky top-0">
          <p className="text-gray-200 text-lg font-medium leading-8">
            /What we build
          </p>
          <h2 className="section-title mt-7.5 font-bold">
            End-to-end Shopify systems, designed to scale the brand behind the
            store.
          </h2>
        </div>

        <div className="w-1/2 service-items relative pb-110">
          {services.map(({ number, title, description, tags }, index) => {
            const stepTop = index * 100;

            return (
              <div
                key={number}
                className="service-item p-10 border border-neutral-900 absolute left-0 w-full bg-neutral-950 flex flex-col justify-between overflow-hidden"
                style={{
                  top: `${stepTop}px`,
                  willChange: "transform, opacity",
                  zIndex: index + 1,
                }}
              >
                <div>
                  <div className="flex gap-5 items-center">
                    <span className="text-gray-400 text-base font-extrabold">
                      {number}
                    </span>
                    <h4 className="text-gray-200 text-3xl font-semibold">
                      {title}
                    </h4>
                  </div>
                  <p className="text-neutral-400 text-base font-medium leading-7 mt-8">
                    {description}
                  </p>
                </div>

                <div className="flex flex-wrap mt-7 gap-2">
                  {tags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-5 py-3 bg-neutral-900 text-gray-200 text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
