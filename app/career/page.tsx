"use client";
import { ButtonNormal, ButtonSm } from "@/components/Button";
import VorklyeLayout from "@/components/VorklyeLayout";
import { careerPage } from "@/data";
import {
  CareerBenefit,
  CareerFaq,
  CareerHero,
  CareerPosition,
} from "@/data/type";
import { ArrowUpRight } from "lucide-react";
import React, { Fragment, useState } from "react";

type Props = {};

const page: React.FC<Props> = () => {
  return (
    <VorklyeLayout>
      <Hero hero={careerPage.hero} />
      <Benift benift={careerPage.benift} />
      <Jobs position={careerPage.position} />
      <FAQJob faq={careerPage.faq} />
    </VorklyeLayout>
  );
};

export default page;

type HeroProps = {
  hero: CareerHero;
};

const Hero = ({ hero }: HeroProps) => {
  const { title, subtitle, button, image } = hero;
  return (
    <section>
      <div className="container m-auto px-5 sm:px-8 lg:px-0 pt-5 sm:pt-32 lg:pt-50">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-50 items-start lg:items-end justify-between">
          <h1
            className="w-full lg:w-2/4 text-white hero-title"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          ></h1>
          <div className="w-full lg:w-1/3">
            <p className="hero-subtitle mb-6 sm:mb-10 lg:mb-14">
              {hero.subtitle}
            </p>

            <ButtonSm text={hero.button.label} href={hero.button.link} />
          </div>
        </div>
        <div className="about-banner mt-10 sm:mt-14 lg:mt-20">
          <img className="w-full" src={hero.image} alt="" />
        </div>
      </div>
    </section>
  );
};

type BenifitProps = {
  benift: CareerBenefit;
};

const Benift = ({ benift }: BenifitProps) => {
  const { title, subtitle, items } = benift;

  return (
    <section className="border-b border-neutral-900 py-16 sm:py-20 md:py-28 lg:py-40">
      <div className="container mx-auto px-5 sm:px-8 lg:px-0">
        {/* HEADER */}
        <div>
          <p className="sub-title mb-4 sm:mb-5">{subtitle}</p>

          <h2
            className="section-title max-w-4xl"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
        </div>

        {/* BENEFITS */}
        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          {items.map((work, index) => (
            <div
              key={index}
              className="
                relative
                flex
                flex-col
                md:flex-row
                md:items-center
                justify-between
                gap-5
                md:gap-10
                w-full
                py-7
                sm:py-8
                md:py-10
                border-y
                border-neutral-900
                cursor-pointer
                overflow-hidden
                group/work
              "
            >
              {/* HOVER BACKGROUND */}
              <div
                className="
                  hover-bg
                  absolute
                  left-0
                  bottom-0
                  w-full
                  h-0
                  bg-white
                  transition-[height]
                  duration-300
                  ease-out
                  group-hover/work:h-full
                "
              />

              {/* TITLE */}
              <div
                className="
                  relative
                  flex
                  items-center
                  min-w-0
                  transition-[padding]
                  duration-300
                  ease-out
                  md:group-hover/work:pl-5
                "
              >
                <p
                  className="
                    work-number
                    shrink-0
                    text-base
                    sm:text-lg
                    md:text-xl
                    font-bold
                    text-neutral-400
                    group-hover/work:text-neutral-600
                    transition-colors
                    duration-300
                  "
                >
                  {index + 1 <= 9 ? `0${index + 1}` : index + 1}
                </p>

                <h6
                  className="
                    work-title
                    ml-4
                    sm:ml-5
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-bold
                    leading-tight
                    text-white
                    group-hover/work:text-neutral-800
                    transition-colors
                    duration-300
                  "
                >
                  {work.title}
                </h6>
              </div>

              {/* DESCRIPTION */}
              <div
                className="
                  relative
                  flex
                  items-center
                  w-full
                  md:w-auto
                  md:shrink-0
                  transition-[padding]
                  duration-300
                  ease-out
                  md:group-hover/work:pr-5
                "
              >
                <p
                  className="
                    work-desc
                    w-full
                    md:max-w-[480px]
                    text-sm
                    sm:text-base
                    md:text-[18px]
                    font-medium
                    leading-6
                    sm:leading-7
                    md:leading-7.5
                    text-neutral-500
                    group-hover/work:text-neutral-600
                    transition-colors
                    duration-300
                  "
                >
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type JobProps = {
  position: CareerPosition;
};
const Jobs = ({ position }: JobProps) => {
  const { title, subtitle, careers } = position;

  return (
    <section
      className="border-b border-neutral-900 py-16 sm:py-20 md:py-28 lg:py-40"
      id="openroles"
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-0">
        {/* HEADER */}
        <div className="divide-amber-50">
          <p className="sub-title">{subtitle}</p>

          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* JOBS */}
        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          {careers.map((job, i) => (
            <div
              key={i}
              className="
                item
                group/job
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-8
                md:gap-10
                border-y
                border-neutral-900
                py-7
                sm:py-8
                md:py-10
                hover:bg-neutral-950
                transition-colors
                duration-500
                ease-out
              "
            >
              {/* JOB INFO */}
              <div
                className="
                  min-w-0
                  w-full
                  md:w-auto
                  transition-transform
                  duration-500
                  ease-out
                  md:group-hover/job:translate-x-7.5
                "
              >
                {/* STATUS */}
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  {job.open ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white text-black">
                      <span className="size-1.5 rounded-full bg-green-500" />
                      Open
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] sm:text-[11px] font-bold text-neutral-400 tracking-wider uppercase">
                      Closed
                    </span>
                  )}
                </div>

                {/* TITLE */}
                <h6
                  className="
                    work-title
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-bold
                    leading-tight
                    text-white
                    mb-4
                    sm:mb-5
                    origin-left
                    md:group-hover/job:scale-[0.85]
                    transition-transform
                    duration-500
                    ease-out
                  "
                >
                  <a
                    href={job.fromLink}
                    data-no-hover
                    className="hover:text-neutral-300 transition-colors"
                  >
                    {job.title}
                  </a>
                </h6>

                {/* TAGS */}
                <ul className="flex flex-wrap text-sm sm:text-base md:text-[18px] font-semibold items-center gap-x-3 sm:gap-x-5 gap-y-2 text-neutral-400">
                  {job.tags.map((tag, index) => (
                    <Fragment key={index}>
                      <li>{tag}</li>

                      {index + 1 !== job.tags.length && (
                        <li
                          aria-hidden="true"
                          className="size-1.5 sm:size-2 bg-neutral-500 rounded-full shrink-0"
                        />
                      )}
                    </Fragment>
                  ))}
                </ul>
              </div>

              {/* APPLY BUTTON */}
              <div
                className="
                  shrink-0
                  self-start
                  md:self-auto
                  transition-transform
                  duration-500
                  ease-out
                  md:group-hover/job:-translate-x-7.5
                "
              >
                <ButtonNormal text="Apply now" href={job.fromLink} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type FaqProps = {
  faq: CareerFaq;
};

const FAQJob = ({ faq }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const { title, subtitle, faqs } = faq;
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
                      {item.title}
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
                          {item.text}
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
