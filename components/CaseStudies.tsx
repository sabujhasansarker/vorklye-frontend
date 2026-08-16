"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Button, { ButtonUnderline } from "./Button";

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
    image:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
  },
  {
    id: 4,
    title: "Rovero Commerce Platform",
    description:
      "Tailored consult service businesses, focusing on growth strategies. Sed velit dignissim sodales ut eu sminte.",
    services: ["Migration", "Integrations"],
    industry: "Fashion",
    published: "2023",
    image:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
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
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = itemsRef.current.filter(Boolean);

      cards.forEach((card, index) => {
        gsap.set(card, { zIndex: index + 1 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 100px",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];

          gsap.to(card, {
            scale: 0.92,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 90%",
              end: "top 10%",
              scrub: true,
              onLeave: () => gsap.set(card, { scale: 0.92, opacity: 0 }),
              onLeaveBack: () => gsap.set(card, { scale: 1, opacity: 1 }),
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-35 bg-black border-b border-neutral-900 text-white relative">
      <div className="container m-auto px-4" ref={containerRef}>
        <div className="max-w-200">
          <p className="sub-title">/Case Studies</p>
          <h2 className="section-title">
            Real stories, real results – see what we’ve made possible.
          </h2>
        </div>

        <div className="casestudie-container w-full mt-15 relative flex flex-col gap-10 mb-20">
          {caseStudies.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="case-studie-item rounded-sm border-2 border-neutral-900 w-full flex justify-between items-center bg-black overflow-hidden sticky-card"
            >
              <div className="p-15 w-1/2 h-full flex flex-col justify-center">
                <img src="images/brand/3.png" className="w-fit" alt="" />
                <h4 className="text-gray-200 text-3xl font-bold leading-9 my-5">
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
                  className="w-full h-140 object-cover object-center"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="m-auto text-center">
          <Button text="More works" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

export const CaseStudiesSection2: React.FC = () => {
  return (
    <div className="py-35">
      <div className="container m-auto px-4">
        <div className="max-w-200">
          <p className="text-neutral-400 text-lg font-medium">/Case Studies</p>
          <h2 className="section-title">
            Real stories, real results – see what we’ve made possible.
          </h2>
        </div>
        <div className="case-studies-container flex gap-15 mt-12 flex-wrap">
          {caseStudies.map((item) => (
            <div className="w-full" key={item.id}>
              <div className="flex gap-15">
                <img
                  src={item.image}
                  className="w-6/12 h-150 object-cover"
                  alt=""
                />
                <div className="mt-6">
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                  <div className="inline-flex justify-start items-start gap-28 mt-4">
                    <div className="inline-flex flex-col justify-start items-start gap-2">
                      <div className="text-neutral-500 text-sm font-semibold uppercase leading-6">
                        Services
                      </div>
                      <div className="flex flex-col justify-start items-start gap-1">
                        {item.services.map((service, sIndex) => (
                          <div
                            key={sIndex}
                            className="text-gray-200 font-medium leading-7"
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-2">
                      <div className="text-neutral-500 text-sm font-semibold uppercase leading-6">
                        Industry
                      </div>
                      <div className="text-gray-200 font-medium leading-7 mt-1">
                        {item.industry}
                      </div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-2">
                      <div className="text-neutral-500 text-sm font-semibold uppercase leading-6">
                        Published
                      </div>
                      <div className="text-gray-200 font-medium leading-7 mt-1">
                        {item.published}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
