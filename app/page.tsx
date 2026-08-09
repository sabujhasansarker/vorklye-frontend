"use client";
import About from "@/components/About";
import Activity from "@/components/Activity";
import Brand from "@/components/Brand";
import CaseStudiesSection from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import WorkingProcess from "@/components/WorkingProcess";
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
        <Hero />
        <About />
        <CaseStudiesSection />
        <Brand />
        <ServiceSection />
        <WorkingProcess />
        <FAQ />
        <Activity />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
