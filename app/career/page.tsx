import { ButtonNormal, ButtonSm } from "@/components/Button";
import { FAQJob } from "@/components/FAQ";
import VorklyeLayout from "@/components/VorklyeLayout";
import { careerPage } from "@/data";
import React, { Fragment } from "react";

type Props = {};

const page: React.FC<Props> = () => {
  return (
    <VorklyeLayout>
      <Hero hero={careerPage.hero} />
      <Benift benift={careerPage.benift} />
      <Jobs position={careerPage.position} />
      <section className="py-40">
        <div className="container m-auto">
          <div className="text-center">
            <p className="sub-title">{careerPage.faq.subtitle}</p>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: careerPage.faq.title }}
            ></h2>
          </div>
          <div className="max-w-250 m-auto mt-20">
            <FAQJob faq={careerPage.faq.faqs} />
          </div>
        </div>
      </section>
    </VorklyeLayout>
  );
};

export default page;

const Hero = ({ hero }: any) => {
  const { title, subtitle, button, image } = hero;
  return (
    <section>
      <div className="container m-auto pt-50">
        <div className="flex gap-50 items-end justify-between">
          <h1
            className="w-2/4 justify-center text-white text-6xl font-extrabold leading-24 tracking-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div className="w-1/3">
            <p className="text-xl font-bold leading-9 mb-14">{subtitle}</p>
            <ButtonSm text={button.label} href={button.link} />
          </div>
        </div>
        <div className="about-banner mt-20">
          <img className="w-full" src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

const Benift = ({ benift }: any) => {
  const { title, subtitle, items } = benift;
  return (
    <section className="py-40 border-b border-neutral-900">
      <div className="container m-auto">
        <p className="sub-title">{subtitle}</p>
        <h2 className="section-title">{title}</h2>
        <div className="mt-20">
          {items.map((work, index) => (
            <div
              key={index}
              className="relative flex py-10 justify-between w-full items-center border-y border-neutral-900 cursor-pointer overflow-hidden group/work"
            >
              <div className="hover-bg absolute left-0 bottom-0 w-full h-0 bg-white transition-[height] duration-300 ease-out group-hover/work:h-full" />

              <div className="relative flex items-center group-hover/work:pl-5 duration-300 ease-out">
                <p className="work-number text-xl font-bold text-neutral-400 group-hover/work:text-neutral-600 duration-300 ease-out">
                  {index + 1 <= 9 ? `0${index + 1}` : index + 1}
                </p>
                <h6 className="work-title text-3xl font-bold ml-5 text-white group-hover/work:text-neutral-800 duration-300 ease-out">
                  {work.title}
                </h6>
              </div>

              <div className="relative flex items-center gap-6 duration-300 ease-out group-hover/work:pr-5 transition-[padding]">
                <p className="work-desc text-[18px] font-medium text-neutral-500 max-w-120 leading-7.5 group-hover/work:text-neutral-600 duration-300 ease-out">
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

const Jobs = ({ position }: any) => {
  const { title, subtitle, careers } = position;
  return (
    <section className="py-40 border-b border-neutral-900" id="openroles">
      <div className="container m-auto">
        <div className="flex items-center gap-20">
          <p className="sub-title mb-0!">{subtitle}</p>
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
        </div>
        <div className="mt-20">
          {careers.map((job, i) => (
            <div
              key={i}
              className="item group/job flex items-center justify-between border-neutral-900 border-y py-10 hover:bg-neutral-950 transition-colors duration-500 ease-out"
            >
              <div className="group-hover/job:translate-x-7.5 transition-transform duration-500 ease-out">
                {job.open ? (
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer bg-white text-black shadow-sm">
                      <span className="size-1.5 rounded-full bg-white" />
                      Open
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-bold text-neutral-400 tracking-wider uppercase">
                      Closed
                    </span>
                  </div>
                )}
                <h6 className="work-title text-3xl font-bold text-white mb-5 origin-left group-hover/job:scale-[0.85] transition-transform duration-500 ease-out">
                  <a href={job.link} data-no-hover>
                    {job.title}
                  </a>
                </h6>
                <ul className="flex text-[18px] font-semibold items-center gap-6 text-neutral-400">
                  {job.tags.map((tag, index) => (
                    <Fragment key={index}>
                      <li>{tag}</li>
                      {index + 1 !== job.tags.length && (
                        <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                      )}
                    </Fragment>
                  ))}
                </ul>
              </div>
              <div className="group-hover/job:-translate-x-7.5 transition-transform duration-500 ease-out">
                <ButtonNormal text="Apply now" href={job.link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
