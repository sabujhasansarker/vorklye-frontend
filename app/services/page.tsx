"use client";
import { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
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
                Careers At Boomdevs For The Wild Thinkers
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
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
