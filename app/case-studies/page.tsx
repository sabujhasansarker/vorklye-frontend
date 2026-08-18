"use client";
import { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import { caseStudies, caseStudiesPageData, type CaseStudy } from "@/data";
import { useScrollSmootherSetup, useSplitTitleReveal } from "@/utility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const Home = () => {
  useScrollSmootherSetup();
  useSplitTitleReveal(".section-title");

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section className="pt-50">
          <div className="container m-auto">
            <div className="flex gap-50 items-end justify-between">
              <h1 className="w-2/4 justify-center text-white text-6xl font-extrabold leading-24 tracking-tight">
                {caseStudiesPageData.heroTitle}
              </h1>
              <div className="w-1/3">
                <p className="text-xl font-bold leading-9 mb-14">
                  {caseStudiesPageData.heroSubtitle}
                </p>
                <ButtonSm text={caseStudiesPageData.heroCtaText} />
              </div>
            </div>
          </div>
        </section>
        <section className="pb-30 pt-50 border-b border-neutral-900">
          <div className="container m-auto">
            <ul className="flex justify-start gap-30 text-xl font-semibold tracking-tight">
              {caseStudiesPageData.filterCategories.map((cat, index) => (
                <li key={index}>
                  <a href={cat.href} className={index === 0 ? "flex gap-4 items-center" : ""}>
                    {index === 0 && <div className="size-2 bg-white rounded-full"></div>}
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-6 gap-y-25 mt-10">
              {caseStudies.map((item) => (
                <div key={item.id}>
                  <img
                    src={item.image}
                    className="w-full h-150 object-cover rounded-sm"
                    alt=""
                  />
                  <p className="text-sm font-bold mt-6 uppercase">
                    {item.industry}
                  </p>
                  <h4 className="text-2xl font-semibold mt-4 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[18px] leading-8 font-medium text-neutral-400 mt-3">
                    {item.description}
                  </p>
                  <div className="flex gap-2 mt-10">
                    {item.services.map((service, index) => (
                      <p
                        key={index}
                        className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-white text-[13px] font-semibold"
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonial />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
