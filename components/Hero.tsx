import { heroData, siteConfig } from "@/data";
import React, { Fragment } from "react";

const Hero: React.FC = () => {
  const { title, description, icon, brands, brandText, videoBg } = heroData;

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
        <img src={siteConfig.shopifyBadge} alt="Shopify Plus" />
        <div className="flex justify-between items-end">
          {title && (
            <h1 className="max-w-225 justify-center text-white text-8xl font-extrabold leading-35 mt-10">
              {title}
            </h1>
          )}
          {description && (
            <div className="inline-flex justify-start items-start gap-5 max-w-100 mb-5">
              {icon && (
                <img
                  className="size-4 mt-2.5"
                  src={icon}
                  alt=""
                />
              )}
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
