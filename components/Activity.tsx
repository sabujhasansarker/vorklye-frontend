"use client";

import { useActiveClosestToCenter } from "@/utility/useActiveClosestToCenter";
import { useTitlePinScroll } from "@/utility/useTitlePinScroll";
import React, { useRef } from "react";

type Stat = { value: string; text: string };

const stats: { col1: Stat[]; col2: Stat[] } = {
  col1: [
    { value: "1.8M", text: "We helped to get companies with $200M+ funding." },
    {
      value: "12+",
      text: "We have had quite a run in our 12+ years of working.",
    },
    { value: "99%", text: "Average 99% clients satisfaction with expertise." },
  ],
  col2: [
    { value: "260+", text: "Crafted responsive, user-centered website & app." },
    { value: "80+", text: "Professional skilled designers and developers." },
  ],
};

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
          <h2 ref={titleRef} className="section-title py-35 h-fit self-start">
            Perfect <br /> — activity
          </h2>

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
