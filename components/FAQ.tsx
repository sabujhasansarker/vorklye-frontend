"use client";

import { homePage } from "@/data";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const { title, faqs, ceo, whatsApp } = homePage.faq;

  return (
    <div className="py-16 sm:py-28 lg:py-42.5 border-b border-neutral-900">
      <div className="container m-auto px-5 sm:px-8 lg:px-0">
        <h2
          className="section-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-20 mt-10 sm:mt-14 lg:mt-20 justify-between items-start">
          <div className="accordion-items w-full">
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`accordion-item border-b border-neutral-900  ${
                    index !== 0
                      ? "py-5 sm:py-6 lg:py-8"
                      : "pb-5 sm:pb-6 lg:pb-8 "
                  } ${index == faqs.length - 1 ? "border-0! pb-0" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="accordion-item-title flex justify-between items-center gap-4 w-full text-left cursor-pointer"
                  >
                    <h4 className="text-gray-200 text-base sm:text-lg lg:text-xl font-semibold leading-6 sm:leading-7">
                      {item.question}
                    </h4>
                    <ArrowUpRight
                      className={`shrink-0 size-5 sm:size-6 transition-all duration-300 ${
                        isActive
                          ? "text-neutral-300 rotate-90"
                          : "text-[#1B1B1B]"
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="accordion-item-content pt-4 sm:pt-5 lg:pt-6">
                        <p className="text-neutral-500 leading-7 lg:leading-8 text-sm sm:text-base lg:text-[17px] font-medium">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full lg:max-w-80 p-6 sm:p-8 bg-neutral-900 inline-flex flex-col justify-start items-start shrink-0 rounded-sm">
            <img
              className="size-14 sm:size-16 relative rounded-sm object-cover"
              src={ceo.image}
              alt={ceo.name}
            />
            <h4 className="text-white text-base sm:text-lg font-medium leading-6 sm:leading-7 mt-4">
              {ceo.text}
            </h4>
            <a
              href={`tel:${whatsApp.replace(/\s/g, "")}`}
              className="mt-6 sm:mt-7 py-3.5 sm:py-4 w-full relative rounded-sm bg-[#46E265] inline-flex justify-center items-center gap-2.5"
            >
              <span className="text-black text-base sm:text-lg font-semibold leading-6 sm:leading-7">
                Ask Questions
              </span>
              <img
                className="self-stretch h-5 sm:h-6 relative"
                src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/69c2734b70719aeb95273a22_WhatsApp.avif"
                alt="WhatsApp"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
