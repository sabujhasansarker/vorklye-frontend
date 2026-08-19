"use client";

import { caseStudies, caseStudiesSectionData } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Button, { ButtonUnderline } from "./Button";

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
          <p className="sub-title">{caseStudiesSectionData.subtitle}</p>
          <h2 className="section-title">
            {caseStudiesSectionData.title}
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
                {item.logo && <img src={item.logo} className="w-fit" alt={item.title} />}
                <h4 className="text-gray-200 text-3xl font-bold leading-9 my-5">
                  <Link href={`/case-studies/${item.slug}`} className="hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </h4>
                <p className="max-w-123.75 text-gray-200 text-lg font-medium leading-8">
                  {item.description}
                </p>

                <div className="inline-flex justify-start items-start gap-28 mt-10">
                  <div className="inline-flex flex-col justify-start items-start gap-3.5">
                    <div className="text-neutral-500 text-sm font-semibold uppercase leading-6">
                      {caseStudiesSectionData.servicesLabel}
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
                      {caseStudiesSectionData.industryLabel}
                    </div>
                    <div className="text-gray-200 text-lg font-medium leading-7 mt-1">
                      {item.industry}
                    </div>
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-3.5">
                    <div className="text-neutral-500 text-sm font-semibold uppercase leading-6">
                      {caseStudiesSectionData.publishedLabel}
                    </div>
                    <div className="text-gray-200 text-lg font-medium leading-7 mt-1">
                      {item.published}
                    </div>
                  </div>
                </div>
                <ButtonUnderline
                  text={caseStudiesSectionData.viewMoreText}
                  href={`/case-studies/${item.slug}`}
                />
              </div>
              <div className="w-1/2 overflow-hidden">
                <Link href={`/case-studies/${item.slug}`}>
                  <img
                    src={item.image}
                    className="w-full h-140 object-cover object-center hover:scale-105 transition-transform duration-500"
                    alt={item.title}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="m-auto text-center">
          <Button text={caseStudiesSectionData.ctaText} href="/case-studies" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
