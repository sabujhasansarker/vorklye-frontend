"use client";
import { BrandShort } from "@/components/Brand";
import Button, { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import {
  aboutPageData,
  aboutCounter as counter,
  teamMembers as teams,
} from "@/data";
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
        <section>
          <div className="container m-auto pt-50">
            <div className="flex gap-50 items-end justify-between">
              <h1 className="w-2/4 justify-center text-white text-6xl font-extrabold leading-24 tracking-tight">
                {aboutPageData.heroTitle}
              </h1>
              <div className="w-1/3">
                <p className="text-xl font-bold leading-9 mb-14">
                  {aboutPageData.heroSubtitle}
                </p>

                <ButtonSm text={aboutPageData.heroCtaText} />
              </div>
            </div>
            <div className="about-banner mt-20">
              <img
                className="w-full"
                src={aboutPageData.bannerImage}
                alt=""
              />
            </div>
          </div>
        </section>
        <BrandShort />
        <section className="border-b border-neutral-900 py-20">
          <div className="container m-auto">
            <div className="grid grid-cols-4 gap-30 flex-wrap">
              {counter.map((count) => (
                <div className="counter-item text-center" key={count.id}>
                  <h4 className="text-6xl font-extrabold tracking-tight mb-6">
                    {count.prefix && count.prefix}
                    {count.counter}
                    {count.surfix && count.surfix}
                  </h4>
                  <p className="text-xl font-medium leading-8 max-w-50 m-auto">
                    {count.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-40 border-b border-neutral-900">
          <div className="container m-auto">
            <div className="flex justify-between items-center gap-6">
              <div className="w-2/3 pr-32">
                <p className="sub-title">{aboutPageData.missionSubtitle}</p>
                <h2 className="text-4xl leading-15 font-semibold">
                  {aboutPageData.missionTitle}
                </h2>
              </div>
              <div className="w-1/3 pl-2">
                <img
                  src={aboutPageData.missionImages[0]}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex gap-6 mt-6">
              <img
                src={aboutPageData.missionImages[1]}
                alt=""
                className="w-1/3"
              />
              <img
                src={aboutPageData.missionImages[2]}
                alt=""
                className="w-1/3"
              />
              <img
                src={aboutPageData.missionImages[3]}
                alt=""
                className="w-1/3"
              />
            </div>
            <div className="flex items-center gap-6 mt-6">
              <img
                src={aboutPageData.missionImages[0]}
                alt=""
                className="w-1/3"
              />
              <div className="w-2/3 pl-34">
                <p className="sub-title">{aboutPageData.visionSubtitle}</p>
                <h2 className="text-4xl leading-15 font-semibold">
                  {aboutPageData.visionTitle}
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="py-40 border-b border-neutral-900">
          <div className="container m-auto">
            <div className="flex justify-between items-baseline-last gap-40">
              <div className="w-2/3">
                <p className="sub-title shrink-0 mt-4">{aboutPageData.creativesSubtitle}</p>
                <h2 className="section-title">
                  {aboutPageData.creativesTitle}
                </h2>
              </div>
              <Button text={aboutPageData.joinTeamButtonText} />
            </div>
            <div className="grid grid-cols-4 gap-6 mt-15">
              {teams.map((team) => (
                <div className="team-item" key={team.id}>
                  <img src={team.img} className="w-full rounded-sm" alt="" />
                  <h5 className="text-[22px] font-semibold mt-6 mb-3 text-white">
                    {team.name}
                  </h5>
                  <p className="text-[18px] font-medium text-neutral-500">
                    {team.designation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
