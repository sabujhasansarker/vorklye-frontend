"use client";
import { BrandShort } from "@/components/Brand";
import { ButtonSm } from "@/components/Button";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { ServiceItems } from "@/components/Service";
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
                Everything Your Brand Needs to Build, Grow and Scale
              </h1>
              <div className="w-1/3">
                <p className="text-xl font-bold leading-9 mb-14">
                  From the first brand strategy session to the final line of
                  code, we handle every dimension of your growth under one roof.
                </p>

                <ButtonSm text="Let’s Discuss Your Project" />
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
        <ServiceItems />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
