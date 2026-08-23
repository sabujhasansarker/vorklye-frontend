"use client";

import { homePage } from "@/data";
import { useActiveClosestToCenter, useTitlePinScroll } from "@/utility";
import React, { useRef } from "react";

const StatCard = ({ stat }: { stat: { value: string; text: string } }) => (
  <div className="stat-item">
    <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium leading-none text-white">
      {stat.value}
    </h2>
    <p className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-neutral-400">
      {stat.text}
    </p>
  </div>
);

const Activity: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useTitlePinScroll(sectionRef, titleRef, rightColRef);
  useActiveClosestToCenter(rightColRef, ".stat-item");

  const { title, activityStats } = homePage.activity;

  return (
    <div className="bg-neutral-950">
      <div className="container m-auto px-5 sm:px-8 lg:px-0">
        <div
          ref={sectionRef}
          className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-50 relative"
        >
          <h2
            ref={titleRef}
            className="section-title py-8 sm:py-16 lg:py-30 h-fit max-w-50"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <div
            ref={rightColRef}
            className="relative w-full lg:mx-auto lg:max-w-200"
          >
            <div className="flex items-center gap-10 sm:gap-14 lg:gap-20">
              <div className="flex flex-col gap-24 sm:gap-24 md:gap-32 lg:gap-48 xl:gap-100 py-8 sm:py-16 lg:py-30 px-4 sm:px-6 lg:px-8">
                {activityStats.col1.map((stat, i) => (
                  <StatCard key={i} stat={stat} />
                ))}
              </div>
              <div className="flex flex-col gap-24 sm:gap-24 md:gap-32 lg:gap-48 xl:gap-100 py-8 sm:py-16 lg:py-35 px-4 sm:px-6 lg:px-8">
                {activityStats.col2.map((stat, i) => (
                  <StatCard key={i} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
