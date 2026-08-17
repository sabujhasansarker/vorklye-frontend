"use client";
import { ButtonNormal, ButtonSm } from "@/components/Button";
import { FAQJob } from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useScrollSmootherSetup, useSplitTitleReveal } from "@/utility";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";
import { Fragment, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const whyWorks = [
  {
    id: 1,
    title: "Remote Work = Freedom",
    description:
      "Skip the daily commute—we’ve embraced a remote-first culture from day one",
  },
  {
    id: 2,
    title: "Two Festival Bonuses",
    description:
      "Double the celebrations, double the rewards — enjoy two annual bonuses, each equal to 50% of your gross salary.",
  },
  {
    id: 3,
    title: "Generous Leave Benefits",
    description:
      "Our comprehensive leave benefits—including annual, sick, and marriage leave—ensure you can maintain a healthy work–life balance.",
  },
  {
    id: 4,
    title: "Mentorship & Personal Growth",
    description:
      "Not just a boss, but a mentor—helping you achieve your fullest potential.",
  },
  {
    id: 5,
    title: "Device & Internet Allowance",
    description:
      "At Vorklye, we help our team work at their best by supporting device purchases and internet costs.",
  },
  {
    id: 6,
    title: "Health & Wellness Allowance",
    description:
      "Your health—and your family’s—comes first. Our medical allowance stands by you during life’s toughest moments, offering emergency loans with simple and flexible EMI plans.",
  },
  {
    id: 7,
    title: "Generous Leave Benefits",
    description:
      "Our comprehensive leave benefits—including annual, sick, and marriage leave—ensure you can maintain a healthy work–life balance.",
  },
  {
    id: 8,
    title: "Performance Bonuses",
    description:
      "Your effort matters at Vorklye. Go the extra mile and earn bonuses for exceptional contributions.",
  },
  {
    id: 9,
    title: "Emergency Loan Facilities",
    description:
      "We support our team during unexpected moments by offering emergency loans with simple and flexible EMI plans.",
  },
  {
    id: 10,
    title: "Generous Leave Benefits",
    description:
      "Our comprehensive leave benefits—including annual, sick, and marriage leave—ensure you can maintain a healthy work–life balance.",
  },
];

const jobs = [
  {
    id: 1,
    title: "Executive / Senior Executive, Growth",
    link: "#",
    tags: ["Uttara, Dhaka", "Full-Time"],
  },
  {
    id: 2,
    title: "Executive / Senior Executive, Growth",
    link: "#",
    tags: ["Uttara, Dhaka", "Full-Time"],
  },
];

const Home = () => {
  useScrollSmootherSetup();
  useSplitTitleReveal(".section-title");

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      console.log("itemRefs count:", itemRefs.current.filter(Boolean).length);
      const cleanups: (() => void)[] = [];

      itemRefs.current.forEach((el) => {
        if (!el) return;

        const bg = el.querySelector<HTMLDivElement>(".hover-bg");
        const number = el.querySelector<HTMLParagraphElement>(".work-number");
        const title = el.querySelector<HTMLHeadingElement>(".work-title");
        const desc = el.querySelector<HTMLParagraphElement>(".work-desc");

        if (!bg || !number || !title || !desc) {
          return;
        }

        const tl = gsap.timeline({ paused: true });

        tl.to(
          bg,
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power4.inOut",
            border: "white",
          },
          0,
        )
          .fromTo(
            number,
            { color: "rgb(163, 163, 163)" },
            {
              color: "rgb(23, 23, 23)",
              x: 10,
              duration: 0.5,
              ease: "power3.out",
            },
            0.05,
          )
          .fromTo(
            title,
            { color: "rgb(255, 255, 255)" },
            {
              color: "rgb(23, 23, 23)",
              x: 10,
              duration: 0.5,
              ease: "power3.out",
            },
            0.05,
          )
          .fromTo(
            desc,
            { color: "rgb(115, 115, 115)" },
            {
              color: "rgb(23, 23, 23)",
              x: 10,
              duration: 0.5,
              ease: "power3.out",
            },
            0.05,
          );

        const handleEnter = () => tl.play();
        const handleLeave = () => tl.reverse();

        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);

        cleanups.push(() => {
          el.removeEventListener("mouseenter", handleEnter);
          el.removeEventListener("mouseleave", handleLeave);
          tl.kill();
        });
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: undefined, dependencies: [] },
  );

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section>
          <div className="container m-auto pt-50">
            <div className="flex gap-50 items-end justify-between">
              <h1 className="w-2/4 justify-center text-white text-6xl font-extrabold leading-24 tracking-tight">
                Collaborate, Create, and Grow Your Career
              </h1>
              <div className="w-1/3">
                <p className="text-xl font-bold leading-9 mb-14">
                  We’re a team of thinkers, makers, and doers — passionate about
                  creating meaningful experiences and solving real problems. If
                  you’re driven by creativity, collaboration, and constant
                  growth, you’ll feel right at home here.
                </p>

                <ButtonSm text="Explore open roles" href="#openroles" />
              </div>
            </div>
            <div className="about-banner mt-20">
              <img
                className="w-full"
                src="https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="py-40 border-b border-neutral-900">
          <div className="container m-auto">
            <p className="sub-title">/ Design Agency</p>
            <h2 className="section-title">Why Work With Us?</h2>
            <div className="mt-20">
              {whyWorks.map((work, index) => (
                <div
                  key={work.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="relative flex py-10 px-5 justify-between w-full items-center border-y border-neutral-900 cursor-pointer overflow-hidden"
                >
                  <div className="hover-bg absolute inset-0 bg-white origin-left scale-x-0 pointer-events-none" />

                  <div className="relative flex items-center">
                    <p className="work-number text-xl font-bold text-neutral-400">
                      {index + 1 <= 9 ? `0${index + 1}` : index + 1}
                    </p>
                    <h6 className="work-title text-3xl font-bold ml-5 text-white">
                      {work.title}
                    </h6>
                  </div>

                  <div className="relative flex items-center gap-6">
                    <p className="work-desc text-[18px] font-medium text-neutral-500 max-w-120 leading-7.5">
                      {work.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-40 border-b border-neutral-900">
          <div className="container m-auto">
            <div className="flex items-center gap-20">
              <p className="sub-title mb-0!">/Position</p>
              <h2 className="section-title">
                Our Open <span>Position</span>
              </h2>
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
                    <ButtonNormal text="Apply now" href={job.link} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-40">
          <div className="container m-auto">
            <div className="text-center">
              <p className="sub-title">/FAQ</p>
              <h2 className="section-title">
                Questions? We’re <span>Here to Help</span>
              </h2>
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
