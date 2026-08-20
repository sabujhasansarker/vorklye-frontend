"use client";

import { homePage } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Button, { ButtonUnderline } from "./Button";

const CaseStudiesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const { title, subtitle, caseStudies, button } = homePage.caseStudie;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = itemsRef.current.filter(Boolean);

      cards.forEach((card, i) => {
        gsap.set(card, { zIndex: i + 1 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 100px",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        if (cards[i + 1]) {
          gsap.to(card, {
            scale: 0.92,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 90%",
              end: "top 10%",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative border-b border-neutral-900 bg-black py-35 text-white">
      <div ref={containerRef} className="container m-auto px-4">
        <div className="max-w-200">
          <p className="sub-title">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="mt-15 mb-20 flex flex-col gap-10">
          {caseStudies
            .filter((item) => item.feature)
            .map((item, index) => {
              const slug = item.title.toLowerCase().replace(/\s+/g, "-");

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    if (el) itemsRef.current[index] = el;
                  }}
                  className="sticky-card flex w-full items-center justify-between overflow-hidden rounded-sm border-2 border-neutral-900 bg-black"
                >
                  <div className="flex h-full w-1/2 flex-col justify-center p-15">
                    {item.logo && (
                      <img src={item.logo} alt={item.title} className="w-fit" />
                    )}

                    <h4 className="my-5 text-3xl font-bold text-gray-200">
                      <Link href={`/case-studies/${slug}`}>{item.title}</Link>
                    </h4>

                    <p className="max-w-123.75 text-lg font-medium leading-8 text-gray-200">
                      {item.description}
                    </p>

                    <div className="mt-10 flex gap-28">
                      {[
                        ["Services", item.services?.join(", ")],
                        ["Industry", item.industry],
                        ["Published", item.published],
                      ].map(
                        ([label, value]) =>
                          value && (
                            <div key={label}>
                              <p className="text-sm font-semibold uppercase text-neutral-500">
                                {label}
                              </p>
                              <p className="text-base font-semibold leading-8 text-gray-200">
                                {value}
                              </p>
                            </div>
                          ),
                      )}
                    </div>

                    <ButtonUnderline
                      text="View Details"
                      href={`/case-studies/${slug}`}
                    />
                  </div>

                  <Link href={`/case-studies/${slug}`} className="h-160 w-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>
                </div>
              );
            })}
        </div>

        <div className="text-center">
          <Button text={button.label} href={button.link} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
