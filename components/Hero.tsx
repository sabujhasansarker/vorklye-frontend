"use client";
import React, { Fragment } from "react";

type Props = {};

type HeroData = {
  brands: {
    id: number;
    image: string;
  }[];
  title?: string;
  description?: string;
  brandText?: string;
  videoBg?: string;
};

const Hero: React.FC<Props> = () => {
  const heroData: HeroData = {
    brandText: "Shopify partner trusted by great clients",
    brands: [
      { id: 1, image: "/images/brand/1.png" },
      { id: 2, image: "/images/brand/2.png" },
      { id: 3, image: "/images/brand/3.png" },
      { id: 4, image: "/images/brand/4.png" },
      { id: 5, image: "/images/brand/5.png" },
    ],
    title: "We design, develop and build",
    description:
      "We're a design and development agency since 2017 who craft digital masterpiece products.",
    videoBg: "/images/hero-video.mp4",
  };

  const { title, description, brands, brandText, videoBg } = heroData;

  return (
    <div className="relative pt-77.5 min-h-screen overflow-hidden">
      {/* Background Video */}
      {videoBg && (
        <Fragment>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </Fragment>
      )}

      {/* Content */}
      <div className="relative z-10 container m-auto">
        <img src="/images/shopifyplus.svg" alt="" />
        <div className="flex justify-between items-end">
          {title && (
            <h1 className="max-w-225 justify-center text-white text-8xl font-extrabold leading-35 mt-10">
              {title}
            </h1>
          )}
          {description && (
            <div className="inline-flex justify-start items-start gap-5 max-w-100 mb-5">
              <img
                className="size-4 mt-2.5"
                src="/images/hero-icon.svg"
                alt=""
              />
              <p className="justify-center text-gray-200 text-xl font-normal leading-9">
                {description}
              </p>
            </div>
          )}
        </div>
        <div className="pt-37.5">
          <div className="flex gap-10 items-center">
            {brandText && (
              <p className="justify-center text-neutral-500 text-lg font-medium leading-7">
                {brandText}
              </p>
            )}
            {brands.length > 0 && (
              <div className="relative flex max-w-135.5 overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-black to-transparent" />
                <div className="flex w-max animate-marquee items-center gap-10">
                  {[...brands, ...brands].map((brand, index) => (
                    <div key={`${brand.id}-${index}`} className="shrink-0">
                      <img
                        src={brand.image}
                        alt="Brand Logo"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
