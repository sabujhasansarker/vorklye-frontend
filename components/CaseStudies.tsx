"use client";

import { useSmootherReady } from "@/utility/useSmootherReady";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import Button, { ButtonUnderline } from "./Button";

gsap.registerPlugin(ScrollTrigger);

type CaseStudy = {
  id: number;
  title: string;
  description: string;
  services: string[];
  industry: string;
  published: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Capital Growth Solutions",
    description:
      "Tailored consult service businesses, focusing on growth strategies. Sed velit dignissim sodales ut eu sminte.",
    services: ["Migration", "Integrations"],
    industry: "Beauty",
    published: "2021",
    image: "/images/case-studies/1.png",
  },
  {
    id: 2,
    title: "Rovero Commerce Platform",
    description:
      "Tailored consult service businesses, focusing on growth strategies. Sed velit dignissim sodales ut eu sminte.",
    services: ["Migration", "Integrations"],
    industry: "Fashion",
    published: "2023",
    image: "/images/case-studies/1.png",
  },
  {
    id: 3,
    title: "Rovero Commerce Platform",
    description:
      "Tailored consult service businesses, focusing on growth strategies. Sed velit dignissim sodales ut eu sminte.",
    services: ["Migration", "Integrations"],
    industry: "Fashion",
    published: "2023",
    image: "/images/case-studies/1.png",
  },
];

const CaseStudiesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ready = useSmootherReady();

  useGSAP(
    () => {
      if (!ready) return; // ⬅️ smoother তৈরি না হওয়া পর্যন্ত কিছুই করবে না

      const items = gsap.utils.toArray(".case-studie-item");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20px",
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
              ease: "none",
            },
            `card-${index}`,
          ).to(
            items.slice(0, index),
            {
              scale: (i) => 1 - (index - i) * 0.05,
              transformOrigin: "top center",
              ease: "none",
            },
            `card-${index}`,
          );
        }
      });
    },
    { scope: containerRef, dependencies: [ready] }, // এখন এটা কাজ করবে — useGSAP dependencies সাপোর্ট করে
  );

  return (
    <section className="py-35 bg-black border-b border-neutral-900 text-white relative">
      <div ref={containerRef} className="container m-auto px-4">
        <div className="max-w-200">
          <p className="text-neutral-400 text-lg font-medium">/Case Studies</p>
          <h2 className="section-title">
            Real stories, real results – see what we’ve made possible.
          </h2>
        </div>

        <div className="casestudie-container w-full mt-15 relative min-h-[75vh] mb-10 overflow-hidden">
          {caseStudies.map((item, index) => {
            const stepTop = index * 50;
            return (
              <div
                key={item.id}
                className="case-studie-item rounded-sm border-2 border-neutral-900 absolute left-0 w-full flex justify-between items-center bg-black overflow-hidden"
                style={{
                  top: `${stepTop}px`,
                  willChange: "transform, opacity",
                  zIndex: index + 1,
                }}
              >
                <div className="p-15 w-1/2 h-full flex flex-col justify-center">
                  <img src="images/brand/3.png" className="w-fit" alt="" />

                  <h4 className="text-gray-200 text-3xl font-semibold leading-9 my-5">
                    {item.title}
                  </h4>
                  <p className="max-w-123.75 text-gray-200 text-lg font-medium leading-8">
                    {item.description}
                  </p>

                  <div className="inline-flex justify-start items-start gap-28 mt-10">
                    <div className="inline-flex flex-col justify-start items-start gap-3.5">
                      <div className="text-neutral-500 text-sm font-semibold uppercase leading-6">
                        Services
                      </div>
                      <div className="flex flex-col justify-start items-start gap-1">
                        {item.services.map((service, sIndex) => (
                          <div
                            key={sIndex}
                            className="text-gray-200 text-lg font-medium leading-7"
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="inline-flex flex-col justify-start items-start gap-3.5">
                      <div className="text-neutral-500 text-sm font-semibold uppercase leading-6">
                        Industry
                      </div>
                      <div className="text-gray-200 text-lg font-medium leading-7 mt-1">
                        {item.industry}
                      </div>
                    </div>

                    <div className="inline-flex flex-col justify-start items-start gap-3.5">
                      <div className="text-neutral-500 text-sm font-semibold uppercase leading-6">
                        Published
                      </div>
                      <div className="text-gray-200 text-lg font-medium leading-7 mt-1">
                        {item.published}
                      </div>
                    </div>
                  </div>
                  <ButtonUnderline text={"More about us"} />
                </div>
                <div className="w-1/2 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover object-center"
                    alt={item.title}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="m-auto text-center">
          <Button text="More works" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
