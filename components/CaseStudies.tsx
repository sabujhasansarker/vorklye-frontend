"use client";

import { caseStudies, homePage } from "@/data";
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
      // Only run the sticky-stack pin/scale animation on larger screens.
      // On mobile the cards render as a normal stacked list (see JSX below),
      // so pinning/scaling would fight the natural scroll flow.
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cards = itemsRef.current.filter(Boolean);

        cards.forEach((card, i) => {
          gsap.set(card, { zIndex: i + 1 });

          const pinTrigger = ScrollTrigger.create({
            trigger: card,
            start: "top 100px",
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
          });

          let fadeTween: gsap.core.Tween | undefined;

          if (cards[i + 1]) {
            fadeTween = gsap.to(card, {
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

          // Cleanup for this media query context
          return () => {
            pinTrigger.kill();
            fadeTween?.scrollTrigger?.kill();
            fadeTween?.kill();
          };
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative border-b border-neutral-900 bg-black py-16 sm:py-24 lg:py-30 text-white">
      <div ref={containerRef} className="container m-auto px-5 sm:px-8 lg:px-4">
        <div className="max-w-full lg:max-w-300">
          <p className="sub-title">{subtitle}</p>
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-15 mb-10 sm:mb-14 lg:mb-20 flex flex-col gap-6 sm:gap-8 lg:gap-10">
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
                  className="sticky-card flex flex-col lg:flex-row w-full items-stretch lg:items-center justify-between overflow-hidden rounded-sm border-2 border-neutral-900 bg-black"
                >
                  <div className="flex w-full lg:h-full lg:w-1/2 flex-col justify-center p-6 sm:p-10 lg:p-15">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="w-fit h-4 sm:h-8 object-contain"
                      />
                    )}

                    <h4 className="my-4 sm:my-5 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200">
                      <Link href={`/case-studies/${slug}`}>{item.title}</Link>
                    </h4>

                    <p className="max-w-full lg:max-w-123.75 text-base sm:text-lg font-medium leading-7 sm:leading-8 text-gray-200">
                      {item.description}
                    </p>

                    <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap gap-6 sm:gap-10 lg:gap-28">
                      {[
                        ["Services", item.services?.join(", ")],
                        ["Industry", item.industry],
                        ["Published", item.published],
                      ].map(
                        ([label, value]) =>
                          value && (
                            <div key={label}>
                              <p className="text-xs sm:text-sm font-semibold uppercase text-neutral-500">
                                {label}
                              </p>
                              <p className="text-sm sm:text-base font-semibold leading-7 sm:leading-8 text-gray-200">
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

                  <div className="lg:w-1/2 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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

type ServiceCaseStudiesProps = {
  title: string;
  subtitle: string;
  serviceId: number;
};

export const ServiceCaseStudiesSection: React.FC<ServiceCaseStudiesProps> = ({
  title,
  subtitle,
  serviceId,
}) => {
  const relatedCaseStudies = caseStudies.filter((item) =>
    item.serviceIds?.includes(serviceId),
  );

  // No related case studies
  if (!relatedCaseStudies.length) {
    return null;
  }

  return (
    <section className="relative border-b border-neutral-900 bg-black text-white py-16 sm:py-24 lg:py-35">
      <div className="container mx-auto px-5 sm:px-8 lg:px-0">
        {/* HEADER */}
        <div className="max-w-full lg:max-w-200 mx-auto text-center">
          <p className="sub-title">{subtitle}</p>

          <h2 className="section-title">{title}</h2>
        </div>

        {/* CASE STUDIES */}
        <div className="mt-10 sm:mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-12 sm:gap-y-16 lg:gap-y-20">
          {relatedCaseStudies.map((item) => {
            const categoryClass = item.industry
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-");

            return (
              <article
                key={item.id}
                className={`case-study-item ${categoryClass}`}
              >
                {/* IMAGE */}
                <Link
                  href={`/case-studies/${item.id}`}
                  className="block overflow-hidden rounded-sm group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-72
                      sm:h-100
                      lg:h-125
                      object-cover
                      rounded-sm
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />
                </Link>

                {/* INDUSTRY */}
                <p className="text-xs sm:text-sm font-bold mt-5 sm:mt-6 uppercase tracking-wide text-neutral-400">
                  {item.industry}
                </p>

                {/* TITLE */}
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-3 sm:mt-4 tracking-tight">
                  <Link
                    href={`/case-studies/${item.id}`}
                    className="hover:text-neutral-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </h4>

                {/* DESCRIPTION */}
                <p className="text-base sm:text-[17px] lg:text-[18px] leading-7 sm:leading-8 font-medium text-neutral-400 mt-3 max-w-2xl">
                  {item.description}
                </p>

                {/* SERVICES */}
                {item.services && (
                  <div className="flex gap-2 mt-6 sm:mt-8 flex-wrap">
                    {item.services.map((service, index) => (
                      <span
                        key={index}
                        className="
                          px-4
                          sm:px-5
                          py-1.5
                          sm:py-2
                          rounded-full
                          bg-neutral-900
                          border
                          border-neutral-800
                          text-neutral-300
                          text-xs
                          sm:text-[13px]
                          font-semibold
                        "
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
