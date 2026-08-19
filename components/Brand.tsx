"use client";

import { brands, brandSectionData } from "@/data";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const INITIAL_COUNT = 14; // Display 7 columns x 2 rows initially

const Brand: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const initialBrands = brands.slice(0, INITIAL_COUNT);
  const extraBrands = brands.slice(INITIAL_COUNT);
  const hasMore = extraBrands.length > 0;

  return (
    <div className="py-42.5 border-b border-neutral-900">
      <div className="container m-auto">
        <h2
          className="max-w-361.5 section-title"
          dangerouslySetInnerHTML={{ __html: brandSectionData.title }}
        />

        {/* Initial visible brands */}
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
                {showAll ? brandSectionData.showLessLabel : brandSectionData.showMoreLabel}
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

export const BrandShort: React.FC = () => {
  return (
    <section className="border-b border-neutral-900 py-30">
      <div className="container m-auto">
        <p className="sub-title text-center">{brandSectionData.shortSubtitle}</p>
        <div
          className="grid transition-all duration-500 ease-in-out"
          style={{
            gridTemplateRows: "1fr",
          }}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-7 gap-17.5 pt-17.5">
              {brands.map((brand) => (
                <img
                  src={brand.image}
                  key={brand.id}
                  alt=""
                  className="transition-all duration-500 ease-in-out"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
