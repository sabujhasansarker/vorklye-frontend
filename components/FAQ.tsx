"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const faqItems = [
  {
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
  {
    question: "Do you offer support after the project is delivered?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
  {
    question: "What industries do you usually work with?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
  {
    question: "How much does it cost to work with your agency?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
];

const FAQ: React.FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-42.5 border-b border-neutral-900">
      <div className="container m-auto">
        <h2 className="section-title">
          Frequently{" "}
          <span className="text-neutral-500">
            asked
            <br />
            questions
          </span>
        </h2>
        <div className="flex gap-20 mt-20 justify-between items-start">
          <div className="accordion-items w-full">
            {faqItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`accordion-item border-b border-neutral-900  ${
                    index !== 0 ? "py-8" : "pb-8 "
                  } ${index == faqItems.length - 1 ? "border-0! pb-0" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="accordion-item-title flex justify-between items-center w-full text-left cursor-pointer"
                  >
                    <h4 className="text-gray-200 text-xl font-semibold leading-7">
                      {item.question}
                    </h4>
                    <ArrowUpRight
                      className={`shrink-0 transition-all duration-300 ${
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
                      <div className="accordion-item-content pt-6">
                        <p className="text-neutral-500 leading-8 text-[17px] font-medium">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-w-80 p-8 bg-neutral-900 inline-flex flex-col justify-start items-start shrink-0 rounded-sm">
            <img
              className="size-16 relative rounded-sm"
              src="https://placehold.co/62x62"
              alt="Ariyan"
            />
            <h4 className="text-white text-lg font-medium leading-7 mt-4">
              Hi, I&apos;m Ariyan, the CEO and Founder of Vorklye. Don&apos;t
              hesitate to reach out to me anytime – I&apos;m here to answer all
              your questions!
            </h4>
            <a
              href="#"
              className="mt-7 py-4 w-full relative rounded-sm bg-[#46E265] inline-flex justify-center items-center gap-2.5"
            >
              <span className="text-black text-lg font-semibold leading-7">
                Ask Questions
              </span>
              <img
                className="self-stretch h-6 relative"
                src="/images/whatapp-icon.png"
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
