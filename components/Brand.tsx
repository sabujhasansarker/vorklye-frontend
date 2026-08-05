import { ChevronDown } from "lucide-react";
import React from "react";

type Props = {};

const Brand: React.FC<Props> = () => {
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
  return (
    <div className="py-42.5 border-b border-neutral-900">
      <div className="container m-auto">
        <h2 className="max-w-361.5 section-title">
          We’re a team of commerce specialists who have helped countless{" "}
          <span className="text-neutral-500">
            brands build, grow and increase.
          </span>
        </h2>

        <div className="grid grid-cols-7 gap-17.5 mt-25">
          {brands.map(
            (brand) =>
              brand.id <= 21 && <img src={brand.image} key={brand.id} alt="" />,
          )}
        </div>
        <div className="text-center mt-25">
          <a
            href="#"
            className="inline-flex justify-start items-center gap-3.5 text-neutral-500"
          >
            <span className="text-base font-semibold leading-7">
              More brands
            </span>
            <ChevronDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brand;
