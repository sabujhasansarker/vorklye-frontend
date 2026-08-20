"use client";

import { aboutPage, homePage } from "@/data";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const INITIAL_COUNT = 14;

const Brand: React.FC = () => {
  const { title, logos } = homePage.brand;
  const [showAll, setShowAll] = useState(false);

  const extra = logos.slice(INITIAL_COUNT);
  const hasMore = extra.length > 0;

  return (
    <section className="border-b border-neutral-900 py-42.5">
      <div className="container m-auto">
        <h2
          className="section-title max-w-361.5"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* Brands */}
        <div className="mt-25 grid grid-cols-7 gap-17.5">
          {logos.slice(0, INITIAL_COUNT).map(({ id, image }) => (
            <img key={id} src={image} alt="" />
          ))}
        </div>

        {/* Extra brands */}
        {hasMore && (
          <div
            className="grid overflow-hidden transition-all duration-500 ease-in-out"
            style={{ gridTemplateRows: showAll ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-7 gap-17.5 pt-17.5">
                {extra.map(({ id, image }, i) => (
                  <img
                    key={id}
                    src={image}
                    alt=""
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      opacity: showAll ? 1 : 0,
                      transform: `translateY(${showAll ? 0 : -10}px)`,
                      transitionDelay: showAll ? `${i * 30}ms` : "0ms",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {hasMore && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="mx-auto mt-25 flex cursor-pointer items-center gap-3.5 text-neutral-500"
          >
            <span className="text-base font-semibold">
              {showAll ? "Show less" : "More brands"}
            </span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </section>
  );
};

export const BrandShort: React.FC = () => {
  const { subtitle, logos } = aboutPage.brand;

  return (
    <section className="border-b border-neutral-900 py-30">
      <div className="container m-auto">
        <p className="sub-title text-center">{subtitle}</p>

        <div className="grid grid-cols-7 gap-17.5 pt-17.5">
          {logos.map(
            (logo) =>
              logo.shortRender && <img key={logo.id} src={logo.image} alt="" />,
          )}
        </div>
      </div>
    </section>
  );
};

export default Brand;
