"use client";
import { BrandShort } from "@/components/Brand";
import { ButtonSm } from "@/components/Button";
import { ServiceCaseStudiesSection } from "@/components/CaseStudies";
import VorklyeLayout from "@/components/VorklyeLayout";
import { ServiceWorkingProcess } from "@/components/WorkingProcess";
import { services } from "@/data";
import { ServiceFaq } from "@/data/type";
import { ArrowUpRight } from "lucide-react";
import React, { use, useState } from "react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const ServiceDetailPage: React.FC<Props> = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = use(params);
  const service = services.find(
    (item) => item.title.split(" ").join("-").split("/").join("-") === slug,
  );

  if (!service) {
    return (
      <VorklyeLayout>
        <h1>Service Not Found</h1>
      </VorklyeLayout>
    );
  }

  const {
    title,
    shortDes,
    image,
    subServices,
    thumbnail,
    skillImage,
    process,
    id,
    faqs,
    metrics,
  } = service;

  return (
    <VorklyeLayout>
      <div className="container m-auto px-5 sm:px-8 lg:px-0 pt-5 sm:pt-32 lg:pt-50">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-50 items-start">
          {/* LEFT */}
          <div className="w-full lg:w-3/8">
            <h1
              className="text-white hero-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <p className="hero-subtitle mt-5 sm:mt-6 max-w-2xl">{shortDes}</p>

            {skillImage && (
              <img
                src={skillImage}
                className="w-40 sm:w-52 lg:w-65 mt-8 sm:mt-12 lg:mt-20"
                alt=""
              />
            )}
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-5/8 flex flex-col gap-10 sm:gap-14 lg:gap-20 items-start lg:items-end">
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-7 gap-x-6 lg:gap-x-12">
              {subServices.map((service, i) => (
                <li
                  key={i}
                  className="font-semibold text-base sm:text-lg flex items-start gap-3 sm:gap-5 text-neutral-300"
                >
                  <span className="inline-block shrink-0 rounded-full text-xs sm:text-sm font-bold text-neutral-500 mt-0.5">
                    {i + 1 <= 9 ? `0${i + 1}` : i + 1}
                  </span>

                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <ButtonSm text="Book a meeting" />
          </div>
        </div>

        {/* BANNER */}
        {thumbnail && (
          <div className="about-banner mt-10 sm:mt-14 lg:mt-20">
            <img
              className="w-full h-auto max-h-150 object-cover rounded-sm"
              src={thumbnail}
              alt={title.replace(/<[^>]*>/g, "")}
            />
          </div>
        )}
      </div>
      <BrandShort />
      <ServiceWorkingProcess
        process={process}
        title="WorkingProcess"
        subtitle="/ Process"
      />
      <section className="py-14 sm:py-20 lg:py-24 border-b border-neutral-900">
        <div className="container m-auto px-5 sm:px-8 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-6">
            {metrics?.map((metric, i) => (
              <div key={i} className="text-center px-4 sm:px-6 lg:px-4">
                <h4 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-5 lg:mb-6">
                  {metric.value}
                </h4>

                <p className="text-base sm:text-lg font-semibold leading-6 sm:leading-7 text-neutral-400 max-w-60 mx-auto">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceCaseStudiesSection
        title="Real stories, real results – see what we've made possible."
        subtitle="/Case Studies"
        serviceId={id}
      />
      <FAQService
        title={`Some question and answer for <span>${title}</span>`}
        subtitle="/ FAQ"
        faqs={faqs}
      />
    </VorklyeLayout>
  );
};

export default ServiceDetailPage;

type FaqProps = {
  title: string;
  subtitle: string;
  faqs: ServiceFaq[];
};

const FAQService = ({ faqs, title, subtitle }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <section className="border-b border-neutral-900 py-16 sm:py-20 md:py-28 lg:py-40">
      <div className="container mx-auto px-5 sm:px-8 lg:px-0">
        {/* HEADER */}
        <div className="text-center">
          <p className="sub-title mb-4 sm:mb-5">{subtitle}</p>

          <h2
            className="section-title max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* FAQ */}
        <div className="w-full max-w-[1000px] mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="accordion-items w-full">
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;
              const isLast = index === faqs.length - 1;

              return (
                <div
                  key={index}
                  className={`
                accordion-item
                border-b
                border-neutral-900
                ${index !== 0 ? "py-6 sm:py-7 md:py-8" : "pb-6 sm:pb-7 md:pb-8"}
                ${isLast ? "!border-0 !pb-0" : ""}
              `}
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isActive}
                    className="
                  accordion-item-title
                  flex
                  justify-between
                  items-center
                  gap-6
                  w-full
                  text-left
                  cursor-pointer
                "
                  >
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold leading-6 sm:leading-7 text-gray-200">
                      {item.question}
                    </h4>

                    <ArrowUpRight
                      className={`
                    size-5
                    sm:size-6
                    shrink-0
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-neutral-300 rotate-90"
                        : "text-neutral-600"
                    }
                  `}
                    />
                  </button>

                  {/* ANSWER */}
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 sm:pt-5 md:pt-6 pr-6 sm:pr-10">
                        <p className="text-sm sm:text-base md:text-[17px] text-neutral-500 leading-6 sm:leading-7 md:leading-8 font-medium">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
