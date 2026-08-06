import React from "react";

type Props = {};

const Service: React.FC<Props> = () => {
  return (
    <div className="py-35 border-b border-neutral-900">
      <div className="container m-auto">
        <div className="flex gap-8.75">
          <div className="max-w-156.25">
            <p className="justify-start text-gray-200 text-lg font-medium leading-8">
              /What we build
            </p>
            <h2 className="section-title mt-7.5">
              End-to-end Shopify systems, designed to scale the brand behind the
              store.
            </h2>
          </div>
          <div className="service-items w-full">
            <div className="service-item p-10 border border-neutral-900">
              <div className="flex gap-5">
                <p className="justify-start text-gray-200 text-base font-extrabold leading-7">
                  02
                </p>
                <h4 className="justify-start text-gray-200 text-3xl font-semibold leading-9">
                  WordPress Development
                </h4>
              </div>
              <p className="max-w-136.25 justify-start text-gray-200 text-base font-medium leading-7 mt-12">
                Custom Shopify and Shopify Plus builds designed for performance,
                flexibility, checkout, markets, and location-aware logic.
              </p>
              <div className="flex mt-7 gap-x-2 gap-y-3">
                <a
                  href="#"
                  className="px-5 py-3 bg-neutral-900 inline-flex justify-center items-center gap-14 text-gray-200 text-sm font-medium leading-6"
                >
                  Shopify Store Setup
                </a>
                <a
                  href="#"
                  className="px-5 py-3 bg-neutral-900 inline-flex justify-center items-center gap-14 text-gray-200 text-sm font-medium leading-6"
                >
                  Custom Shopify Development
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
