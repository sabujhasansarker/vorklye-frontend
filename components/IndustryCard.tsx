"use client";

import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

const INITIAL_GRADIENT_HEIGHT = 230;

type IndustryCardProps = {
  item: {
    id: string | number;
    title: string;
    des: string;
    image: string;
  };
};

const IndustryCard: React.FC<IndustryCardProps> = ({ item }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const content = contentRef.current;
    const gradient = gradientRef.current;

    if (!content || !gradient) return;

    const card = gradient.parentElement;

    if (!card) return;

    const cardHeight = card.clientHeight;

    gsap.killTweensOf([content, gradient]);

    gsap
      .timeline({
        defaults: {
          overwrite: "auto",
        },
      })
      .to(
        content,
        {
          height: content.scrollHeight,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        0,
      )
      .to(
        gradient,
        {
          height: cardHeight + 50,
          duration: 0.5,
          ease: "power3.out",
        },
        0,
      );
  };

  const handleMouseLeave = () => {
    const content = contentRef.current;
    const gradient = gradientRef.current;

    if (!content || !gradient) return;

    gsap.killTweensOf([content, gradient]);

    gsap
      .timeline({
        defaults: {
          overwrite: "auto",
        },
      })
      .to(
        content,
        {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power3.inOut",
        },
        0,
      )
      .to(
        gradient,
        {
          height: 230,
          duration: 0.4,
          ease: "power3.inOut",
        },
        0,
      );
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden w-full"
    >
      <img
        src={item.image}
        alt={item.title}
        className="block h-150 w-full object-cover"
      />

      <div
        ref={gradientRef}
        className="absolute inset-x-0 -bottom-12.5 z-1 h-57.5 bg-linear-to-b from-transparent via-black/60 to-black"
      />

      <div className="absolute inset-x-0 bottom-0 z-2 p-8 text-white">
        <h4 className="text-2xl font-bold leading-9">{item.title}</h4>

        <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
          <p className="mt-5 max-w-lg font-semibold leading-7 text-neutral-200">
            {item.des}
          </p>

          <a
            href="#"
            className="mt-8 flex size-13 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-105"
          >
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
