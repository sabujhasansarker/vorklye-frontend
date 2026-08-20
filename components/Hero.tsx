import { homePage } from "@/data";
import React, { Fragment } from "react";

const Hero: React.FC = () => {
  const { hero } = homePage;
  const { title, des, showShopifyPlusIcon, videoBg, brand } = hero;

  return (
    <section className="relative min-h-screen overflow-hidden pt-77.5">
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

      <div className="container relative z-10 m-auto">
        {showShopifyPlusIcon && (
          <img src="/images/shopifyplus.svg" alt="Shopify Plus" />
        )}

        <div className="flex items-end justify-between">
          {title && (
            <h1 className="mt-10 max-w-225 text-8xl font-extrabold leading-35 text-white">
              {title}
            </h1>
          )}

          {des && (
            <div className="mb-5 flex max-w-100 gap-5">
              <img
                src="/images/hero-icon.svg"
                alt=""
                className="mt-2.5 size-4"
              />
              <p className="text-xl leading-9 text-gray-200">{des}</p>
            </div>
          )}
        </div>

        {brand.logos.length > 0 && (
          <div className="flex items-center gap-10 pt-37.5">
            <p className="text-lg font-medium text-neutral-500">{brand.text}</p>

            <div className="relative max-w-135.5 overflow-hidden">
              <div className="absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-black to-transparent" />
              <div className="absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-black to-transparent" />

              <div className="flex w-max animate-marquee gap-10">
                {[...brand.logos, ...brand.logos].map(
                  ({ id, image, home }, index) =>
                    home && (
                      <img
                        key={`${id}-${index}`}
                        src={image}
                        alt="Brand Logo"
                        className="shrink-0 object-contain"
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
