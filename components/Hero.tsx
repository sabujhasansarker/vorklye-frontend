import React from "react";

type Props = {};

const Hero: React.FC<Props> = () => {
  const brands = [
    { id: 1, image: "/images/brand/1.png" },
    { id: 2, image: "/images/brand/2.png" },
    { id: 3, image: "/images/brand/3.png" },
    { id: 4, image: "/images/brand/4.png" },
  ];
  return (
    <div className="relative pt-77.5 min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container m-auto">
        <img src="/images/shopifyplus.svg" alt="" />
        <div className="flex justify-between items-end">
          <h1 className="max-w-225 justify-center text-white text-8xl font-extrabold leading-35 mt-18.25">
            We design, develop and build
          </h1>
          <div className="inline-flex justify-start items-start gap-5 max-w-100 mb-5">
            <img className="size-4 mt-2.5" src="/images/hero-icon.svg" alt="" />
            <p className="justify-center text-gray-200 text-xl font-normal leading-9">
              We're a design and development agency since 2017 who craft digital
              masterpiece products.
            </p>
          </div>
        </div>
        <div className="pt-37.5">
          <div className="flex gap-10 items-center">
            <p className="justify-center text-neutral-500 text-lg font-medium leading-7">
              Shopify partner trusted by great clients
            </p>
            <div className="max-w-135.5 h-9 relative">
              <div className="left-0 top-0 absolute inline-flex justify-start items-center gap-10">
                {brands.map((brand) => (
                  <img src={brand.image} key={brand.id} alt="" />
                ))}
              </div>
              <div className="w-20 h-7 left-0 top-1 absolute bg-linear-to-r from-black to-black/0" />
              <div className="w-20 h-9 left-115.5 top-0 absolute bg-linear-to-r from-black/0 to-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
