"use client";
import { BrandShort } from "@/components/Brand";
import Button, { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useScrollSmootherSetup, useSplitTitleReveal } from "@/utility";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const brands = [
  { id: 1, image: "/images/brand/1.png" },
  { id: 2, image: "/images/brand/2.png" },
  { id: 3, image: "/images/brand/3.png" },
  { id: 4, image: "/images/brand/4.png" },
  { id: 5, image: "/images/brand/5.png" },
  { id: 6, image: "/images/brand/6.png" },
  { id: 7, image: "/images/brand/7.png" },
  { id: 8, image: "/images/brand/8.png" },
  { id: 9, image: "/images/brand/9.png" },
  { id: 10, image: "/images/brand/10.png" },
  { id: 11, image: "/images/brand/11.png" },
  { id: 12, image: "/images/brand/12.png" },
  { id: 13, image: "/images/brand/13.png" },
  { id: 14, image: "/images/brand/14.png" },
  { id: 15, image: "/images/brand/15.png" },
  { id: 16, image: "/images/brand/16.png" },
  { id: 17, image: "/images/brand/17.png" },
  { id: 18, image: "/images/brand/18.png" },
  { id: 19, image: "/images/brand/19.png" },
  { id: 20, image: "/images/brand/20.png" },
  { id: 21, image: "/images/brand/21.png" },
];

const counter = [
  {
    id: 1,
    counter: 50,
    prefix: "+",
    text: "Shopify Experts in our team",
  },
  {
    id: 2,
    counter: 60,
    prefix: "+",
    text: "Managed Shopify Plus Stores",
  },
  {
    id: 3,
    counter: 90,
    surfix: "%",
    text: "Customers continue to work with us",
  },
  {
    id: 4,
    counter: 200,
    prefix: "+",
    text: "Realised projects",
  },
];

const teams = [
  {
    id: 1,
    name: "Shahid Miah",
    designation: "Founder & CEO",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/690d6e37dc1fd0b514fe70ec_Shahd%20mia-p-500.webp",
  },
  {
    id: 2,
    name: "Shahid Miah",
    designation: "Founder & CEO",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/690d6e37dc1fd0b514fe70ec_Shahd%20mia-p-500.webp",
  },
  {
    id: 3,
    name: "Shahid Miah",
    designation: "Founder & CEO",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/690d6e37dc1fd0b514fe70ec_Shahd%20mia-p-500.webp",
  },
  {
    id: 4,
    name: "Shahid Miah",
    designation: "Founder & CEO",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/690d6e37dc1fd0b514fe70ec_Shahd%20mia-p-500.webp",
  },
];

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
                Bringing Vision To Life, One Line Of Code At A Time{" "}
              </h1>
              <div className="w-1/3">
                <p className="text-xl font-bold leading-9 mb-14">
                  We’re more than a software company. We’re your strategic
                  partner in building purposeful, high-impact digital products
                  that grow with your business.{" "}
                </p>

                <ButtonSm text="Book a Free Strategy Call" />
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
                <p className="sub-title">/ Mission </p>
                <h2 className="text-4xl leading-15 font-semibold">
                  Bridging the gap between business vision and digital execution
                  with tailored, expert-driven solutions.{" "}
                </h2>
              </div>
              <div className="w-1/3 pl-2">
                <img
                  src="https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex gap-6 mt-6">
              <img
                src="https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp"
                alt=""
                className="w-1/3"
              />
              <img
                src="https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp"
                alt=""
                className="w-1/3"
              />
              <img
                src="https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp"
                alt=""
                className="w-1/3"
              />
            </div>
            <div className="flex items-center gap-6 mt-6">
              <img
                src="https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp"
                alt=""
                className="w-1/3"
              />
              <div className="w-2/3 pl-34">
                <p className="sub-title">/ Vision </p>
                <h2 className="text-4xl leading-15 font-semibold">
                  To shape a future where digital solutions are intuitive,
                  impactful, and universally available.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="py-40 border-b border-neutral-900">
          <div className="container m-auto">
            <div className="flex justify-between items-baseline-last gap-40">
              <div className="w-2/3">
                <p className="sub-title shrink-0 mt-4">/ Meet our creatives</p>
                <h2 className="section-title">
                  We are your product geek, UX mind, UI lovers, & Webflow
                  builders. Your creative team, just a Slack away.
                </h2>
              </div>
              <Button text="Join our team" />
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
