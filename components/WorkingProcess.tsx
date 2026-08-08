"use client";

import { ArrowDownRight } from "lucide-react";
import React from "react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  tag: string;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We start by understanding your business, goals, target audience, and competitors to build a clear project foundation.",
    tag: "Video meeting",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Crafting bespoke wireframes, interactive UI prototypes, and design systems tailored specifically for your brand identity.",
    tag: "Figma & Wireframing",
  },
  {
    number: "03",
    title: "Development & Build",
    description:
      "Converting designs into high-performance, pixel-perfect Shopify or WordPress stores with seamless integrations.",
    tag: "Custom Development",
  },
  {
    number: "04",
    title: "Scale & Optimization",
    description:
      "Rigorous testing, SEO optimization, speed enhancement, and ongoing support to ensure your store continues to grow.",
    tag: "Launch & Support",
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
          <a href="#" className="btn-primary">
            <span>Get in touch</span>
            <ArrowDownRight />
          </a>
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
              className="working-process-item shrink-0 w-[500px] p-8 border border-neutral-900 bg-neutral-950 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <p className="justify-start text-neutral-500 text-2xl font-semibold leading-7">
                  {step.number}
                </p>
                <h4 className="text-gray-200 text-2xl font-semibold leading-8 mt-5">
                  {step.title}
                </h4>
                <p className="text-neutral-400 text-base font-medium leading-6 mt-6">
                  {step.description}
                </p>
              </div>
              <div className="flex mt-8">
                <span className="px-5 py-2.5 outline -outline-offset-1 outline-neutral-700 inline-flex justify-center items-center text-neutral-300 text-sm font-medium leading-6 rounded-md">
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
