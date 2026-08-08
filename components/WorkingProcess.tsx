"use client";

import React from "react";
import Button from "./Button";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We start by understanding your business, goals, target audience, and competitors to build a clear project foundation.",
    tags: [
      "Video meeting",
      "Discovery",
      "Video meeting",
      "Discovery",
      "Video meeting",
      "Discovery",
      "Video meeting",
      "Discovery",
    ],
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Crafting bespoke wireframes, interactive UI prototypes, and design systems tailored specifically for your brand identity.",
    tags: ["Video meeting"],
  },
  {
    number: "03",
    title: "Development & Build",
    description:
      "Converting designs into high-performance, pixel-perfect Shopify or WordPress stores with seamless integrations.",
    tags: ["Video meeting"],
  },
  {
    number: "04",
    title: "Scale & Optimization",
    description:
      "Rigorous testing, SEO optimization, speed enhancement, and ongoing support to ensure your store continues to grow.",
    tags: ["Video meeting"],
  },
];

const WorkingProcess: React.FC = () => {
  return (
    <section
      id="working-process-section"
      className="h-screen bg-black border-b border-neutral-900 overflow-hidden relative flex flex-col justify-center py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="justify-start text-gray-200 text-lg font-medium leading-8">
              / Working process
            </p>
            <h2 className="section-title mt-4">How it works</h2>
          </div>
          <Button text="Get in touch" />
        </div>
      </div>

      <div className="working-process-items mt-12 overflow-hidden w-full">
        <div
          id="working-process-track"
          className="flex gap-8 w-max pl-[calc(50vw-250px)] pr-[calc(50vw-250px)]"
        >
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="working-process-item shrink-0 w-125 p-8 border border-neutral-900 bg-neutral-950 flex flex-col justify-between"
            >
              <div>
                <p className="text-neutral-500 text-2xl font-semibold leading-7">
                  {step.number}
                </p>
                <h4 className="text-gray-200 text-2xl font-semibold leading-8 mt-10">
                  {step.title}
                </h4>
                <p className="text-neutral-400 text-base font-medium leading-6 mt-6">
                  {step.description}
                </p>
              </div>
              <div className="flex mt-8 gap-x-5 gap-y-2 flex-wrap">
                {step.tags &&
                  step.tags.map((tag) => (
                    <p className="inline-flex justify-center items-center gap-5 text-sm text-neutral-400 font-semibold leading-6">
                      <span className="h-1.5 w-1.5 bg-neutral-400 rounded-full"></span>{" "}
                      {tag}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
