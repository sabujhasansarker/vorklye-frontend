import { homePage } from "@/data";
import React, { Fragment } from "react";

const Hero: React.FC = () => {
  const { hero } = homePage;
  const { title, des, showShopifyPlusIcon, videoBg, brand } = hero;

  return (
    <section className="relative sm:min-h-screen overflow-hidden pt-5 pb-10 sm:pb-10 sm:pt-40 md:pt-60 lg:pt-77.5">
      {/* Background */}
      {videoBg && (
        <Fragment>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 size-full object-cover"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </Fragment>
      )}

      <div className="container relative z-10 m-auto px-5 sm:px-8 lg:px-0">
        {showShopifyPlusIcon && (
          <img
            src="/images/shopifyplus.svg"
            alt="Shopify Plus"
            className="h-6 sm:h-8 w-auto"
          />
        )}

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-10">
          {title && (
            <h1 className="mt-6 sm:mt-8 lg:mt-10 max-w-full lg:max-w-225 text-5xl md:text-6xl lg:text-8xl font-extrabold leading-normal sm:leading-normal md:leading-none lg:leading-35 text-white">
              {title}
            </h1>
          )}

          {des && (
            <div className="mb-0 lg:mb-5 flex max-w-full lg:max-w-100 gap-4 sm:gap-5">
              <img
                src="/images/hero-icon.svg"
                alt=""
                className="mt-2 sm:mt-2 lg:mt-2.5 size-3.5 sm:size-4 shrink-0"
              />
              <p className="text-lg lg:text-xl leading-normal sm:leading-8 lg:leading-9 text-gray-200">
                {des}
              </p>
            </div>
          )}
        </div>

        {brand.logos.length > 0 && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-10 pt-16 sm:pt-24 lg:pt-37.5">
            <p className="text-base lg:text-lg font-semibold text-neutral-500 shrink-0">
              {brand.text}
            </p>

            <div className="relative w-full sm:max-w-100 lg:max-w-135.5 overflow-hidden">
              <div className="absolute inset-y-0 left-0 z-10 w-8 sm:w-12 lg:w-16 bg-linear-to-r from-black to-transparent" />
              <div className="absolute inset-y-0 right-0 z-10 w-8 sm:w-12 lg:w-16 bg-linear-to-l from-black to-transparent" />

              <div className="flex w-max animate-marquee gap-6 sm:gap-8 lg:gap-10">
                {[...brand.logos, ...brand.logos].map(
                  ({ id, image, home }, index) =>
                    home && (
                      <img
                        key={`${id}-${index}`}
                        src={image}
                        alt="Brand Logo"
                        className="object-contain"
                      />
                    ),
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
