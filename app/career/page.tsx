"use client";
import { ButtonNormal, ButtonSm } from "@/components/Button";
import { FAQJob } from "@/components/FAQ";
import Footer from "@/components/Footer";
import { careerPageData, jobs, whyWorks } from "@/data";
import { useScrollSmootherSetup, useSplitTitleReveal } from "@/utility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";
import Link from "next/link";
import { Fragment, useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const Home = () => {
  useScrollSmootherSetup();
  useSplitTitleReveal(".section-title");
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");

  const filteredJobs =
    filter === "all" ? jobs : jobs.filter((j) => j.status === filter);
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-20">
                <p className="sub-title mb-0!">{careerPageData.positionsSubtitle}</p>
                <h2
                  className="section-title"
                  dangerouslySetInnerHTML={{ __html: careerPageData.positionsTitle }}
                />
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-full bg-neutral-950 border border-neutral-900 self-start sm:self-auto">
                {(["all", "open", "closed"] as const).map((tab) => {
                  const count =
                    tab === "all"
                      ? jobs.length
                      : jobs.filter((j) => j.status === tab).length;
                  return (
                    <button
                      key={tab}
                      onClick={() => setFilter(tab)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        filter === tab
                          ? "bg-white text-black shadow-sm"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {tab === "all"
                        ? "All Roles"
                        : tab === "open"
                        ? "Open"
                        : "Archived"}{" "}
                      ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-16">
              {filteredJobs.length === 0 ? (
                <div className="py-20 text-center text-neutral-500 border-y border-neutral-900">
                  No roles found in this category.
                </div>
              ) : (
                filteredJobs.map((job) => {
                  const isOpen = job.status === "open";
                  return (
                    <div
                      key={job.id}
                      className={`item group/job flex items-center justify-between border-neutral-900 border-y py-10 transition-colors duration-500 ease-out ${
                        isOpen
                          ? "hover:bg-neutral-950"
                          : "opacity-65 hover:opacity-100 hover:bg-neutral-950/40"
                      }`}
                    >
                      <div className="group-hover/job:translate-x-7.5 transition-transform duration-500 ease-out">
                        <div className="flex items-center gap-3 mb-4">
                          {isOpen ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[11px] font-bold text-yellow-400 tracking-wider uppercase">
                              <span className="size-1.5 rounded-full bg-yellow-400 animate-pulse" />
                              Open
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-bold text-neutral-400 tracking-wider uppercase">
                              Closed / Filled
                            </span>
                          )}
                          <span className="text-xs font-semibold text-neutral-500">
                            {job.department}
                          </span>
                        </div>

                        <h6 className="work-title text-3xl font-bold text-white mb-5 origin-left group-hover/job:scale-[0.85] transition-transform duration-500 ease-out">
                          <Link href={job.link} data-no-hover>
                            {job.title}
                          </Link>
                        </h6>
                        <ul className="flex text-[18px] font-semibold items-center gap-6 text-neutral-400 flex-wrap">
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
                      <div className="group-hover/job:-translate-x-7.5 transition-transform duration-500 ease-out shrink-0 ml-6">
                        {isOpen ? (
                          <ButtonNormal
                            text={careerPageData.applyButtonText}
                            href={job.link}
                          />
                        ) : (
                          <Link
                            href={job.link}
                            className="px-6 py-3 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 text-sm font-semibold transition-all inline-block"
                          >
                            View Archive →
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
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
