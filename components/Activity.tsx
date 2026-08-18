"use client";

import { activitySectionData, activityStats as stats, type StatItem as Stat } from "@/data";
import { useActiveClosestToCenter, useTitlePinScroll } from "@/utility";
import React, { useRef } from "react";

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
  <div className="stat-item">
    <h2 className="text-8xl font-medium leading-none text-white md:text-9xl">
      {stat.value}
    </h2>
    <p className="mt-8 text-xl leading-8 text-neutral-400">{stat.text}</p>
  </div>
);

const Activity: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useTitlePinScroll(sectionRef, titleRef, rightColRef);
  useActiveClosestToCenter(rightColRef, ".stat-item");

  return (
    <div className="bg-neutral-950">
      <div className="container m-auto">
        <div ref={sectionRef} className="flex gap-50 relative">
          <h2
            ref={titleRef}
            className="section-title py-35 h-fit self-start"
            dangerouslySetInnerHTML={{ __html: activitySectionData.title }}
          />

          <div
            ref={rightColRef}
            className="relative mx-auto max-w-230 border-l border-white/10 pl-8"
          >
            <div className="flex items-center border-x border-white/10 gap-8">
              <div className="flex flex-col gap-100 py-35 px-8 border-r border-white/10">
                {stats.col1.map((stat, i) => (
                  <StatCard key={i} stat={stat} />
                ))}
              </div>
              <div className="self-stretch w-px bg-white/10"></div>
              <div className="flex flex-col gap-100 py-35 px-8">
                {stats.col2.map((stat, i) => (
                  <StatCard key={i} stat={stat} />
                ))}
              </div>
              <div className="self-stretch w-px bg-white/10 mr-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
