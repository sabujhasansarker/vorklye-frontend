"use client";
import { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import VorklyeLayout from "@/components/VorklyeLayout";
import { caseStudiePage } from "@/data";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const page: React.FC<Props> = () => {
  const { title, subtitle, button } = caseStudiePage.hero;
  const caseStudies = caseStudiePage.caseStudies;
  const categories = [
    "All projects",
    ...Array.from(new Set(caseStudies.map((item) => item.industry))),
  ];

  const gridRef = useRef<HTMLDivElement>(null);
  const isotopeRef = useRef<any>(null);
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    let iso: any;

    const initIsotope = async () => {
      if (!gridRef.current) return;

      const IsotopeModule = await import("isotope-layout");
      const Isotope = IsotopeModule.default;

      iso = new Isotope(gridRef.current, {
        itemSelector: ".case-study-item",
        layoutMode: "masonry",
        transitionDuration: "0.5s",
        masonry: {
          columnWidth: ".case-study-item",
          gutter: 24,
        },
      });

      isotopeRef.current = iso;
    };

    initIsotope();

    return () => {
      if (iso) {
        iso.destroy();
      }
    };
  }, []);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);

    isotopeRef.current?.arrange({
      filter: filter === "*" ? "*" : `.${filter}`,
    });
  };

  return (
    <VorklyeLayout>
      <section>
        <div className="container m-auto px-5 sm:px-8 lg:px-0 pt-5 sm:pt-32 lg:pt-50">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-50 items-start lg:items-end justify-between">
            <h1
              className="w-full lg:w-2/4 text-white hero-title"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <div className="w-full lg:w-1/3">
              <p className="hero-subtitle mb-6 sm:mb-10 lg:mb-14">{subtitle}</p>

              <ButtonSm text={button.label} href={button.link} />
            </div>
          </div>
          <div className="about-banner mt-10 sm:mt-14 lg:mt-20">
            <img
              className="w-full"
              src="https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="pb-16 pt-20 sm:pt-28 md:pt-36 lg:pt-50 sm:pb-24 lg:pb-30 border-b border-neutral-900">
        <div className="container m-auto px-5 sm:px-8 lg:px-0">
          <ul className="flex justify-start flex-wrap gap-x-5 gap-y-3 sm:gap-x-7 sm:gap-y-5 lg:gap-x-12 lg:gap-20 text-base sm:text-lg lg:text-xl font-semibold tracking-tight">
            {categories.map((category) => {
              const filter =
                category === "All projects"
                  ? "*"
                  : category.toLowerCase().replace(/[^a-z0-9]+/g, "-");

              const isActive = activeFilter === filter;

              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => handleFilter(filter)}
                    className={`group flex items-center gap-3 sm:gap-4 cursor-pointer transition-colors duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-white"
                        : "text-neutral-500 hover:text-white"
                    }`}
                  >
                    <span
                      className={`size-2 rounded-full bg-white transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 sm:mt-10">
            <div
              ref={gridRef}
              className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-8"
            >
              {caseStudies.map((item) => {
                const categoryClass = item.industry
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-");

                return (
                  <div
                    key={item.id}
                    className={`case-study-item ${categoryClass} w-full lg:w-[calc(50%-12px)] mb-[50px]`}
                  >
                    <img
                      src={item.image}
                      className="w-full lg:h-150  object-cover rounded-sm"
                      alt={item.title}
                    />

                    <p className="text-sm font-bold mt-6 uppercase">
                      {item.industry}
                    </p>

                    <h4 className="text-2xl font-semibold mt-4 tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-[18px] leading-8 font-medium text-neutral-400 mt-3">
                      {item.description}
                    </p>

                    <div className="flex gap-2 mt-10 flex-wrap">
                      {item.services &&
                        item.services.map((service, index) => (
                          <p
                            key={index}
                            className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-white text-[13px] font-semibold"
                          >
                            {service}
                          </p>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <FAQ />
    </VorklyeLayout>
  );
};

export default page;
