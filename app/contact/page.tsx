"use client";
import { BrandShort } from "@/components/Brand";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { contactPageData } from "@/data";
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
        <section className="pt-50 pb-10">
          <div className="container m-auto">
            <div className="flex gap-60">
              <div className="max-w-140">
                <div className="">
                  <h2
                    className="section-title text-6xl leading-22"
                    dangerouslySetInnerHTML={{ __html: contactPageData.title }}
                  />
                  <img
                    src={contactPageData.bannerImage}
                    alt=""
                    className="my-10 h-20"
                  />
                  <p className="text-[18px] font-semibold text-neutral-400">
                    {contactPageData.description}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <BrandShort />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
