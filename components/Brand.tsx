"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const brands = [
  { id: 1, image: "/images/brand/1.png" },
  { id: 2, image: "/images/brand/2.png" },
  { id: 3, image: "/images/brand/3.png" },
  { id: 4, image: "/images/brand/4.png" },
  { id: 5, image: "/images/brand/5.png" },
  { id: 6, image: "/images/brand/6.png" },
  { id: 7, image: "/images/brand/7.png" },
  { id: 8, image: "/images/brand/8.png" },
  { id: 9, image: "/images/brand/9.png" },
  { id: 10, image: "/images/brand/10.png" },
  { id: 11, image: "/images/brand/11.png" },
  { id: 12, image: "/images/brand/12.png" },
  { id: 13, image: "/images/brand/13.png" },
  { id: 14, image: "/images/brand/14.png" },
  { id: 15, image: "/images/brand/15.png" },
  { id: 16, image: "/images/brand/16.png" },
  { id: 17, image: "/images/brand/17.png" },
  { id: 18, image: "/images/brand/18.png" },
  { id: 19, image: "/images/brand/19.png" },
  { id: 20, image: "/images/brand/20.png" },
  { id: 21, image: "/images/brand/21.png" },
  { id: 22, image: "/images/brand/22.png" },
];

const INITIAL_COUNT = 14; // 7 columns x 2 rows প্রথমে দেখাবে

const Brand: React.FC<Props> = () => {
  const [showAll, setShowAll] = useState(false);

  const initialBrands = brands.slice(0, INITIAL_COUNT);
  const extraBrands = brands.slice(INITIAL_COUNT);
  const hasMore = extraBrands.length > 0;

  return (
    <div className="py-42.5 border-b border-neutral-900">
      <div className="container m-auto">
        <h2 className="max-w-361.5 section-title">
          We’re a team of commerce specialists who have helped countless{" "}
          <span className="text-neutral-500">
            brands build, grow and increase.
          </span>
        </h2>

        {/* সবসময় visible brands */}
        <div className="grid grid-cols-7 gap-17.5 mt-25">
          {initialBrands.map((brand) => (
            <img src={brand.image} key={brand.id} alt="" />
          ))}
        </div>

        {/* Accordion-style collapsible extra brands */}
        {hasMore && (
          <div
            className="grid transition-all duration-500 ease-in-out"
            style={{
              gridTemplateRows: showAll ? "1fr" : "0fr",
            }}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-7 gap-17.5 pt-17.5">
                {extraBrands.map((brand, index) => (
                  <img
                    src={brand.image}
                    key={brand.id}
                    alt=""
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      opacity: showAll ? 1 : 0,
                      transform: showAll
                        ? "translateY(0)"
                        : "translateY(-10px)",
                      transitionDelay: showAll ? `${index * 30}ms` : "0ms",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-25">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex justify-start items-center gap-3.5 text-neutral-500 cursor-pointer"
            >
              <span className="text-base font-semibold leading-7">
                {showAll ? "Show less" : "More brands"}
              </span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brand;
