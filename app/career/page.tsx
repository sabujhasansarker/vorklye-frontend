"use client";
import { ButtonNormal, ButtonSm } from "@/components/Button";
import { FAQJob } from "@/components/FAQ";
import Footer from "@/components/Footer";
import { careerPageData, jobs, whyWorks } from "@/data";
import { useScrollSmootherSetup, useSplitTitleReveal } from "@/utility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";
import { Fragment } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const Home = () => {
  useScrollSmootherSetup();
  useSplitTitleReveal(".section-title");
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section>
          <div className="container m-auto pt-50">
            <div className="flex gap-50 items-end justify-between">
              <h1 className="w-2/4 justify-center text-white text-6xl font-extrabold leading-24 tracking-tight">
                {careerPageData.heroTitle}
              </h1>
              <div className="w-1/3">
                <p className="text-xl font-bold leading-9 mb-14">
                  {careerPageData.heroSubtitle}
                </p>

                <ButtonSm text={careerPageData.heroCtaText} href="#openroles" />
              </div>
            </div>
            <div className="about-banner mt-20">
              <img
                className="w-full"
                src={careerPageData.bannerImage}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="py-40 border-b border-neutral-900">
          <div className="container m-auto">
            <p className="sub-title">{careerPageData.whyWorkSubtitle}</p>
            <h2 className="section-title">{careerPageData.whyWorkTitle}</h2>
            <div className="mt-20">
              {whyWorks.map((work, index) => (
                <div
                  key={work.id}
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
        <section className="py-40 border-b border-neutral-900" id="openroles">
          <div className="container m-auto">
            <div className="flex items-center gap-20">
              <p className="sub-title mb-0!">{careerPageData.positionsSubtitle}</p>
              <h2
                className="section-title"
                dangerouslySetInnerHTML={{ __html: careerPageData.positionsTitle }}
              />
            </div>
            <div className="mt-20">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="item group/job flex items-center justify-between border-neutral-900 border-y py-10 hover:bg-neutral-950 transition-colors duration-500 ease-out"
                >
                  <div className="group-hover/job:translate-x-7.5 transition-transform duration-500 ease-out">
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
                    <ButtonNormal text={careerPageData.applyButtonText} href={job.link} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-40">
          <div className="container m-auto">
            <div className="text-center">
              <p className="sub-title">{careerPageData.faqSubtitle}</p>
              <h2
                className="section-title"
                dangerouslySetInnerHTML={{ __html: careerPageData.faqTitle }}
              />
            </div>
            <div className="max-w-250 m-auto mt-20">
              <FAQJob />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
