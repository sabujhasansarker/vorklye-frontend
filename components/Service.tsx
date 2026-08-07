import React from "react";

type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "WordPress Development",
    description:
      "Custom Shopify and Shopify Plus builds designed for performance, flexibility, checkout, markets, and location-aware logic.",
    tags: ["Shopify Store Setup", "Custom Shopify Development"],
  },
  {
    number: "02",
    title: "WordPress Development 2",
    description:
      "Custom Shopify and Shopify Plus builds designed for performance, flexibility, checkout, markets, and location-aware logic.",
    tags: ["Shopify Store Setup", "Custom Shopify Development"],
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="py-35 border-b border-neutral-900">
      <div className="container m-auto flex gap-8.75">
        <div className="max-w-156.25">
          <p className="text-gray-200 text-lg font-medium leading-8">
            /What we build
          </p>

          <h2 className="section-title mt-7.5">
            End-to-end Shopify systems, designed to scale the brand behind the
            store.
          </h2>
        </div>

        <div className="service-items w-full">
          {services.map(({ number, title, description, tags }) => (
            <div
              key={number}
              className="service-item p-10 border border-neutral-900"
            >
              <div className="flex gap-5">
                <span className="text-gray-200 text-base font-extrabold">
                  {number}
                </span>

                <h4 className="text-gray-200 text-3xl font-semibold">
                  {title}
                </h4>
              </div>

              <p className="max-w-136.25 text-gray-200 text-base font-medium leading-7 mt-12">
                {description}
              </p>

              <div className="flex flex-wrap mt-7 gap-2">
                {tags.map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="px-5 py-3 bg-neutral-900 text-gray-200 text-sm font-medium"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
